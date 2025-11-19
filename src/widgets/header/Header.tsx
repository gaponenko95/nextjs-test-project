import { Navigation } from "./ui/Navigation";
import { LanguageSwitcher } from "@/features/language-switcher";
import { AuthSection } from "./ui/AuthSection";

export const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Navigation />
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <AuthSection />
        </div>
      </div>
    </header>
  );
};
