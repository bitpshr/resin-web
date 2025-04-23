"use client";

import React from "react";

export interface ContentLayoutProps {
  children: React.ReactNode;
  subtitle?: string;
  title: React.ReactNode;
}
const ContentLayout: React.FC<ContentLayoutProps> = ({
  title,
  subtitle,
  children,
}: ContentLayoutProps) => {
  return (
    <div>
      <section className="text-center py-24 md:py-32 bg-primary text-copy-on-primary px-4 md:px-8 border-b">
        <h1 className="text-4xl md:text-7xl font-semibold mb-6 leading-10 md:leading-22">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-2xl font-sans leading-relaxed max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
      </section>

      {children}
    </div>
  );
};

export default ContentLayout;
