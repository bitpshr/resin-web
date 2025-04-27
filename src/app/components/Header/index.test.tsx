import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./index";
import { ROUTES } from "@/app/common";

const HEADER_LINKS = [{ text: "About", href: ROUTES.about }];

describe("Header Component", () => {
  it("renders header with all elements", () => {
    render(<Header />);

    // Check drawer toggle button
    const drawerToggle = screen.getByTestId("drawer-toggle");
    expect(drawerToggle).toBeInTheDocument();

    // Check logo
    const header = screen.getByTestId("header");
    const logo = screen.getByTestId("logo-header");
    expect(logo).toBeInTheDocument();

    // Check header links
    HEADER_LINKS.forEach(({ text, href }) => {
      expect(within(header).getByText(text)).toHaveAttribute("href", href);
    });
  });

  it("renders drawer", () => {
    render(<Header />);
    const drawer = screen.getByTestId("drawer");
    expect(drawer).toBeInTheDocument();
  });
});
