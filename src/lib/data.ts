import type { Product, ProductCategory } from './types';
import { placeholderImages } from './placeholder-images';

const products: Product[] = [
  {
    id: '1',
    slug: 'urban-runner-pro',
    name: 'Urban Runner Pro',
    description: "Experience the ultimate in comfort and style with the Urban Runner Pro. Designed for the modern city dweller, these shoes feature a lightweight breathable mesh and responsive cushioning. Perfect for your daily run or a casual day out.",
    price: 129.99,
    brand: 'NexaStride',
    category: 'Running',
    images: placeholderImages.filter(p => p.id.startsWith('shoe-1-')),
    sizes: [7, 8, 9, 10, 11, 12],
    rating: 4.5,
    inventory: 50,
    featured: true,
    reviews: [
      { id: 'r1', author: 'Alex Johnson', rating: 5, text: "Incredibly comfortable and stylish. I wear them everywhere!", date: '2023-08-15' },
      { id: 'r2', author: 'Maria Garcia', rating: 4, text: "Great for running, very lightweight. A bit pricey but worth it.", date: '2023-08-12' },
    ],
  },
  {
    id: '2',
    slug: 'classic-court-ace',
    name: 'Classic Court Ace',
    description: "A timeless silhouette meets modern craftsmanship. The Classic Court Ace is made with premium leather and a durable rubber outsole. Its minimalist design makes it a versatile choice for any wardrobe.",
    price: 89.99,
    brand: 'Vero',
    category: 'Lifestyle',
    images: placeholderImages.filter(p => p.id.startsWith('shoe-2-')),
    sizes: [8, 9, 10, 11],
    rating: 4.8,
    inventory: 75,
    featured: true,
    reviews: [
        { id: 'r3', author: 'James Smith', rating: 5, text: "My new favorite sneakers. They look great with everything.", date: '2023-09-01' },
    ],
  },
  {
    id: '3',
    slug: 'trail-blazer-xt',
    name: 'Trail Blazer XT',
    description: "Conquer any terrain with the Trail Blazer XT. These rugged training shoes provide superior grip, stability, and protection. Featuring a waterproof upper and reinforced toe cap, they are built to last.",
    price: 149.99,
    brand: 'TerraFlex',
    category: 'Training',
    images: placeholderImages.filter(p => p.id.startsWith('shoe-3-')),
    sizes: [9, 10, 11, 12, 13],
    rating: 4.7,
    inventory: 30,
    featured: false,
    reviews: [
      { id: 'r4', author: 'Emily White', rating: 5, text: "Perfect for hiking. My feet felt secure and comfortable.", date: '2023-07-20' },
    ],
  },
  {
    id: '4',
    slug: 'sky-dunk-master',
    name: 'Sky Dunk Master',
    description: "Dominate the court with the Sky Dunk Master. Engineered for explosive jumps and quick cuts, these basketball shoes offer maximum ankle support and impact absorption. The unique traction pattern gives you control on any surface.",
    price: 179.99,
    brand: 'AeroJump',
    category: 'Basketball',
    images: placeholderImages.filter(p => p.id.startsWith('shoe-4-')),
    sizes: [9, 10, 11, 12, 13, 14],
    rating: 4.9,
    inventory: 25,
    featured: true,
    reviews: [
      { id: 'r5', author: 'Chris Lee', rating: 5, text: "Best basketball shoes I've ever owned. The grip is insane!", date: '2023-09-10' },
    ],
  },
  {
    id: '5',
    slug: 'zenith-walker',
    name: 'Zenith Walker',
    description: "Simplicity and elegance define the Zenith Walker. This lifestyle shoe is crafted from soft suede and features a clean, minimalist design. It's the perfect shoe for those who appreciate understated luxury.",
    price: 109.99,
    brand: 'Vero',
    category: 'Lifestyle',
    images: placeholderImages.filter(p => p.id.startsWith('shoe-5-')),
    sizes: [7, 8, 9, 10],
    rating: 4.6,
    inventory: 60,
    featured: false,
    reviews: [],
  },
  {
    id: '6',
    slug: 'velocity-run',
    name: 'Velocity Run',
    description: "Feel the speed with the Velocity Run. Built for competitive runners, these shoes are ultra-lightweight and feature a carbon fiber plate for maximum energy return. Break your personal bests in style.",
    price: 199.99,
    brand: 'NexaStride',
    category: 'Running',
    images: placeholderImages.filter(p => p.id.startsWith('shoe-6-')),
    sizes: [8, 9, 10, 11, 12],
    rating: 4.8,
    inventory: 40,
    featured: false,
    reviews: [],
  },
  {
    id: '7',
    slug: 'apex-lift-pro',
    name: 'Apex Lift Pro',
    description: "Elevate your training sessions with the Apex Lift Pro. Designed for weightlifting and cross-training, these shoes provide a stable base and excellent support. The flat, wide sole ensures maximum ground contact and stability.",
    price: 119.99,
    brand: 'TerraFlex',
    category: 'Training',
    images: placeholderImages.filter(p => p.id.startsWith('shoe-7-')),
    sizes: [9, 10, 11],
    rating: 4.4,
    inventory: 80,
    featured: true,
    reviews: [],
  },
  {
    id: '8',
    slug: 'hoop-legend-retro',
    name: 'Hoop Legend Retro',
    description: "A throwback to a golden era of basketball. The Hoop Legend Retro combines iconic 90s style with modern comfort. The high-top design and bold colorways make a statement on and off the court.",
    price: 159.99,
    brand: 'AeroJump',
    category: 'Basketball',
    images: placeholderImages.filter(p => p.id.startsWith('shoe-8-')),
    sizes: [10, 11, 12, 13],
    rating: 4.7,
    inventory: 15,
    featured: false,
    reviews: [],
  }
];

export function getProducts() {
  return products;
}

export function getFeaturedProducts() {
  return products.filter(p => p.featured);
}

export function getProductBySlug(slug: string) {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory) {
  return products.filter(p => p.category === category);
}

export function getBrands() {
    const brands = products.map(p => p.brand);
    return [...new Set(brands)];
}

export function getCategories() {
    const categories = products.map(p => p.category);
    return [...new Set(categories)];
}
