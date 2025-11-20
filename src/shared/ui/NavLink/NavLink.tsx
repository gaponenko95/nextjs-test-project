"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const NavLink = ({
  href,
  children,
  onClick,
  className,
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-foreground hover:text-primary transition-all duration-200 hover:scale-110 active:scale-95 font-medium",
        isActive && "font-bold text-primary",
        className
      )}
    >
      {children}
    </Link>
  );
};
