import { Noto_Serif, Roboto } from "next/font/google";
import * as Sentry from "@sentry/nextjs";

// Article interface
export interface Article {
  id: string;
  url: string;
  title: string;
  publication: string;
  authors?: string[];
  date_published?: string;
  content: string;
  headline: string;
  source: string;
  created_at: string;
  updated_at: string;
  summary: string;
}

// API base URL
export const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

// Next font configuration
export const fontSans = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "400", "500", "600", "700"],
});

export const fontSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
});

// App configuration
export const APP_CONFIG = {
  appName: "Resin",
  appDescription:
    "Resin is an automated system that removes journalists and opinion and surfaces fact-only news data directly to readers.",
  email: {
    hello: "hello@resin.news",
    contribute: "contribute@resin.news",
  },
  keywords: [
    "democrat",
    "headlines",
    "journalism",
    "news feed",
    "news reader",
    "news updates",
    "news",
    "politics",
    "republican",
    "unbiased",
  ],
};

// Route configuration
export const ROUTES = {
  about: "/pages/about",
  accessibility: "/pages/accessibility",
  contact: `mailto:${APP_CONFIG.email.hello}`,
  contribute: `mailto:${APP_CONFIG.email.contribute}`,
  privacy: "/pages/privacy",
  search: "/pages/search",
  terms: "/pages/terms",
};

// Feed configuration
export const FEED_CONFIG = {
  maxItems: 1000,
  pageSize: 20,
};

// SWR configuration for feed
export const FEED_SWR_CONFIG = {
  onError: (error: { status?: number }) => {
    if (error.status !== 403 && error.status !== 404) {
      Sentry.captureException(error);
    }
  },
};

/**
 * Generates the API URL for fetching articles with pagination
 *
 * @param pageIndex The current page index
 * @returns The complete API URL with pagination parameters
 */
export function getArticlesUrl(pageIndex: number): string {
  return `${API_BASE}/articles?limit=${FEED_CONFIG.pageSize}&offset=${
    pageIndex * FEED_CONFIG.pageSize
  }`;
}

/**
 * JSON fetcher for SWR
 *
 * @param url
 * @returns Promise resolved with JSON data
 */
export function swrFetcher(url: string) {
  return fetch(url).then((res) => res.json());
}
