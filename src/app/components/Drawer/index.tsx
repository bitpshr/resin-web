"use client";

import React, { useEffect } from "react";
import { ROUTES } from "@/app/common";
import { XMarkIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import DrawerItem from "@/app/components/DrawerItem";
import Logo from "@/app/components/Logo";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const backdropClasses = classNames(
    "fixed inset-0 bg-black/50 z-50 transition-opacity duration-300",
    {
      "opacity-100": isOpen,
      "opacity-0 pointer-events-none": !isOpen,
    }
  );

  const drawerClasses = classNames(
    "fixed top-0 left-0 h-full bg-primary text-white z-50 transform transition-transform duration-300 ease-in-out border-r border-copy-on-primary",
    {
      "translate-x-0": isOpen,
      "-translate-x-full": !isOpen,
    }
  );

  return (
    <>
      {/* Backdrop */}
      <div className={backdropClasses} onClick={onClose} />

      {/* Drawer */}
      <div className={drawerClasses} data-testid="drawer">
        <div className="h-full flex flex-col">
          <nav className="flex-1 md:px-6 px-4 overflow-y-auto">
            {/* Close button */}
            <button
              onClick={onClose}
              className="text-copy-on-primary py-3 cursor-pointer -left-[2px] relative"
              aria-label="Close menu"
            >
              <XMarkIcon className="size-9" />
            </button>

            <div className="my-12">
              <Logo className="w-12 h-12" invert variant="watermark" />
            </div>

            <ul className="space-y-4">
              <DrawerItem href="/" onClick={onClose}>
                Latest
              </DrawerItem>
              {/* <DrawerItem href={ROUTES.search} onClick={onClose}>
                Search
              </DrawerItem> */}
              <DrawerItem href={ROUTES.contribute} onClick={onClose}>
                Contribute
              </DrawerItem>
            </ul>

            <div className="border-copy-on-primary border-b-2 my-12" />

            <ul className="space-y-2">
              <DrawerItem href={ROUTES.about} onClick={onClose} size="small">
                About
              </DrawerItem>
              <DrawerItem href={ROUTES.contact} onClick={onClose} size="small">
                Contact
              </DrawerItem>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Drawer;
