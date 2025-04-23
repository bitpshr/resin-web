import Link from "next/link";

export interface FooterItemProps extends React.PropsWithChildren {
  href: string;
}

const FooterItem: React.FC<FooterItemProps> = ({ href, children }) => {
  return (
    <div className="inline-block text-base">
      <Link
        href={href}
        data-testid="footer-item"
        className="cursor-pointer uppercase font-sans font-medium border-b-2 border-transparent hover:border-copy-on-primary transition-colors"
      >
        {children}
      </Link>
    </div>
  );
};

export default FooterItem;
