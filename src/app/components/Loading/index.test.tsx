import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingIndicator from "./index";

describe("LoadingIndicator Component", () => {
  it("renders with default size (medium)", () => {
    render(<LoadingIndicator />);
    const indicator = screen.getByTestId("loading-indicator");
    expect(indicator).toHaveClass("w-8 h-8 border-3");
  });

  it("renders with small size", () => {
    render(<LoadingIndicator size="small" />);
    const indicator = screen.getByTestId("loading-indicator");
    expect(indicator).toHaveClass("w-6 h-6 border-3");
  });

  it("renders with large size", () => {
    render(<LoadingIndicator size="large" />);
    const indicator = screen.getByTestId("loading-indicator");
    expect(indicator).toHaveClass("w-12 h-12 border-4");
  });

  it("has correct accessibility attributes", () => {
    render(<LoadingIndicator />);
    const indicator = screen.getByTestId("loading-indicator");
    expect(indicator).toHaveAttribute("role", "status");
    expect(indicator).toHaveAttribute("aria-label", "Loading");
  });

  it("applies custom className", () => {
    render(<LoadingIndicator className="custom-class" />);
    const indicator = screen.getByTestId("loading-indicator");
    expect(indicator).toHaveClass("custom-class");
  });
});
