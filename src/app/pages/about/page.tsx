import React from "react";
import Button from "@/app/components/Button";
import {
  ListBulletIcon,
  LockClosedIcon,
  NewspaperIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import FeatureCard from "@/app/components/FeatureCard";
import ContentLayout from "@/app/components/ContentLayout";
import ContentSection from "@/app/components/ContentSection";
import { APP_CONFIG } from "@/app/common";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <ContentLayout
      title={
        <>
          Direct news updates.
          <br />
          No opinions.
        </>
      }
      subtitle={`${APP_CONFIG.appName} is an automated system that removes opinion and surfaces fact-only news updates to readers.`}
    >
      <ContentSection title={`What is ${APP_CONFIG.appName}?`}>
        <p>
          Staying up-to-date on news is hard. Mainstream media is biased,
          podcasts are time-consuming, and social media requires constant
          following and fact-checking. Most readers end up stitching together a
          murky picture of world events from scattered, unreliable sources.
        </p>
        <p>
          But what if the raw news data behind the headlines was available to
          everyone — not just journalists? What if you could see events unfold
          in real time, directly from the source, and form your own opinion?
        </p>
        <p>
          {APP_CONFIG.appName} is a feed of unfiltered news updates from direct
          sources. It&apos;s a system built to remove opinion, eliminate
          editorial bias, and surface raw, low-level news data directly to
          readers. {APP_CONFIG.appName} delivers a continuous stream of
          source-backed headlines so you can analyze the world independently.
        </p>
      </ContentSection>
      <section className="bg-amber-50 border-t border-b py-16 md:py-32 text-copy-on-primary">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-[54px] leading-10 md:leading-16 text-center">
            No journalists, no opinions.
            <br />
            <b>Just factual news updates.</b>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-14 md:mt-28 font-sans">
            <FeatureCard
              icon={<LockClosedIcon className="size-7" />}
              title="Fact-only updates"
              description="News updates only contain facts. Updates never contain opinions, theories, or emotions."
            />
            <FeatureCard
              icon={<NewspaperIcon className="size-7" />}
              title="Primary sources cited"
              description="Relevant sources are always cited. Updates can always be traced back to their origin."
            />
            <FeatureCard
              icon={<ScaleIcon className="size-7" />}
              title="No editorial bias"
              description={`${APP_CONFIG.appName} employs no journalists or editors. The system removes opinion and only presents data.`}
            />
            <FeatureCard
              icon={<ListBulletIcon className="size-7" />}
              title="Continuous updates"
              description={`${APP_CONFIG.appName} delivers a feed of real time news data so you can stay up-to-date.`}
            />
          </div>
        </div>
      </section>

      <section className="bg-primary text-copy-on-primary py-16 md:py-32 border-b">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-4xl md:text-6xl font-lighter">
          <span className="font-bold">Resin is raw news data.</span> Resin
          parses world events and distills them into concise, fact-only updates
          that are always sourced. Resin is a continous stream of news facts. No
          more sifting through paragraphs of journalistic fluff or
          emotion-driven agenda-based articles. Follow the data and form your
          own opinion.
        </div>
      </section>

      <section className="px-4 md:px-8 text-center py-24 md:py-32 ">
        <h1 className="text-4xl md:text-7xl font-semibold mb-10 md:mb-6 leading-10 md:leading-22">
          Unbiased news data.
          <br />
          Direct sources.
        </h1>
        <p className="text-xl md:text-2xl font-sans leading-relaxed max-w-xl mx-auto mb-16">
          Ghost is an automated system that removes journalists and opinion and
          surfaces raw news data directly to readers.
        </p>
        <Link href="/">
          <Button>Read Now</Button>
        </Link>
      </section>
    </ContentLayout>
  );
};

export default About;
