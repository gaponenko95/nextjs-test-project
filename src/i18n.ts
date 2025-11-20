import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { COOKIE_NAMES, LOCALES } from "./shared/config/constants";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get(COOKIE_NAMES.NEXT_LOCALE)?.value || LOCALES.EN;

  return {
    locale,
    messages: (await import(`@/../public/locales/${locale}.json`)).default,
  };
});
