import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Drawer from "./index";
import { ROUTES } from "@/app/common";

const EXPECTED_LINKS = [
  { text: "Latest", href: "/" },
  { text: "Contribute", href: ROUTES.contribute },
  { text: "About", href: ROUTES.about },
  { text: "Contact", href: ROUTES.contact },
];

describe("Drawer Component", () => {
  it("renders all expected links when open", () => {
    const onClose = jest.fn();
    render(<Drawer isOpen={true} onClose={onClose} />);

    EXPECTED_LINKS.forEach(({ text, href }) => {
      const link = screen.getByText(text);
      expect(link).toBeInTheDocument();
      expect(link.closest("a")).toHaveAttribute("href", href);
    });
  });

  it("calls onClose when backdrop is clicked", () => {
    const onClose = jest.fn();
    render(<Drawer isOpen={true} onClose={onClose} />);

    const backdrop = screen.getByTestId("drawer").previousElementSibling;
    fireEvent.click(backdrop!);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(<Drawer isOpen={true} onClose={onClose} />);

    const closeButton = screen.getByLabelText("Close menu");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when a link is clicked", () => {
    const onClose = jest.fn();
    render(<Drawer isOpen={true} onClose={onClose} />);

    const firstLink = screen.getByText(EXPECTED_LINKS[0].text);
    fireEvent.click(firstLink);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
