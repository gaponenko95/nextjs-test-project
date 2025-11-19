import { NavLink } from "@/shared/ui";
import { getTranslations } from "next-intl/server";

export const Navigation = async () => {
  const t = await getTranslations();

  return (
    <nav className="flex gap-6">
      <NavLink href="/">{t("nav.home")}</NavLink>
      <NavLink href="/about">{t("nav.about")}</NavLink>
    </nav>
  );
};
