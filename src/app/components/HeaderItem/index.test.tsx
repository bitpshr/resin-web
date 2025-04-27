import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderItem from "./index";

describe("HeaderItem Component", () => {
  it("renders children correctly", () => {
    render(<HeaderItem href="/test">Test Link</HeaderItem>);
    expect(screen.getByText("Test Link")).toBeInTheDocument();
  });

  it("has correct href attribute", () => {
    render(<HeaderItem href="/test">Test Link</HeaderItem>);
    expect(screen.getByTestId("header-item")).toHaveAttribute("href", "/test");
  });

  it("renders with correct classes", () => {
    render(<HeaderItem href="/test">Test Link</HeaderItem>);
    const link = screen.getByTestId("header-item");
    expect(link).toHaveClass("cursor-pointer");
    expect(link).toHaveClass("uppercase");
    expect(link).toHaveClass("font-sans");
    expect(link).toHaveClass("font-medium");
  });
});
