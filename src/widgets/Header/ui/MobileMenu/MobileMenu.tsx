"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Button,
  NavLink,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui";
import { LangSwitcher } from "@/features/LangSwitcher";
import { AuthSection } from "../AuthSection/AuthSection";

type MobileMenuProps = {
  navHome: string;
  navAbout: string;
  menuTitle: string;
};

export const MobileMenu = ({
  navHome,
  navAbout,
  menuTitle,
}: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className="md:hidden" size="sm">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>{menuTitle}</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 mt-6">
          <nav className="flex flex-col gap-4">
            <NavLink href="/" onClick={() => setIsOpen(false)}>
              {navHome}
            </NavLink>
            <NavLink href="/about" onClick={() => setIsOpen(false)}>
              {navAbout}
            </NavLink>
          </nav>
          <div className="flex flex-col gap-4 pt-4 border-t">
            <LangSwitcher />
            <AuthSection onClick={() => setIsOpen(false)} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
