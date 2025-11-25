import { Star, StarHalf, StarOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  className?: string;
}

export function StarRating({ rating, totalStars = 5, className }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={cn('flex items-center gap-0.5 text-accent', className)}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-current" />
      ))}
      {halfStar && <StarHalf className="w-4 h-4 fill-current" />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-muted-foreground/50 fill-muted-foreground/50" />
      ))}
    </div>
  );
}
