/**
 * UIPreferencesContext provides a way to persist UI-related preferences.
 * Used for showing full articles vs. previews.
 */
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface UIPreferencesContextType {
  showFullArticles: boolean;
  setShowFullArticles: (value: boolean) => void;
}

const UIPreferencesContext = createContext<
  UIPreferencesContextType | undefined
>(undefined);

export const UIPreferencesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showFullArticles, setShowFullArticles] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem("showFullArticles");
      return saved ? JSON.parse(saved) : true;
    }
    return true;
  });

  useEffect(() => {
    sessionStorage.setItem(
      "showFullArticles",
      JSON.stringify(showFullArticles)
    );
  }, [showFullArticles]);

  return (
    <UIPreferencesContext.Provider
      value={{ showFullArticles, setShowFullArticles }}
    >
      {children}
    </UIPreferencesContext.Provider>
  );
};

export const useUIPreferences = () => {
  const context = useContext(UIPreferencesContext);
  if (context === undefined) {
    throw new Error(
      "useUIPreferences must be used within a UIPreferencesProvider"
    );
  }
  return context;
};
