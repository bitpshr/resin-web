import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "./index";

describe("Logo Component", () => {
  it("renders full variant by default", () => {
    render(<Logo />);
    const svg = screen.getByTestId("logo-svg");
    expect(svg).toHaveAttribute("width", "239");
    expect(svg).toHaveAttribute("height", "76");
  });

  it("renders watermark variant", () => {
    render(<Logo variant="watermark" />);
    const svg = screen.getByTestId("logo-svg");
    expect(svg).toHaveAttribute("width", "76");
    expect(svg).toHaveAttribute("height", "76");
  });

  it("applies custom className", () => {
    render(<Logo className="custom-class" />);
    const svg = screen.getByTestId("logo-svg");
    expect(svg).toHaveClass("custom-class");
  });

  it("renders with correct fill colors when not inverted", () => {
    render(<Logo />);
    const svg = screen.getByTestId("logo-svg");
    const paths = svg.querySelectorAll("path");
    expect(paths[0]).toHaveClass("fill-primary");
    expect(paths[1]).toHaveClass("fill-copy-on-primary");
  });

  it("renders with correct fill colors when inverted", () => {
    render(<Logo invert />);
    const svg = screen.getByTestId("logo-svg");
    const paths = svg.querySelectorAll("path");
    expect(paths[0]).toHaveClass("fill-copy-on-primary");
    expect(paths[1]).toHaveClass("fill-primary");
  });
});
