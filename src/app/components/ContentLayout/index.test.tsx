import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContentLayout from "./index";

describe("ContentLayout Component", () => {
  it("renders title correctly", () => {
    render(<ContentLayout title="Test Title">Content</ContentLayout>);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(
      <ContentLayout title="Test Title" subtitle="Test Subtitle">
        Content
      </ContentLayout>
    );
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("does not render subtitle when not provided", () => {
    render(<ContentLayout title="Test Title">Content</ContentLayout>);
    expect(screen.queryByTestId("subtitle")).not.toBeInTheDocument();
  });

  it("renders children correctly", () => {
    render(
      <ContentLayout title="Test Title">
        <div data-testid="test-content">Test Content</div>
      </ContentLayout>
    );
    expect(screen.getByTestId("test-content")).toBeInTheDocument();
  });
});
