import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContentSection from "./index";

describe("ContentSection Component", () => {
  it("renders title correctly", () => {
    render(<ContentSection title="Test Section">Content</ContentSection>);
    expect(screen.getByText("Test Section")).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    render(
      <ContentSection title="Test Section">
        <div data-testid="test-content">Test Content</div>
      </ContentSection>
    );
    expect(screen.getByTestId("test-content")).toBeInTheDocument();
  });

  it("creates correct anchor link", () => {
    render(<ContentSection title="Test Section">Content</ContentSection>);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "#Test Section");
  });

  it("has correct anchor ID", () => {
    render(<ContentSection title="Test Section">Content</ContentSection>);
    const anchor = screen
      .getByText("Test Section")
      .closest("section")
      ?.querySelector("span");
    expect(anchor).toHaveAttribute("id", "Test Section");
  });
});
