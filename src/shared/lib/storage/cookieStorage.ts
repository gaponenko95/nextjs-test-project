import { StateStorage } from "zustand/middleware";
import Cookies from "js-cookie";
import { COOKIE_OPTIONS } from "@/shared/config/constants";

export const cookieStorage: StateStorage = {
  getItem: (name: string): string | null => {
    return Cookies.get(name) ?? null;
  },
  setItem: (name: string, value: string): void => {
    Cookies.set(name, value, COOKIE_OPTIONS);
  },
  removeItem: (name: string): void => {
    Cookies.remove(name);
  },
};
