import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { produce } from 'immer';
export const useAuthenticateStore = create()(persist((set) => ({
    token: null,
    refreshToken: null,
    roleToken: null,
    isAuthenticated: false,
    setToken: (newToken, newRefreshToken, newRoleToken) => {
        set(produce((state) => {
            state.token = newToken;
            state.refreshToken = newRefreshToken;
            state.roleToken = newRoleToken;
            state.isAuthenticated = !!newToken;
        }));
    },
}), {
    name: 'auth-storage',
    storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
}));
