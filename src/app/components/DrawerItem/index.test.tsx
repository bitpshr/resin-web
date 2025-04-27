import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DrawerItem from "./index";

describe("DrawerItem Component", () => {
  it("renders children correctly", () => {
    const onClick = jest.fn();
    render(
      <DrawerItem href="/test" onClick={onClick}>
        Test Link
      </DrawerItem>
    );
    expect(screen.getByText("Test Link")).toBeInTheDocument();
  });

  it("has correct href attribute", () => {
    const onClick = jest.fn();
    render(
      <DrawerItem href="/test" onClick={onClick}>
        Test Link
      </DrawerItem>
    );
    expect(screen.getByTestId("drawer-item")).toHaveAttribute("href", "/test");
  });

  it("calls onClick when clicked", () => {
    const onClick = jest.fn();
    render(
      <DrawerItem href="/test" onClick={onClick}>
        Test Link
      </DrawerItem>
    );
    fireEvent.click(screen.getByTestId("drawer-item"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders with large size by default", () => {
    const onClick = jest.fn();
    render(
      <DrawerItem href="/test" onClick={onClick}>
        Test Link
      </DrawerItem>
    );
    const link = screen.getByTestId("drawer-item");
    expect(link).toHaveClass("text-5xl");
  });

  it("renders with small size when specified", () => {
    const onClick = jest.fn();
    render(
      <DrawerItem href="/test" onClick={onClick} size="small">
        Test Link
      </DrawerItem>
    );
    const link = screen.getByTestId("drawer-item");
    expect(link).toHaveClass("text-3xl");
  });
});
