import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FeatureCard from "./index";

describe("FeatureCard Component", () => {
  const mockIcon = <div data-testid="mock-icon">Icon</div>;

  it("renders title correctly", () => {
    render(
      <FeatureCard
        title="Test Title"
        description="Test Description"
        icon={mockIcon}
      />
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders description correctly", () => {
    render(
      <FeatureCard
        title="Test Title"
        description="Test Description"
        icon={mockIcon}
      />
    );
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("renders icon correctly", () => {
    render(
      <FeatureCard
        title="Test Title"
        description="Test Description"
        icon={mockIcon}
      />
    );
    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
  });
});
