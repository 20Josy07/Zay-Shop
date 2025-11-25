'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Trash2 } from 'lucide-react';
import { UpdateItemQuantity } from '@/components/cart/update-item-quantity';

export default function CartPage() {
  const { state, dispatch } = useCart();
  const { items } = state;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemoveItem = (id: string, size: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, size } });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-8">Your Cart</h1>
      {items.length === 0 ? (
        <Card className="text-center py-20">
            <CardContent>
                <h2 className="text-2xl font-semibold">Your cart is empty</h2>
                <p className="text-muted-foreground mt-2">Looks like you haven't added anything to your cart yet.</p>
                <Button asChild className="mt-6">
                    <Link href="/products">Start Shopping</Link>
                </Button>
            </CardContent>
        </Card>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <Card key={`${item.id}-${item.size}`} className="flex items-center p-4">
                <div className="relative h-24 w-24 rounded-md overflow-hidden mr-4">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <Link href={`/products/${item.slug}`} className="font-semibold hover:underline">{item.name}</Link>
                  <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                  <p className="text-sm font-semibold">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-4">
                    <UpdateItemQuantity itemId={item.id} itemSize={item.size} quantity={item.quantity} />
                    <Button variant="ghost" size="icon" onClick={() => handleRemoveItem(item.id, item.size)}>
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                        <span className="sr-only">Remove item</span>
                    </Button>
                </div>
              </Card>
            ))}
          </div>

          <aside>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full">Proceed to Checkout</Button>
              </CardFooter>
            </Card>
          </aside>
        </div>
      )}
    </div>
  );
}
