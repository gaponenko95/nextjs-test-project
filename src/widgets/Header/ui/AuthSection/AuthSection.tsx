"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useUserStore } from "@/entities/User";
import { Button, NavLink } from "@/shared/ui";

interface AuthSectionProps {
  onClick?: () => void;
}

export const AuthSection = ({ onClick }: AuthSectionProps) => {
  const t = useTranslations();
  const router = useRouter();
  const { isAuthenticated, user, logout } = useUserStore();

  const handleLogout = () => {
    logout();
    router.push("/");
    onClick?.();
  };

  if (isAuthenticated && user) {
    return (
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full md:w-auto">
        <span className="text-sm text-muted-foreground text-center md:text-left">
          <span className="font-medium text-foreground">{user.email}</span>
        </span>
        <Button onClick={handleLogout} className="w-full md:w-auto">
          {t("nav.logout")}
        </Button>
      </div>
    );
  }

  return (
    <NavLink className="md:w-auto w-full" href="/login">
      <Button onClick={onClick} className="w-full">
        {t("nav.login")}
      </Button>
    </NavLink>
  );
};
