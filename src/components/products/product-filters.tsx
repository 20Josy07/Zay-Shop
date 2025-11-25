'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { getBrands, getCategories } from '@/lib/data';

interface ProductFiltersProps {
  filters: {
    category: string;
    brand: string;
    minPrice: number;
    maxPrice: number;
    search: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<any>>;
}

export function ProductFilters({ filters, setFilters }: ProductFiltersProps) {
  const brands = React.useMemo(() => getBrands(), []);
  const categories = React.useMemo(() => getCategories(), []);

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev: any) => ({ ...prev, [key]: value }));
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
            <Label htmlFor="search">Search</Label>
            <Input 
                id="search" 
                placeholder="Search by name..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
            />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select value={filters.category} onValueChange={(value) => handleFilterChange('category', value)}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {categories.map((cat) => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="brand">Brand</Label>
          <Select value={filters.brand} onValueChange={(value) => handleFilterChange('brand', value)}>
            <SelectTrigger id="brand">
              <SelectValue placeholder="Select a brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {brands.map((brand) => <SelectItem key={brand} value={brand}>{brand}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <Label>Price Range</Label>
          <Slider
            min={0}
            max={300}
            step={10}
            value={[filters.minPrice, filters.maxPrice]}
            onValueChange={([min, max]) => setFilters((prev: any) => ({...prev, minPrice: min, maxPrice: max }))}
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${filters.minPrice}</span>
            <span>${filters.maxPrice}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
