import ContentLayout from "@/app/components/ContentLayout";
import ContentSection from "@/app/components/ContentSection";
import { APP_CONFIG } from "@/app/common";

export default function PrivacyPolicy() {
  return (
    <ContentLayout
      title="Privacy Policy"
      subtitle="Last updated: April 18th, 2024"
    >
      <ContentSection title="Privacy Overview">
        <p>
          At Ghost, we take your privacy seriously. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when you
          use our news aggregation service. Please read this privacy policy
          carefully. If you do not agree with the terms of this privacy policy,
          please do not access the site. We reserve the right to make changes to
          this Privacy Policy at any time and for any reason. We will alert you
          about any changes by updating the &quot;Last updated&quot; date of
          this Privacy Policy.
        </p>
        <p className="mt-6">
          Ghost is designed with privacy in mind. We currently do not collect
          any personal information from our users. Our service operates without
          requiring user accounts, registration, or the collection of personal
          data. We do not track your browsing history, location, or any other
          personal identifiers. The only data we process is the news content
          itself, which is publicly available information that we aggregate and
          present in a structured format. This approach ensures that you can use
          our service with complete confidence in your privacy.
        </p>
      </ContentSection>

      <ContentSection title="Data & Privacy Features">
        <p>
          Our website uses only essential cookies that are strictly necessary
          for the basic functionality of the service. These cookies do not track
          your personal information or browsing behavior. They are used solely
          to maintain your session and ensure the proper functioning of the
          website. We do not use any third-party tracking cookies, analytics
          tools, or advertising networks. Our commitment to minimal data
          collection extends to our use of cookies, ensuring that your browsing
          experience remains private and secure.
        </p>
        <p className="mt-6">
          While Ghost itself does not collect personal information, our service
          may contain links to third-party websites or services. These external
          sites have their own privacy policies and data collection practices.
          We encourage you to review the privacy policies of any third-party
          sites you visit. We are not responsible for the content or privacy
          practices of these external sites. When you click on a link to a
          third-party site, you will be subject to that site&apos;s privacy
          policy and terms of service, which may differ from ours.
        </p>
      </ContentSection>

      <ContentSection title="Security Measures">
        <p>
          We implement appropriate technical and organizational security
          measures to protect any information that may be processed through our
          service. While we take reasonable steps to protect your information,
          no method of transmission over the Internet or electronic storage is
          100% secure. Therefore, we cannot guarantee absolute security.
          However, we continuously work to maintain the security of our systems
          and regularly review our security practices to ensure they meet
          industry standards. Our commitment to security extends to both our
          technical infrastructure and our operational procedures.
        </p>
        <p className="mt-6">
          Our service is not intended for use by children under the age of 13.
          We do not knowingly collect personal information from children under
          13. If you are a parent or guardian and believe that your child has
          provided us with personal information, please contact us, and we will
          take steps to delete such information from our systems. We encourage
          parents and guardians to monitor their children&apos;s Internet usage
          and to help enforce our Privacy Policy by instructing their children
          never to provide personal information through our service without
          their permission.
        </p>
      </ContentSection>

      <ContentSection title="Policy Updates">
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          privacy practices, please contact us at{" "}
          <a
            className="text-primary hover:text-primary-dark"
            href={`mailto:${APP_CONFIG.email.hello}`}
          >
            {APP_CONFIG.email.hello}
          </a>
          . We will make every effort to resolve your concerns. Your privacy is
          important to us, and we are committed to protecting it. We welcome
          your feedback and questions about our privacy practices and will
          respond to your inquiries in a timely manner.
        </p>
        <p className="mt-6">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page and
          updating the &quot;Last updated&quot; date. You are advised to review
          this Privacy Policy periodically for any changes. Changes to this
          Privacy Policy are effective when they are posted on this page. Your
          continued use of our service after any modification to this Privacy
          Policy will constitute your acknowledgment of the modifications and
          your consent to abide and be bound by the modified Privacy Policy.
        </p>
      </ContentSection>
    </ContentLayout>
  );
}
