// import create from 'zustand';

// // Define the Zustand store
// const useCartStore = create((set) => ({
//   cart: [], // Initial state for the cart is an empty array

//   // Function to add an item to the cart
//   addItemToCart: (item) => set((state) => ({
//     cart: [...state.cart, item],
//   })),

//   // Optionally, you can also add functions to remove items, clear the cart, etc.
//   removeItemFromCart: (itemId) => set((state) => ({
//     cart: state.cart.filter((item) => item.id !== itemId),
//   })),

//   clearCart: () => set({ cart: [] }),
// }));

// export default useCartStore;
import create from 'zustand';

// Define the type for a cart item
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity?: number; // Optional field if you want to track quantity
}

// Define the type for the store's state and actions
interface CartState {
  cart: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (itemId: string) => void;
  clearCart: () => void;
}

// Create the Zustand store with TypeScript types
const useCartStore = create<CartState>((set) => ({
  cart: [],

  addItemToCart: (item) => set((state) => ({
    cart: [...state.cart, item],
  })),

  removeItemFromCart: (itemId) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== itemId),
  })),

  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
