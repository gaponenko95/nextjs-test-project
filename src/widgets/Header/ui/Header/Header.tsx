import { LangSwitcher } from "@/features/LangSwitcher";
import { getTranslations } from "next-intl/server";
import { NavLink } from "@/shared/ui";
import { AuthSection } from "../AuthSection/AuthSection";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export const Header = async () => {
  const t = await getTranslations();

  return (
    <header className="border-b relative">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <nav className="hidden md:flex gap-6">
          <NavLink href="/">{t("nav.home")}</NavLink>
          <NavLink href="/about">{t("nav.about")}</NavLink>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <LangSwitcher />
          <AuthSection />
        </div>
        <MobileMenu
          navHome={t("nav.home")}
          navAbout={t("nav.about")}
          menuTitle={t("nav.menu")}
        />
      </div>
    </header>
  );
};
