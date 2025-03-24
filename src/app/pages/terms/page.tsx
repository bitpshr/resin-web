import ContentLayout from "@/app/components/ContentLayout";
import ContentSection from "@/app/components/ContentSection";
import { APP_CONFIG } from "@/app/common";

export default function TermsOfUse() {
  return (
    <ContentLayout
      title="Terms of Use"
      subtitle="Last updated: April 18th, 2024"
    >
      <ContentSection title="Terms Overview">
        <p>
          Welcome to Ghost. By accessing or using our news aggregation service,
          you agree to be bound by these Terms of Use. Please read these terms
          carefully before using our service. If you do not agree to these
          terms, please do not use our service. We reserve the right to modify
          these terms at any time, and your continued use of the service
          following any changes indicates your acceptance of the modified terms.
        </p>
        <p className="mt-6">
          Ghost provides a news aggregation service that collects and presents
          publicly available news content. We do not create or modify the
          content we aggregate. Our service is provided for informational
          purposes only and should not be considered as professional advice. We
          make no representations or warranties about the accuracy,
          completeness, or reliability of any content provided through our
          service.
        </p>
      </ContentSection>

      <ContentSection title="Service Usage">
        <p>
          You may use our service for personal, non-commercial purposes. You
          agree not to use our service for any illegal or unauthorized purpose.
          You are responsible for ensuring that your use of our service complies
          with all applicable laws and regulations. We reserve the right to
          terminate or restrict your access to our service if we believe you
          have violated these terms or any applicable laws.
        </p>
        <p className="mt-6">
          You agree not to engage in any activity that interferes with or
          disrupts our service, including but not limited to: attempting to gain
          unauthorized access to our systems, using automated means to access
          our service, or attempting to bypass any security measures we have in
          place. You also agree not to use our service to distribute spam,
          malware, or other harmful content.
        </p>
      </ContentSection>

      <ContentSection title="Content Rights">
        <p>
          All content provided through our service is the property of its
          respective owners and is protected by applicable intellectual property
          laws. We do not claim ownership of any content we aggregate. The
          presentation and organization of content on our service is protected
          by copyright and other intellectual property rights. You may not copy,
          modify, distribute, or otherwise use any content from our service
          without the express permission of the content owner.
        </p>
        <p className="mt-6">
          We make no representations or warranties about the accuracy,
          completeness, or reliability of any content provided through our
          service. The content we aggregate may contain errors or inaccuracies,
          and we are not responsible for any reliance you place on such content.
          You use our service and any content provided through it at your own
          risk.
        </p>
      </ContentSection>

      <ContentSection title="Terms Updates">
        <p>
          If you have any questions about these Terms of Use, please contact us
          at{" "}
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
          We may update these Terms of Use from time to time. We will notify you
          of any changes by posting the new Terms of Use on this page and
          updating the &quot;Last updated&quot; date. Your continued use of our
          service after any changes to these terms constitutes your acceptance
          of the modified terms.
        </p>
      </ContentSection>
    </ContentLayout>
  );
}
