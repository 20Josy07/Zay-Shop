'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { ProductImage } from '@/lib/types';

interface ProductGalleryProps {
  images: ProductImage[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) {
    return <div className="aspect-square w-full bg-muted rounded-lg flex items-center justify-center">No Image</div>;
  }
  
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      <div className="flex md:flex-col gap-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(index)}
            className={cn(
              'relative aspect-square w-20 rounded-md overflow-hidden ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring',
              selectedImage === index && 'ring-2 ring-ring'
            )}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="80px"
              data-ai-hint={image.hint}
            />
          </button>
        ))}
      </div>
      <div className="relative aspect-square w-full flex-1 rounded-lg overflow-hidden">
        <Image
          src={images[selectedImage].url}
          alt={images[selectedImage].alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          data-ai-hint={images[selectedImage].hint}
        />
      </div>
    </div>
  );
}
