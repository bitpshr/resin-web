import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./index";

describe("Button Component", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("handles onClick event", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("passes HTML button attributes correctly", () => {
    render(
      <Button type="submit" disabled>
        Click me
      </Button>
    );
    const button = screen.getByText("Click me");
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toBeDisabled();
  });

  it("shows loading state correctly", () => {
    render(<Button isLoading>Click me</Button>);
    const button = screen.getByTestId("button");
    expect(button).toBeDisabled();
    expect(screen.getByTestId("loading-indicator")).toBeInTheDocument();
  });

  it("applies size and variant props", () => {
    render(
      <Button size="small" variant="secondary">
        Click me
      </Button>
    );
    const button = screen.getByText("Click me");
    expect(button).toHaveClass("btn-size-small");
    expect(button).toHaveClass("btn-variant-secondary");
  });

  it("merges className prop with default classes", () => {
    render(<Button className="custom-class">Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button).toHaveClass("custom-class");
  });
});
