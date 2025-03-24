import Link from "next/link";
import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  children: ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  children,
}: ContentSectionProps) => {
  return (
    <Link href={`#${title}`}>
      <section className="py-16 md:py-32">
        <span id={title} className="relative -top-16" />
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 md:flex-row flex-col flex items-center md:items-start">
          <h2 className="text-3xl md:text-[54px] font-semibold w-full md:w-1/3 flex-none text-center md:text-left mb-12 md:mb-0">
            {title}
          </h2>
          <div className="md:w-2/3 flex-none md:pl-16 text-xl md:text-2xl leading-relaxed space-y-8 mt-2 text-center md:text-left">
            {children}
          </div>
        </div>
      </section>
    </Link>
  );
};

export default ContentSection;
