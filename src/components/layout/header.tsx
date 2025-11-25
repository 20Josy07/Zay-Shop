'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Search, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './logo';
import { CartIcon } from '../cart/cart-icon';
import React from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Shop' },
  { href: '/cart', label: 'Cart' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const NavItems = () => (
    <>
      {navLinks.map((link) => (
        <Button key={link.href} asChild variant="ghost" className={cn('text-sm font-medium', pathname === link.href ? 'text-primary' : 'text-muted-foreground')}>
          <Link href={link.href} onClick={() => setIsOpen(false)}>{link.label}</Link>
        </Button>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="font-bold">Zay-Shop</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <NavItems />
          </nav>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6" onClick={() => setIsOpen(false)}>
                <Logo />
                <span className="font-bold">Zay-Shop</span>
              </Link>
              <nav className="flex flex-col space-y-4">
                <NavItems />
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <form className="w-full max-w-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search shoes..."
                className="pl-9"
              />
            </div>
          </form>
          <CartIcon />
        </div>
      </div>
    </header>
  );
}
