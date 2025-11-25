'use server';

/**
 * @fileOverview AI-powered shoe recommendation flow.
 *
 * This file defines a Genkit flow that recommends shoes to a user based on their past browsing
 * and purchase history.
 *
 * @interface RecommendationInput - The input schema for the shoe recommendation flow.
 * @interface RecommendationOutput - The output schema for the shoe recommendation flow.
 * @function recommendShoes - The main function to trigger the shoe recommendation flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema
const RecommendationInputSchema = z.object({
  userId: z.string().describe('The ID of the user for whom to generate recommendations.'),
  browsingHistory: z
    .array(z.string())
    .describe('An array of shoe IDs representing the user\'s browsing history.'),
  purchaseHistory: z
    .array(z.string())
    .describe('An array of shoe IDs representing the user\'s purchase history.'),
  inventoryLevels: z
    .record(z.number())
    .describe('A map of shoe IDs to their current inventory levels.'),
});
export type RecommendationInput = z.infer<typeof RecommendationInputSchema>;

// Define the output schema
const RecommendationOutputSchema = z.object({
  recommendedShoes: z.array(z.string()).describe('An array of shoe IDs that are recommended for the user.'),
});
export type RecommendationOutput = z.infer<typeof RecommendationOutputSchema>;

// Exported function to call the flow
export async function recommendShoes(input: RecommendationInput): Promise<RecommendationOutput> {
  return recommendShoesFlow(input);
}

const recommendShoesPrompt = ai.definePrompt({
  name: 'recommendShoesPrompt',
  input: {schema: RecommendationInputSchema},
  output: {schema: RecommendationOutputSchema},
  prompt: `You are an AI assistant that recommends shoes to users based on their browsing and purchase history.

  Here is the user's browsing history (shoe IDs):
  {{#each browsingHistory}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Here is the user's purchase history (shoe IDs):
  {{#each purchaseHistory}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Here are the current inventory levels for each shoe (shoe ID -> quantity):
  {{#each inventoryLevels}}{{{@key}}}: {{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Recommend shoes that the user might be interested in, considering both their past activity and current inventory.
  Only recommend shoes that are currently in stock (quantity > 0).

  Ensure that the output only contains IDs from shoes in inventory.
  `,
});

// Define the Genkit flow
const recommendShoesFlow = ai.defineFlow(
  {
    name: 'recommendShoesFlow',
    inputSchema: RecommendationInputSchema,
    outputSchema: RecommendationOutputSchema,
  },
  async input => {
    // Filter out-of-stock shoes from recommendations
    const inStockShoes = Object.entries(input.inventoryLevels)
      .filter(([, quantity]) => quantity > 0)
      .map(([shoeId]) => shoeId);

    const {output} = await recommendShoesPrompt({
      ...input,
      inventoryLevels: input.inventoryLevels,
    });

    if (output) {
      // Further filter the LLM output to only include in-stock shoes. This is a redundant safety check.
      output.recommendedShoes = output.recommendedShoes.filter(shoeId => inStockShoes.includes(shoeId));
      return output;
    } else {
      return {recommendedShoes: []};
    }
  }
);
