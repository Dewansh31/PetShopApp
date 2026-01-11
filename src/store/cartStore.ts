import {create} from 'zustand';
import {CartItem, Pet} from '../types';

interface CartState {
  items: CartItem[];
  addToCart: (pet: Pet) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartState>(set => ({
  items: [],
  
  addToCart: (pet: Pet) =>
    set(state => {
      const existingItem = state.items.find(item => item.id === pet.id);
      
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.id === pet.id
              ? {...item, quantity: item.quantity + 1}
              : item,
          ),
        };
      }
      
      return {
        items: [...state.items, {...pet, quantity: 1}],
      };
    }),
  
  removeFromCart: (id: string) =>
    set(state => ({
      items: state.items.filter(item => item.id !== id),
    })),
  
  clearCart: () => set({items: []}),
  
  getTotalPrice: () => {
    const state = useCartStore.getState();
    return state.items.reduce(
      (total, item) => total + parseFloat(item.price) * item.quantity,
      0,
    );
  },
  
  getItemCount: () => {
    const state = useCartStore.getState();
    return state.items.reduce((count, item) => count + item.quantity, 0);
  },
}));
