"use client";

import React, { useState } from "react";
import { ROUTES } from "@/app/common";
import Link from "next/link";
import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";
import Drawer from "@/app/components/Drawer";
import Logo from "@/app/components/Logo";

export interface HeaderLinkProps extends React.PropsWithChildren {
  href: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="cursor-pointer uppercase font-sans font-medium text-xl border-b-2 border-transparent hover:border-copy-on-primary transition-colors"
      data-testid="header-item"
    >
      {children}
    </Link>
  );
};

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="bg-primary text-copy-on-primary py-2 flex-none relative z-50 h-12 md:h-14 items-center flex border-b border-t border-copy-on-primary">
        <div className="w-full px-4 md:px-6 grid grid-cols-3 items-center">
          {/* Left menu */}
          <nav className="flex gap-8 justify-start items-center">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="cursor-pointer"
              data-testid="drawer-toggle"
            >
              <Bars3BottomLeftIcon className="size-7 md:size-8" />
            </button>
            <div className="hidden md:flex gap-8">
              <HeaderLink href={ROUTES.about}>About</HeaderLink>
            </div>
          </nav>

          {/* App name */}
          <div className="flex justify-center">
            <Link href="/">
              <Logo className="md:h-10 h-8 w-auto" />
            </Link>
          </div>

          {/* Right menu */}
          {/* <nav className="flex justify-end">
            <Link href={ROUTES.search}>
              <MagnifyingGlassIcon className="size-7 md:size-8" />
            </Link>
          </nav> */}
        </div>
      </header>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};

export default Header;
