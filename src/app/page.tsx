import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getFeaturedProducts } from '@/lib/data';
import { ProductCard } from '@/components/products/product-card';
import { ShoeRecommender } from '@/components/ai/shoe-recommender';
import { placeholderImages } from '@/lib/placeholder-images';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const heroImage = placeholderImages.find((img) => img.id === 'hero-1');

  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <section className="relative h-[50vh] md:h-[60vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Find Your Perfect Pair</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Discover our collection of stylish, comfortable, and durable shoes for any occasion.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tight">Featured Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto px-4">
        <ShoeRecommender />
      </section>
    </div>
  );
}
