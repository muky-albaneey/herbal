import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
  lang_token: string | null;
  setToken: (newToken: string | null) => void;
};

const useAuthStore = create<State>()(
  immer((set) => ({
    lang_token: 'en', // Default language
    setToken: (newToken) => {
      set((state) => {
        state.lang_token = newToken;
      });
    },
  }))
);

export default useAuthStore;
