"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-foreground hover:text-primary transition-all duration-200 hover:scale-110 active:scale-95 font-medium",
        isActive && "font-bold text-primary"
      )}
    >
      {children}
    </Link>
  );
};
