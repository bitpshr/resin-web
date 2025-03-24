"use client";

import React from "react";
import LoadingIndicator from "../Loading";

type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends React.PropsWithChildren<HTMLButtonProps> {
  isLoading?: boolean;
  onClick?: () => void;
  size?: "small" | "large";
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  size = "large",
  variant = "primary",
  ...htmlButtonProps
}) => {
  const content = isLoading ? (
    <>
      <div className="flex items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <LoadingIndicator size="small" />
      </div>
      <div className="opacity-0">{children}</div>
    </>
  ) : (
    children
  );

  return (
    <button
      {...htmlButtonProps}
      disabled={isLoading}
      className={`relative btn btn-size-${size} btn-variant-${variant} ${htmlButtonProps.className}`}
    >
      {content}
    </button>
  );
};

export default Button;
