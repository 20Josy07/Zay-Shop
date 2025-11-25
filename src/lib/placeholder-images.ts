import data from './placeholder-images.json';
import type { ProductImage } from './types';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// This type is slightly different from the ProductImage in types.ts.
// It uses imageUrl and imageHint instead of url and hint.
// This is to maintain compatibility with the original placeholder structure.
const typedData: { placeholderImages: (Omit<ProductImage, 'url' | 'hint'> & { imageUrl: string, imageHint: string })[] } = data;

export const placeholderImages = typedData.placeholderImages.map(img => ({
  id: img.id,
  alt: img.description,
  url: img.imageUrl,
  hint: img.imageHint
}));
