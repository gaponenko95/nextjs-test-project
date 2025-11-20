export const COOKIE_NAMES = {
  NEXT_LOCALE: "NEXT_LOCALE",
  AUTH_STORAGE: "auth-storage",
  USER_EMAIL: "user_email",
} as const;

export const LOCALES = {
  RU: "ru",
  EN: "en",
} as const;

export const COOKIE_OPTIONS = {
  expires: 365,
  path: "/",
  sameSite: "Lax" as const,
};
