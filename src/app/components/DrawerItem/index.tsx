import classNames from "classnames";
import Link from "next/link";

export interface DrawerItemProps {
  children: React.ReactNode;
  href: string;
  onClick: () => void;
  size?: "large" | "small";
}

const DrawerItem: React.FC<DrawerItemProps> = ({
  href,
  children,
  onClick,
  size = "large",
}) => {
  const linkClasses = classNames(
    "block text-copy-on-primary hover:text-copy-on-primary/80 transition-colors pr-8 whitespace-nowrap",
    {
      "text-5xl": size === "large",
      "text-3xl": size === "small",
    }
  );

  return (
    <li>
      <Link
        href={href}
        className={linkClasses}
        onClick={onClick}
        data-testid="drawer-item"
      >
        {children}
      </Link>
    </li>
  );
};

export default DrawerItem;
