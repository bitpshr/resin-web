import type { Metadata } from "next";
import "@/app/globals.css";
import { APP_CONFIG, fontSans, fontSerif } from "@/app/common";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { UIPreferencesProvider } from "@/app/context/UIPreferencesContext";

export const metadata: Metadata = {
  title: APP_CONFIG.appName,
  applicationName: APP_CONFIG.appName,
  description: APP_CONFIG.appDescription,
  keywords: APP_CONFIG.keywords,
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className="overflow-hidden h-full">
      <body
        className={`
          ${fontSerif.variable}
          ${fontSans.variable}
          antialiased flex flex-col h-full bg-surface text-copy font-serif
          md:text-xl leading-relaxed text-lg
          overflow-hidden
        `}
      >
        <UIPreferencesProvider>
          <Header />
          <div className="overflow-auto flex-auto">
            {children}
            <Footer />
          </div>
        </UIPreferencesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
