import { create } from 'zustand';
import { CartItem, Pet } from '../types';

interface CartState {
  items: CartItem[];
  addToCart: (pet: Pet) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addToCart: (pet: Pet) =>
    set(state => {
      const existingItem = state.items.find(item => item.id === pet.id);

      // If item already in cart, increase quantity
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.id === pet.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      // If item not in cart, add it with quantity 1
      return {
        items: [...state.items, { ...pet, quantity: 1 }],
      };
    }),

  removeFromCart: (id: string) =>
    set(state => ({
      items: state.items.filter(item => item.id !== id),
    })),

  clearCart: () => set({ items: [] }),

  getTotalPrice: (): number => {
    const state = get();
    return state.items.reduce(
      (total: number, item: CartItem) => total + parseFloat(item.price) * item.quantity,
      0,
    );
  },

  getItemCount: (): number => {
    const state = get();
    return state.items.reduce((count: number, item: CartItem) => count + item.quantity, 0);
  },
}));
