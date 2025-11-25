'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import type { CartItem } from './types';
import { useToast } from '@/hooks/use-toast';

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: string; size: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { id:string; size: number; quantity: number } }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id && item.size === action.payload.size
      );
      if (existingItemIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, items: updatedItems };
      }
      return { ...state, items: [...state.items, action.payload] };
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(
          item => !(item.id === action.payload.id && item.size === action.payload.size)
        ),
      };
    }
    case 'UPDATE_QUANTITY': {
        if(action.payload.quantity <= 0) {
            return {
                ...state,
                items: state.items.filter(
                  item => !(item.id === action.payload.id && item.size === action.payload.size)
                ),
            };
        }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.size === action.payload.size
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const { toast } = useToast();

  const enhancedDispatch: React.Dispatch<CartAction> = (action) => {
    if(action.type === 'ADD_ITEM') {
        toast({
            title: "Item added to cart",
            description: `${action.payload.name} (Size: ${action.payload.size}) has been added to your cart.`,
        });
    }
    dispatch(action);
  };

  return (
    <CartContext.Provider value={{ state, dispatch: enhancedDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
