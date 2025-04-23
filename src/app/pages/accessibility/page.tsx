import ContentLayout from "@/app/components/ContentLayout";
import ContentSection from "@/app/components/ContentSection";
import { APP_CONFIG } from "@/app/common";

export default function Accessibility() {
  return (
    <ContentLayout
      title="Accessibility"
      subtitle="Last updated: April 18th, 2025"
    >
      <ContentSection title="Accessibility Overview">
        <p>
          At {APP_CONFIG.appName}, we are committed to ensuring digital
          accessibility for people with disabilities. We are continually
          improving the user experience for everyone and applying the relevant
          accessibility standards. Our goal is to provide a website that is
          accessible to the widest possible audience, regardless of technology
          or ability.
        </p>
        <p className="mt-6">
          We aim to conform to level AA of the World Wide Web Consortium (W3C)
          Web Content Accessibility Guidelines 2.1. These guidelines explain how
          to make web content more accessible for people with disabilities.
          Conformance with these guidelines will help make the web more
          user-friendly for all people. While we strive to adhere to these
          guidelines, we acknowledge that some areas of our website may not yet
          be fully accessible.
        </p>
      </ContentSection>

      <ContentSection title="Accessibility Features">
        <p>
          Our website includes several features designed to improve
          accessibility for users with disabilities. These include: keyboard
          navigation support, screen reader compatibility, resizable text, and
          high-contrast color schemes. We use semantic HTML5 markup to ensure
          proper structure and navigation. All images include descriptive alt
          text, and our content is organized in a logical, hierarchical manner.
        </p>
        <p className="mt-6">
          We have implemented responsive design principles to ensure our website
          is accessible across different devices and screen sizes. Our content
          is designed to be readable and navigable regardless of the device
          being used. We avoid using flashing or blinking content that could
          trigger seizures, and we ensure that all interactive elements are
          accessible via keyboard.
        </p>
      </ContentSection>

      <ContentSection title="Current Limitations">
        <p>
          Despite our best efforts to ensure accessibility of our website, there
          may be some limitations. Some third-party content or features may not
          be fully accessible. We are working to identify and address these
          limitations. If you encounter any accessibility barriers, please let
          us know so we can work to resolve them.
        </p>
        <p className="mt-6">
          Our website relies on HTML, CSS, and JavaScript to function properly.
          While we strive to ensure that our website works without JavaScript,
          some features may not be available. We recommend using the latest
          version of your web browser for the best experience. If you are using
          assistive technologies, please ensure they are up to date.
        </p>
      </ContentSection>

      <ContentSection title="Accessibility Feedback">
        <p>
          We welcome your feedback on the accessibility of our website. If you
          encounter any accessibility barriers or have suggestions for
          improvement, please contact us at{" "}
          <a
            className="text-primary hover:text-primary-dark"
            href={`mailto:${APP_CONFIG.email.hello}`}
          >
            {APP_CONFIG.email.hello}
          </a>
          . We will make every effort to address your concerns in a timely
          manner.
        </p>
        <p className="mt-6">
          We are committed to continuously improving the accessibility of our
          website. We regularly review our accessibility practices and make
          updates as needed. We will post any accessibility updates on this page
          and update the &quot;Last updated&quot; date accordingly.
        </p>
      </ContentSection>
    </ContentLayout>
  );
}
