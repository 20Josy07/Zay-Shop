'use client';

import { useState, useMemo, useEffect } from 'react';
import { ProductCard } from '@/components/products/product-card';
import { ProductFilters } from '@/components/products/product-filters';
import { getProducts } from '@/lib/data';
import type { Product } from '@/lib/types';
import { useSearchParams } from 'next/navigation';

export default function ProductsPage() {
  const allProducts = useMemo(() => getProducts(), []);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);

  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category');
  
  const [filters, setFilters] = useState({
    category: initialCategory || 'all',
    brand: 'all',
    minPrice: 0,
    maxPrice: 300,
    search: '',
  });

  useEffect(() => {
    let products = allProducts;

    if (filters.category !== 'all') {
      products = products.filter(p => p.category === filters.category);
    }
    if (filters.brand !== 'all') {
      products = products.filter(p => p.brand === filters.brand);
    }
    products = products.filter(p => p.price >= filters.minPrice && p.price <= filters.maxPrice);

    if(filters.search) {
        products = products.filter(p => p.name.toLowerCase().includes(filters.search.toLowerCase()));
    }

    setFilteredProducts(products);
  }, [filters, allProducts]);

  return (
    <div className="grid md:grid-cols-[280px_1fr] gap-8">
      <aside>
        <ProductFilters filters={filters} setFilters={setFilters} />
      </aside>
      <main>
        <h1 className="text-3xl font-bold tracking-tight mb-6">Our Shoes</h1>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold">No products found</h2>
            <p className="text-muted-foreground mt-2">Try adjusting your filters to find what you're looking for.</p>
          </div>
        )}
      </main>
    </div>
  );
}
