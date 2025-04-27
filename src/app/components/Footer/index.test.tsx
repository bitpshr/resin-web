import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./index";
import { APP_CONFIG, ROUTES } from "@/app/common";

const FOOTER_LINKS = [
  { text: "About", href: ROUTES.about },
  { text: "Contact", href: `mailto:${APP_CONFIG.email.hello}` },
  { text: "Privacy policy", href: ROUTES.privacy },
  { text: "Terms of use", href: ROUTES.terms },
  { text: "Accessibility", href: ROUTES.accessibility },
];

describe("Footer Component", () => {
  it("renders footer with all links", () => {
    render(<Footer />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();

    FOOTER_LINKS.forEach(({ text, href }) => {
      expect(screen.getByText(text)).toHaveAttribute("href", href);
    });
  });

  it("renders logo", () => {
    render(<Footer />);
    const logo = screen.getByTestId("logo-svg");
    expect(logo).toBeInTheDocument();
  });
});
