import React from "react";
import FooterItem from "@/app/components/FooterItem";
import { APP_CONFIG, ROUTES } from "@/app/common";
import Logo from "@/app/components/Logo";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-primary text-copy-on-primary md:px-12 px-6 py-6 z-1 relative flex items-start md:items-center justify-between border-t"
      data-testid="footer"
    >
      <div className="md:block grid grid-cols-1 md:grid-cols-5 space-x-8 space-y-4 md:space-y-0">
        <FooterItem href={ROUTES.about}>About</FooterItem>
        <FooterItem href={`mailto:${APP_CONFIG.email.hello}`}>
          Contact
        </FooterItem>
        <FooterItem href={ROUTES.privacy}>Privacy policy</FooterItem>
        <FooterItem href={ROUTES.terms}>Terms of use</FooterItem>
        <FooterItem href={ROUTES.accessibility}>Accessibility</FooterItem>
      </div>

      <Logo className="w-12 h-12" invert variant="watermark" />
    </footer>
  );
};

export default Footer;
