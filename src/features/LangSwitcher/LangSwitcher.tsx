"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Button } from "@/shared/ui";
import { useTransition } from "react";
import { Globe } from "lucide-react";
import Cookies from "js-cookie";
import {
  COOKIE_NAMES,
  COOKIE_OPTIONS,
  LOCALES,
} from "@/shared/config/constants";

export const LangSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const changeLanguage = (newLocale: string) => {
    startTransition(() => {
      Cookies.set(COOKIE_NAMES.NEXT_LOCALE, newLocale, COOKIE_OPTIONS);
      router.refresh();
    });
  };

  return locale === LOCALES.RU ? (
    <Button
      icon={<Globe className="w-4 h-4" />}
      onClick={() => changeLanguage(LOCALES.EN)}
      className="md:w-auto w-full"
      disabled={isPending}
    >
      EN
    </Button>
  ) : (
    <Button
      icon={<Globe className="w-4 h-4" />}
      onClick={() => changeLanguage(LOCALES.RU)}
      className="md:w-auto w-full"
      disabled={isPending}
    >
      RU
    </Button>
  );
};
