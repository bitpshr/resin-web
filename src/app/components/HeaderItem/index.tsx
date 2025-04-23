import Link from "next/link";
import React from "react";

export interface HeaderLinkProps extends React.PropsWithChildren {
  href: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="cursor-pointer uppercase font-sans font-medium text-xl border-b-2 border-transparent hover:border-copy-on-primary transition-colors"
      data-testid="header-item"
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
