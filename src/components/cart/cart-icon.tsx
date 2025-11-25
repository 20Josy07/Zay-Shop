'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart-context';
import { useEffect, useState } from 'react';

export function CartIcon() {
  const { state } = useCart();
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Button asChild variant="ghost" size="icon" className="relative">
      <Link href="/cart">
        <ShoppingCart className="h-5 w-5" />
        {isClient && itemCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {itemCount}
          </span>
        )}
        <span className="sr-only">Shopping Cart</span>
      </Link>
    </Button>
  );
}
