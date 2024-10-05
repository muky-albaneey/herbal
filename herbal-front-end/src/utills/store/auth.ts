//   import { create } from 'zustand';
// import { persist, createJSONStorage } from 'zustand/middleware';
// import { produce } from 'immer';

// type AuthState = {
//   jwtToken: string | null;
//   roleToken: string | null;
//   refreshToken: string | null;
//   user: {
//     full_name?: string;
//     email: string;
//   } | null;
//   isAuthenticated: boolean;
//   setAuthData: (jwtToken: string, roleToken: string, refreshToken: string, user: { full_name?: string; email: string }) => void;
  
//   logout: () => void; // Added logout method to the type
// };

// export const useAuthStoreUser = create<AuthState>()(
//   persist(
//     (set) => ({
//       jwtToken: null,
//       roleToken: null,
//       refreshToken: null,
//       user: null,
//       isAuthenticated: false,
//       setAuthData: (jwtToken, roleToken, refreshToken, user) => {
//         set(
//           produce((state) => {
//             state.jwtToken = jwtToken;
//             state.roleToken = roleToken;
//             state.refreshToken = refreshToken;
//             state.user = user;
//             state.isAuthenticated = !!jwtToken;
//           })
//         );
//       },
//       logout: () => {
//         set(
//           produce((state) => {
//             state.jwtToken = null;
//             state.roleToken = null;
//             state.refreshToken = null;
//             state.user = null;
//             state.isAuthenticated = false;
//           })
//         );
//         localStorage.removeItem('auth-storage'); // Remove the stored data from localStorage
//       }
//     }),
//     {
//       name: 'auth-storage', // Storage key
//       storage: createJSONStorage(() => localStorage), // Persist in localStorage
//     }
//   )
// );
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { produce } from 'immer';

// Define the shape of UserData
type UserData = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  state: string;
  country: string;
  streetName: string;
  city: string;
  email: string;
  user: {
    id: string;
    full_name: string;
    email: string;
    role: string;
  };
};

type AuthState = {
  jwtToken: string | null;
  roleToken: string | null;
  refreshToken: string | null;
  addressInfo: UserData | null; // Use UserData for consistency
  isAuthenticated: boolean;
  userResponseData: UserData | null; // Properly define userResponseData type
  setAuthData: (jwtToken: string, roleToken: string, refreshToken: string, addressInfo: UserData) => void;
  setUserResponseData: (data: UserData) => void;
  logout: () => void;
};

export const useAuthStoreUser = create<AuthState>()(
  persist(
    (set) => ({
      jwtToken: null,
      roleToken: null,
      refreshToken: null,
      addressInfo: null,
      isAuthenticated: false,
      userResponseData: null,  // Initialize to null or an empty object

      // Manually setting auth data
      setAuthData: (jwtToken, roleToken, refreshToken, addressInfo) => {
        set(
          produce((state) => {
            state.jwtToken = jwtToken;
            state.roleToken = roleToken;
            state.refreshToken = refreshToken;
            state.addressInfo = addressInfo;
            state.isAuthenticated = !!jwtToken;
          })
        );
      },

      // Setting userResponseData
      setUserResponseData: (data: UserData) => {
        set(
          produce((state) => {
            state.userResponseData = data;
          })
        );
      },

      // Logging out and clearing storage
      logout: () => {
        set(
          produce((state) => {
            state.jwtToken = null;
            state.roleToken = null;
            state.refreshToken = null;
            state.addressInfo = null;
            state.userResponseData = null; // Clear user data on logout
            state.isAuthenticated = false;
          })
        );
        localStorage.removeItem('auth-storage'); // Clear persisted auth data
      },
    }),
    {
      name: 'auth-storage', // Key for localStorage
      storage: createJSONStorage(() => localStorage), // Persisting in localStorage
    }
  )
);
