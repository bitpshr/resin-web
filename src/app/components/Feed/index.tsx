"use client";

import React from "react";
import useSWRInfinite from "swr/infinite";
import FeedItem from "@/app/components/FeedItem";
import { Article, API_BASE, swrFetcher } from "@/app/common";
import Button from "@/app/components/Button";
import LoadingIndicator from "@/app/components/Loading";
import SubHeader from "@/app/components/SubHeader";
import Link from "next/link";

// Maximum number of articles to display
const MAX_ITEMS = 1000;

// Number of articles to load per page
const PAGE_SIZE = 20;

const Feed: React.FC = () => {
  const { data, size, setSize, isLoading } = useSWRInfinite<Article[]>(
    (index) =>
      `${API_BASE}/articles?limit=${PAGE_SIZE}&offset=${index * PAGE_SIZE}`,
    swrFetcher
  );

  const articles = data ? data.flat() : [];
  const isEmpty = data?.[0]?.length === 0;
  const isLoadingInitialData = !data && isLoading;
  const isLoadingMore = isLoading || (size > 0 && !data?.[size - 1]);
  const hasReachedEnd = isEmpty || (data?.at(-1)?.length ?? 0) < PAGE_SIZE;
  const hasReachedMax = articles.length >= MAX_ITEMS;

  return (
    <div className="md:mt-24 mt-20 min-h-full" data-testid="feed-container">
      <SubHeader />

      {/* Loading state */}
      {isLoadingInitialData ? (
        <div className="py-24 h-full" data-testid="feed-loader">
          <LoadingIndicator size="large" />
        </div>
      ) : (
        <div className="max-w-[1000px] mx-auto md:px-8 px-3">
          <div className="relative pt-3">
            {/* Article list */}
            {articles.map((article, index) => (
              <FeedItem
                key={article.headline}
                date={article.date_published ?? article.created_at}
                headline={article.headline}
                source={article.source}
                summary={article.summary}
                isLatest={index === 0}
              />
            ))}

            {/* Max items reached state */}
            {hasReachedMax && (
              <div className="md:pl-12 pl-8 text-center pt-16 pb-24">
                <p className="text-primary text-2xl italic font-serif">
                  No more results.
                  <br />
                  Try searching to find older headlines.
                  <br />
                  <Link href="/search" className="inline-block mt-8">
                    <Button variant="secondary">Search</Button>
                  </Link>
                </p>
              </div>
            )}

            {/* Load more button */}
            {!hasReachedEnd && !hasReachedMax && (
              <div className="flex justify-center pt-16 pb-24 relative">
                <Button
                  isLoading={isLoadingMore}
                  onClick={() => setSize(size + 1)}
                  size="large"
                  variant="secondary"
                >
                  More
                </Button>
              </div>
            )}

            {/* Vertical timeline line */}
            <div className="border-r border-gray-400 border-dashed h-full absolute left-[7.5px] z-0 top-7" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;
