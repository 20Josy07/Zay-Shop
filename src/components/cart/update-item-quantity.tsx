'use client';

import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';

interface UpdateItemQuantityProps {
    itemId: string;
    itemSize: number;
    quantity: number;
}

export function UpdateItemQuantity({ itemId, itemSize, quantity }: UpdateItemQuantityProps) {
  const { dispatch } = useCart();

  const handleUpdateQuantity = (newQuantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: itemId, size: itemSize, quantity: newQuantity },
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={() => handleUpdateQuantity(quantity - 1)}
      >
        <Minus className="h-4 w-4" />
        <span className="sr-only">Decrease quantity</span>
      </Button>
      <span className="w-8 text-center font-medium">{quantity}</span>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={() => handleUpdateQuantity(quantity + 1)}
      >
        <Plus className="h-4 w-4" />
        <span className="sr-only">Increase quantity</span>
      </Button>
    </div>
  );
}
