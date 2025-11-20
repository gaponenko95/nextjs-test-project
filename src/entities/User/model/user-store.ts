import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { COOKIE_NAMES } from "@/shared/config/constants";
import { cookieStorage } from "@/shared/lib/storage/cookieStorage";

type User = {
  email: string;
};

type UserStore = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: (email: string, password: string) => {
        if (email && password) {
          set({ user: { email }, isAuthenticated: true });
          return true;
        }
        return false;
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: COOKIE_NAMES.AUTH_STORAGE,
      storage: createJSONStorage(() => cookieStorage),
    }
  )
);
