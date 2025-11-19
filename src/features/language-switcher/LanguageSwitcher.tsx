"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Button } from "@/shared/ui";
import { useTransition } from "react";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const changeLanguage = (newLocale: string) => {
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
      router.refresh();
    });
  };

  return locale === "ru" ? (
    <Button
      size="sm"
      icon={<Globe className="w-4 h-4" />}
      onClick={() => changeLanguage("en")}
      disabled={isPending}
    >
      EN
    </Button>
  ) : (
    <Button
      size="sm"
      icon={<Globe className="w-4 h-4" />}
      onClick={() => changeLanguage("ru")}
      disabled={isPending}
    >
      RU
    </Button>
  );
};
