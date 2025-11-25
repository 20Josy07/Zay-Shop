export type ProductReview = {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
};

export type ProductImage = {
  id: string;
  url: string;
  alt: string;
  hint: string;
};

export type ProductCategory = 'Lifestyle' | 'Running' | 'Basketball' | 'Training';

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: ProductCategory;
  images: ProductImage[];
  sizes: number[];
  rating: number;
  reviews: ProductReview[];
  inventory: number;
  featured: boolean;
};

export type CartItem = {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  quantity: number;
  size: number;
};
