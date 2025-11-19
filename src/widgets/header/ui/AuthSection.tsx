"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useAuthStore } from "@/entities/user/model/auth-store";
import { Button } from "@/shared/ui";

export const AuthSection = () => {
  const t = useTranslations();
  const router = useRouter();
  const { isAuthenticated, user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  if (isAuthenticated && user) {
    return (
      <>
        <span className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{user.email}</span>
        </span>
        <Button onClick={handleLogout}>{t("nav.logout")}</Button>
      </>
    );
  }

  return (
    <Link href="/login">
      <Button>{t("nav.login")}</Button>
    </Link>
  );
};
