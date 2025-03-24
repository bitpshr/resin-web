"use client";

import React, { useState } from "react";
import VisualIndicator from "@/app/components/VisualIndicator";
import {
  CalendarIcon,
  LockClosedIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/16/solid";
import { useUIPreferences } from "@/app/context/UIPreferencesContext";
import { motion, AnimatePresence } from "framer-motion";

export interface FeedItemProps {
  date: string;
  headline: string;
  summary: string;
  source: string;
  isLatest?: boolean;
}

const FeedItem: React.FC<FeedItemProps> = ({
  date,
  headline,
  summary,
  source,
  isLatest,
}) => {
  const { showFullArticles } = useUIPreferences();
  const [isExpanded, setIsExpanded] = useState(showFullArticles);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const datePart = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);

    const timePart = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);

    return `${datePart} at ${timePart}`;
  };

  // Update local state when context changes
  React.useEffect(() => {
    setIsExpanded(showFullArticles);
  }, [showFullArticles]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div
        className="relative z-1 flex items-start cursor-pointer"
        onClick={toggleExpand}
        data-testid="feed-item"
      >
        <VisualIndicator isLatest={isLatest} />
        <div className="w-full">
          <div className="md:text-4xl text-2xl text-[26px] mb-5 flex items-start">
            <div className="flex-grow pr-3">{headline}</div>
            <div className="flex-shrink-0 flex items-center pt-1 md:pt-2">
              {isExpanded ? (
                <ChevronUpIcon className="size-6" />
              ) : (
                <ChevronDownIcon className="size-6" />
              )}
            </div>
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <p
                  className="mb-5 md:mb-6 text-copy-subtle"
                  data-testid="feed-summary"
                >
                  {summary}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="text-base flex md:items-center space-x-4 uppercase font-sans flex-col md:flex-row">
            <div className="text-copy flex order-3 md:order-1">
              <LockClosedIcon className="size-4 mr-2 flex-none mt-[4px]" />
              {source}
            </div>
            <div className="text-copy/40 h-6 border-gray-300 border-r-1 hidden md:block order-2"></div>
            <div className="text-copy/80 flex order-1 md:order-3">
              <CalendarIcon className="size-4 mr-2 flex-none mt-[4px]" />
              {formatDate(date)}
            </div>
          </div>
        </div>
      </div>
      <div className="md:pl-12 pl-8">
        <div className="border-b border-gray-300 my-12" />
      </div>
    </>
  );
};

export default FeedItem;
