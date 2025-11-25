'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Bot, Loader2 } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { getProducts } from '@/lib/data';
import type { Product } from '@/lib/types';
import { ProductCard } from '../products/product-card';

const recommenderSchema = z.object({
  useCase: z.enum(['running', 'casual', 'training', 'basketball']),
  style: z.enum(['modern', 'classic', 'rugged', 'sporty']),
});

type RecommenderFormValues = z.infer<typeof recommenderSchema>;

// Mock AI logic
const getRecommendations = (preferences: RecommenderFormValues): Product[] => {
  const allProducts = getProducts();
  
  let recommended = allProducts.filter(p => p.inventory > 0);

  // Simple mapping from form values to product categories/brands
  if (preferences.useCase === 'running') {
    recommended = recommended.filter(p => p.category === 'Running');
  } else if (preferences.useCase === 'casual') {
    recommended = recommended.filter(p => p.category === 'Lifestyle');
  } else if (preferences.useCase === 'training') {
    recommended = recommended.filter(p => p.category === 'Training');
  } else if (preferences.useCase === 'basketball') {
    recommended = recommended.filter(p => p.category === 'Basketball');
  }
  
  // Further filter by style preferences (simplified logic)
  if(preferences.style === 'sporty') {
    recommended = recommended.filter(p => p.brand === 'NexaStride' || p.brand === 'AeroJump');
  } else if(preferences.style === 'classic') {
    recommended = recommended.filter(p => p.brand === 'Vero');
  } else if(preferences.style === 'rugged') {
    recommended = recommended.filter(p => p.brand === 'TerraFlex');
  }

  return recommended.sort((a, b) => b.rating - a.rating).slice(0, 4);
};

export function ShoeRecommender() {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RecommenderFormValues>({
    resolver: zodResolver(recommenderSchema),
    defaultValues: {
      useCase: 'casual',
      style: 'modern',
    },
  });

  const onSubmit = (values: RecommenderFormValues) => {
    setIsLoading(true);
    setRecommendations([]);
    // Simulate API call delay
    setTimeout(() => {
      const result = getRecommendations(values);
      setRecommendations(result);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card className="bg-card">
      <CardHeader className="flex flex-row items-start gap-4">
        <div className="bg-primary p-3 rounded-full">
            <Bot className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
            <CardTitle className="text-2xl">AI Shoe Finder</CardTitle>
            <CardDescription>Tell us what you need, and our AI will find the perfect shoes for you.</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="useCase"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Use</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="How will you use these shoes?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="casual">Casual & Everyday</SelectItem>
                        <SelectItem value="running">Running & Jogging</SelectItem>
                        <SelectItem value="training">Gym & Training</SelectItem>
                        <SelectItem value="basketball">Basketball</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="style"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Style</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="What's your preferred style?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="modern">Modern & Minimal</SelectItem>
                        <SelectItem value="classic">Classic & Timeless</SelectItem>
                        <SelectItem value="rugged">Rugged & Outdoorsy</SelectItem>
                        <SelectItem value="sporty">Sporty & Athletic</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" disabled={isLoading} className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Finding shoes...
                </>
              ) : (
                'Get Recommendations'
              )}
            </Button>
          </form>
        </Form>

        {(isLoading || recommendations.length > 0) && (
            <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">Our Top Picks For You</h3>
                {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="rounded-lg border bg-card text-card-foreground shadow-sm h-[400px]">
                                <div className="bg-muted h-1/2 rounded-t-lg"></div>
                                <div className="p-4 space-y-3">
                                    <div className="h-4 bg-muted rounded w-3/4"></div>
                                    <div className="h-4 bg-muted rounded w-1/2"></div>
                                    <div className="h-8 bg-muted rounded w-1/4 mt-4"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {recommendations.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        )}
      </CardContent>
    </Card>
  );
}
