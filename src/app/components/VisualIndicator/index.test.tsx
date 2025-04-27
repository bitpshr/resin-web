import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import VisualIndicator from "./index";

describe("VisualIndicator Component", () => {
  it("renders latest indicator when isLatest is true", () => {
    render(<VisualIndicator isLatest />);
    const indicator = screen.getByTestId("visual-indicator-latest");
    expect(indicator).toBeInTheDocument();
  });

  it("renders not latest indicator when isLatest is false", () => {
    render(<VisualIndicator isLatest={false} />);
    const indicator = screen.getByTestId("visual-indicator-not-latest");
    expect(indicator).toBeInTheDocument();
  });

  it("renders not latest indicator by default", () => {
    render(<VisualIndicator />);
    const indicator = screen.getByTestId("visual-indicator-not-latest");
    expect(indicator).toBeInTheDocument();
  });
});
