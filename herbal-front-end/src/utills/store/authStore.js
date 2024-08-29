// authStore.ts
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
const useAuthStore = create()(immer((set) => ({
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    setToken: (newToken) => {
        set((state) => {
            state.token = newToken;
            state.isAuthenticated = !!newToken;
            state.loading = false,
                state.error = null;
        });
    },
    setLoading: (isLoading) => {
        set((state) => {
            state.loading = isLoading;
            state.error = null;
        });
    },
    setError: (newError) => {
        set((state) => {
            state.error = newError;
            state.loading = false;
        });
    },
    logout: () => {
        set((state) => {
            state.token = null;
            state.isAuthenticated = false;
        });
    },
})));
export default useAuthStore;
