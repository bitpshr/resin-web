import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FeedItem from "./index";
import { UIPreferencesProvider } from "@/app/context/UIPreferencesContext";

const mockProps = {
  date: "2024-01-01T12:00:00Z",
  headline: "Test Headline",
  source: "Test Source",
  summary: "Test Summary",
};

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<UIPreferencesProvider>{ui}</UIPreferencesProvider>);
};

describe("FeedItem Component", () => {
  it("renders headline correctly", () => {
    renderWithProvider(<FeedItem {...mockProps} />);
    expect(screen.getByText("Test Headline")).toBeInTheDocument();
  });

  it("renders source correctly", () => {
    renderWithProvider(<FeedItem {...mockProps} />);
    expect(screen.getByText("Test Source")).toBeInTheDocument();
  });

  it("renders formatted date correctly", () => {
    renderWithProvider(<FeedItem {...mockProps} />);
    expect(screen.getByText(/Jan 1, 2024 at/)).toBeInTheDocument();
  });

  it("shows visual indicator when isLatest is true", () => {
    renderWithProvider(<FeedItem {...mockProps} isLatest={true} />);
    expect(screen.getByTestId("visual-indicator-latest")).toBeInTheDocument();
  });

  it("does not show visual indicator when isLatest is false", () => {
    renderWithProvider(<FeedItem {...mockProps} isLatest={false} />);
    expect(
      screen.queryByTestId("visual-indicator-not-latest")
    ).toBeInTheDocument();
  });
});
