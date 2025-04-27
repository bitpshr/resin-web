import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FooterItem from "./index";

describe("FooterItem Component", () => {
  it("renders children correctly", () => {
    render(<FooterItem href="/test">Test Link</FooterItem>);
    expect(screen.getByText("Test Link")).toBeInTheDocument();
  });

  it("has correct href attribute", () => {
    render(<FooterItem href="/test">Test Link</FooterItem>);
    expect(screen.getByTestId("footer-item")).toHaveAttribute("href", "/test");
  });

  it("renders with correct classes", () => {
    render(<FooterItem href="/test">Test Link</FooterItem>);
    const link = screen.getByTestId("footer-item");
    expect(link).toHaveClass("cursor-pointer");
    expect(link).toHaveClass("uppercase");
    expect(link).toHaveClass("font-sans");
    expect(link).toHaveClass("font-medium");
  });
});
