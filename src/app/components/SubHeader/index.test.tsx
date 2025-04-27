import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SubHeader from "./index";
import { UIPreferencesProvider } from "@/app/context/UIPreferencesContext";

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

describe("SubHeader Component", () => {
  const renderSubHeader = () => {
    return render(
      <UIPreferencesProvider>
        <SubHeader />
      </UIPreferencesProvider>
    );
  };

  it("renders main subheader", () => {
    renderSubHeader();
    const subheader = screen.getByTestId("subheader");
    expect(subheader).toBeInTheDocument();
  });

  it("renders scroll subheader", () => {
    renderSubHeader();
    const scrollSubheader = screen.getByTestId("subheader-scroll");
    expect(scrollSubheader).toBeInTheDocument();
  });

  it("renders toggle in main subheader", () => {
    renderSubHeader();
    const toggle = screen.getByTestId("subheader-toggle");
    expect(toggle).toBeInTheDocument();
  });

  it("renders toggle in scroll subheader", () => {
    renderSubHeader();
    const scrollToggle = screen.getByTestId("subheader-scroll-toggle");
    expect(scrollToggle).toBeInTheDocument();
  });
});
