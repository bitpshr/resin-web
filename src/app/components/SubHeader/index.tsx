"use client";

import React, { useEffect, useRef, useState } from "react";
import { useUIPreferences } from "@/app/context/UIPreferencesContext";
import { ListBulletIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

import Toggle from "../Toggle";

const SubHeader: React.FC = () => {
  const [showAltHeader, setShowAltHeader] = useState(false);
  const { showFullArticles, setShowFullArticles } = useUIPreferences();
  const mainHeaderRef = useRef<HTMLDivElement>(null);

  // Show scroll sub-header when main sub-header is scrolled out of view
  useEffect(() => {
    const mainHeader = mainHeaderRef.current;
    if (!mainHeader) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowAltHeader(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-1px 0px 0px 0px",
      }
    );

    observer.observe(mainHeader);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleViewToggle = (isLeftSelected: boolean) => {
    setShowFullArticles(!isLeftSelected);
  };

  return (
    <>
      {/* Main sub-header */}
      <div
        ref={mainHeaderRef}
        className="relative z-30 hidden md:block"
        data-testid="subheader"
      >
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex justify-between items-center">
            <span className="text-6xl">Latest news</span>
            <div data-testid="subheader-toggle">
              <Toggle
                leftIcon={<ListBulletIcon className="w-5 h-5" />}
                rightIcon={<DocumentTextIcon className="w-5 h-5" />}
                onToggle={handleViewToggle}
                initialSelection={showFullArticles ? "right" : "left"}
              />
            </div>
          </div>
          <div className="border-b-1 md:my-5 my-2" />
        </div>
      </div>

      {/* Scroll sub-header */}
      <div
        className={`fixed top-[48px] md:top-[56px] left-0 right-0 z-40 transition-all duration-200 transform text-copy-on-primary ${
          showAltHeader
            ? "translate-y-0 opacity-100"
            : "translate-y-[-100%] opacity-0"
        }`}
        data-testid="subheader-scroll"
      >
        <div className="bg-surface-accent w-full border-b-1 border-copy-on-primary">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="flex justify-between items-center py-2">
              <span className="text-2xl md:text-4xl">Latest news</span>
              <div data-testid="subheader-scroll-toggle">
                <Toggle
                  leftIcon={<ListBulletIcon className="w-5 h-5" />}
                  rightIcon={<DocumentTextIcon className="w-5 h-5" />}
                  onToggle={handleViewToggle}
                  initialSelection={showFullArticles ? "right" : "left"}
                  isInverted
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
