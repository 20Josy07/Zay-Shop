import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StarRating } from './star-rating';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link href={`/products/${product.slug}`} className="flex-grow">
        <CardHeader className="p-0">
          <div className="relative aspect-square w-full">
            {product.images[0] && (
              <Image
                src={product.images[0].url}
                alt={product.images[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                data-ai-hint={product.images[0].hint}
              />
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <h3 className="font-semibold text-lg mt-1">{product.name}</h3>
          <div className="mt-2">
            <StarRating rating={product.rating} />
          </div>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <p className="font-bold text-xl">${product.price.toFixed(2)}</p>
        <Button asChild>
          <Link href={`/products/${product.slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
