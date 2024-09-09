
// export default useCartStore;
import { create } from 'zustand';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  totalPrice: () => number; 
}

const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existingItemIndex = state.cart.findIndex((cartItem) => cartItem.id === item.id);
      let updatedCart;

      if (existingItemIndex >= 0) {
        // Item already exists in the cart, update its quantity
        updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + item.quantity,
        };
      } else {
        // Item does not exist, add it to the cart
        updatedCart = [...state.cart, item];
      }

      // Remove any items with zero quantity
      const filteredCart = updatedCart.filter((cartItem) => cartItem.quantity > 0);
      
      return { cart: filteredCart };
    }),

  removeFromCart: (id) =>
    set((state) => {
      console.log('Removing item with id:', id); // Debugging to check the id being passed
      const updatedCart = state.cart.filter((item) => item.id !== id);
      console.log('Updated cart after removal:', updatedCart); // For debugging after the cart is updated
      return { cart: updatedCart };
    }),

  totalPrice: () => {
    const { cart } = get(); // Access the cart state
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
}));

export default useCartStore;
