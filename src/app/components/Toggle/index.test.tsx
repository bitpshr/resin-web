import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Toggle from "./index";

describe("Toggle Component", () => {
  const mockLeftIcon = <div data-testid="left-icon">Left</div>;
  const mockRightIcon = <div data-testid="right-icon">Right</div>;

  it("renders both icons", () => {
    render(<Toggle leftIcon={mockLeftIcon} rightIcon={mockRightIcon} />);
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  it("calls onToggle when clicked", () => {
    const onToggle = jest.fn();
    render(
      <Toggle
        leftIcon={mockLeftIcon}
        rightIcon={mockRightIcon}
        onToggle={onToggle}
      />
    );
    const toggle = screen.getByTestId("feed-toggle");
    fireEvent.click(toggle);
    expect(onToggle).toHaveBeenCalledWith(false);
  });
});
