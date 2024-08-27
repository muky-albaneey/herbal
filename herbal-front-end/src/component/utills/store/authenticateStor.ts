import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { produce } from 'immer';

type State = {
  token: string | null;
  refreshToken: string | null;
  roleToken: string | null;
  isAuthenticated: boolean;  
  setToken: (newToken: string | null, newRefreshToken?: string | null, newRoleToken?: string | null) => void;
};

export const useAuthenticateStore = create<State>()(
  persist(
    (set) => ({      
      token: null,
      refreshToken: null,
      roleToken: null,
      isAuthenticated: false,            
      setToken: (newToken, newRefreshToken, newRoleToken) => {
        set(
          produce((state) => {
            state.token = newToken;
            state.refreshToken = newRefreshToken;
            state.roleToken = newRoleToken;
            state.isAuthenticated = !!newToken;            
          })
        );
      },
    }),
    
    {
      name: 'auth-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
