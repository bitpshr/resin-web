import { Lora, Roboto } from "next/font/google";

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

export const fontSerif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

// App configuration
export const APP_CONFIG = {
  appName: "Resin",
  appDescription:
    "Ghost is an automated system that removes journalists and opinion and surfaces raw news data directly to readers.",
  email: {
    hello: "hello@resin.news",
    contribute: "contribute@resin.news",
  },
  keywords: [
    "democrat",
    "journalism",
    "news feed",
    "news reader",
    "news updates",
    "news",
    "opinion",
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

/**
 * JSON fetcher for SWR
 *
 * @param url
 * @returns Promise resolved with JSON data
 */
export function swrFetcher(url: string) {
  return fetch(url).then((res) => res.json());
}
