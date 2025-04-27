import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Feed from "./index";
import { UIPreferencesProvider } from "@/app/context/UIPreferencesContext";
import useSWRInfinite from "swr/infinite";

// Mock SWR
jest.mock("swr/infinite", () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

const mockArticles = Array.from({ length: 25 }, (_, i) => ({
  id: `article-${i + 1}`,
  headline: `Test Article ${i + 1}`,
  source: `Test Source ${i + 1}`,
  summary: `Test Summary ${i + 1}`,
  date_published: "2024-01-01T12:00:00Z",
}));

const renderWithProvider = () => {
  return render(
    <UIPreferencesProvider>
      <Feed />
    </UIPreferencesProvider>
  );
};

describe("Feed Component", () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it("shows loading state initially", () => {
    // Mock SWR to return loading state
    (useSWRInfinite as jest.Mock).mockReturnValue({
      data: undefined,
      size: 1,
      setSize: jest.fn(),
      isLoading: true,
    });

    renderWithProvider();
    expect(screen.getByTestId("feed-loader")).toBeInTheDocument();
  });

  it("renders articles when data is loaded", () => {
    // Mock SWR to return data
    (useSWRInfinite as jest.Mock).mockReturnValue({
      data: [mockArticles],
      size: 1,
      setSize: jest.fn(),
      isLoading: false,
    });

    renderWithProvider();
    expect(screen.getByText("Test Article 1")).toBeInTheDocument();
    expect(screen.getByText("Test Article 2")).toBeInTheDocument();
  });

  it("shows load more button when there are more articles to load", () => {
    // Mock SWR to return data with a full page and more available
    (useSWRInfinite as jest.Mock).mockReturnValue({
      data: [mockArticles],
      size: 1, // First page
      setSize: jest.fn(),
      isLoading: false,
      isValidating: false,
    });

    renderWithProvider();
    expect(screen.getByTestId("load-more-button")).toBeInTheDocument();
  });

  it("calls setSize when load more button is clicked", () => {
    const mockSetSize = jest.fn();
    // Mock SWR to return data with a full page and more available
    (useSWRInfinite as jest.Mock).mockReturnValue({
      data: [mockArticles],
      size: 1, // First page
      setSize: mockSetSize,
      isLoading: false,
      isValidating: false,
    });

    renderWithProvider();
    const loadMoreButton = screen.getByTestId("load-more-button");
    fireEvent.click(within(loadMoreButton).getByText("More"));
    expect(mockSetSize).toHaveBeenCalledWith(2);
  });

  it("shows 'No more results' message when max items is reached", () => {
    // Create unique articles for max items test
    const maxArticles = Array.from({ length: 1000 }, (_, i) => ({
      id: `article-${i}`,
      headline: `Test Article ${i}`,
      source: `Test Source ${i}`,
      summary: `Test Summary ${i}`,
      date_published: "2024-01-01T12:00:00Z",
    }));

    // Mock SWR to return data with max items reached
    (useSWRInfinite as jest.Mock).mockReturnValue({
      data: [maxArticles],
      size: 1,
      setSize: jest.fn(),
      isLoading: false,
    });

    renderWithProvider();
    expect(screen.getByTestId("no-more-results")).toBeInTheDocument();
  });
});
