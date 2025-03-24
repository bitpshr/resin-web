import React from "react";
import Button from "@/app/components/Button";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import FeatureCard from "@/app/components/FeatureCard";
import ContentLayout from "@/app/components/ContentLayout";
import ContentSection from "@/app/components/ContentSection";

const About: React.FC = () => {
  return (
    <ContentLayout
      title={
        <>
          Direct news updates.
          <br />
          No journalists.
        </>
      }
      subtitle="Ghost is an automated system that removes journalists and opinion and surfaces raw news data directly to readers."
    >
      <ContentSection title="What is Ghost?">
        <p>
          Staying up-to-date on news is hard. Mainstream media is biased,
          podcasts are time-consuming, and social media requires constant
          following and fact-checking. Most readers end up stitching together a
          murky picture of world events from scattered, unreliable sources.
        </p>
        <p>
          But what if the raw news data behind the headlines was available to
          everyone — not just journalists? What if you could see events unfold
          in real time, directly from the source, and form your own view?
        </p>
        <p>
          Ghost is a feed of unfiltered news updates from direct sources.
          It&apos;s a system built to remove opinion, eliminate editorial bias,
          and surface raw, low-level news data directly to readers. Ghost
          delivers a continuous stream of source-backed headlines so you can
          analyze the world independently.
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
              icon={<LockClosedIcon className="size-7" />}
              title="Fact-only updates"
              description="News updates only contain facts. Updates never contain opinions, theories, or emotions."
            />
            <FeatureCard
              icon={<LockClosedIcon className="size-7" />}
              title="Fact-only updates"
              description="News updates only contain facts. Updates never contain opinions, theories, or emotions."
            />
            <FeatureCard
              icon={<LockClosedIcon className="size-7" />}
              title="Fact-only updates"
              description="News updates only contain facts. Updates never contain opinions, theories, or emotions."
            />
          </div>
        </div>
      </section>

      <section className="bg-primary text-copy-on-primary py-16 md:py-32 border-b">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-4xl md:text-6xl font-thin">
          <b>Lorem ipsum dolor sit amet.</b> Consectetur adipiscing elit. Nulla
          consectetur mauris arcu, eget rutrum justo iaculis in. Nunc in erat ac
          ante bibendum ultrices id quis risus. Etiam id turpis elementum,
          condimentum lectus auctor, vulputate purus. Maecenas ornare congue
          fringilla.
        </div>
      </section>

      <section className="px-4 md:px-8 text-center py-24 md:py-32 ">
        <h1 className="text-4xl md:text-7xl font-semibold mb-10 md:mb-6 leading-10 md:leading-22">
          Direct news updates.
          <br />
          No journalists.
        </h1>
        <p className="text-xl md:text-2xl font-sans leading-relaxed max-w-xl mx-auto mb-16">
          Ghost is an automated system that removes journalists and opinion and
          surfaces raw news data directly to readers.
        </p>
        <Button>Read Now</Button>
      </section>
    </ContentLayout>
  );
};

export default About;
