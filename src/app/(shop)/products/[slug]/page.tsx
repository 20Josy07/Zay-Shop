'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/data';
import { ProductGallery } from '@/components/products/product-gallery';
import { StarRating } from '@/components/products/star-rating';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/lib/cart-context';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  const { dispatch } = useCart();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  if (!product) {
    notFound();
  }
  
  const handleAddToCart = () => {
    if (selectedSize === null) {
        toast({
            title: "Please select a size",
            description: "You must choose a size before adding to the cart.",
            variant: "destructive"
        })
      return;
    }
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.images[0].url,
        quantity: 1,
        size: selectedSize,
      },
    });
  };

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <ProductGallery images={product.images} />
        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{product.brand} / {product.category}</p>
            <h1 className="text-4xl font-bold tracking-tight mt-1">{product.name}</h1>
            <div className="flex items-center gap-2 mt-3">
              <StarRating rating={product.rating} />
              <span className="text-sm text-muted-foreground">({product.reviews.length} reviews)</span>
            </div>
          </div>
          <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
          <Separator />
          <p className="text-muted-foreground">{product.description}</p>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Select Size</h3>
            <RadioGroup onValueChange={(val) => setSelectedSize(Number(val))} className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <div key={size}>
                  <RadioGroupItem value={String(size)} id={`size-${size}`} className="sr-only" />
                  <Label
                    htmlFor={`size-${size}`}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border text-sm ring-offset-background has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-ring"
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <Button onClick={handleAddToCart} size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Add to Cart</Button>
          {product.inventory < 20 && <p className="text-sm text-center text-destructive/80 font-medium">Only {product.inventory} left in stock!</p>}
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Customer Reviews</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {product.reviews.length > 0 ? (
            product.reviews.map(review => (
              <div key={review.id} className="flex gap-4">
                <Avatar>
                  <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{review.author}</p>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <StarRating rating={review.rating} className="my-1"/>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">No reviews yet. Be the first to write one!</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
