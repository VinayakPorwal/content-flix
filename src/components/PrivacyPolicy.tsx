import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Shield } from 'lucide-react';
import Footer from './Footer';
const PrivacyPolicy: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
          <AnimatedSection animation="fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-sm px-5 py-2 mb-6 border border-agency-orange/20">
              <Shield className="h-4 w-4 text-agency-orange" />
              <span className="text-agency-dark font-medium text-sm">Privacy Policy</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} animation="fade-up">
            <h1 className="font-bold text-agency-dark mb-6 text-4xl">
              <span className="text-agency-orange">Contentfinix - Privacy Policy</span>
            </h1>
            <p className="text-gray-600 mb-4">Last updated: 17/08/2024</p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={300} animation="fade-up">
          <div className="mb-10 prose prose-lg max-w-4xl mx-auto border border-agency-orange/20 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-gray-600 mb-8">
              At contentfinix, we are dedicated to safeguarding your privacy and ensuring the protection of your personal information. This privacy policy details how we collect, use, and share your personal information. By using our services, you agree to the terms outlined in this policy.
            </p>

            <h2 className="text-2xl font-bold text-agency-dark mt-8 mb-4">1. Information We Collect</h2>
            <ul className="list-none pl-6 text-gray-600 space-y-2">
              <li><strong>Personal Information:</strong> When you engage with our services, we may gather personal details such as your name, email address, mailing address, phone number, and payment information.</li>
              <li><strong>Content Data:</strong> We retain the content and related materials you provide for our marketing and content creation services.</li>
              <li><strong>Usage Data:</strong> We may collect information regarding your interactions with our services, including the type of content you engage with, the frequency of your visits, and other related data.</li>
            </ul>

            <h2 className="text-2xl font-bold text-agency-dark mt-8 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>To deliver our content marketing services, including the creation, editing, and distribution of content.</li>
              <li>To communicate with you regarding our services, including updates and special offers.</li>
              <li>To improve and enhance our services based on feedback and insights from your usage.</li>
            </ul>

            <h2 className="text-2xl font-bold text-agency-dark mt-8 mb-4">3. Sharing & Disclosure of Information</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Client Ownership:</strong> Once content is produced and delivered to our clients, they hold full ownership and control over its distribution and use.</li>
              <li><strong>Third-Party Services:</strong> We may share your information with third-party vendors or service providers that assist us in delivering our services.</li>
              <li><strong>Legal Compliance:</strong> We may disclose your information when required by law or when necessary to comply with legal obligations or processes.</li>
            </ul>

            <h2 className="text-2xl font-bold text-agency-dark mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We employ appropriate security measures to protect your personal data from unauthorized access, alteration, or destruction. However, please note that no method of online data transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-agency-dark mt-8 mb-4">5. Cookies & Tracking Technologies</h2>
            <p className="text-gray-600 mb-4">
              Our website may utilize cookies and similar tracking technologies to enhance your experience, analyze trends, manage the site, and monitor user activities.
            </p>

            <h2 className="text-2xl font-bold text-agency-dark mt-8 mb-4">6. Your Rights & Choices</h2>
            <p className="text-gray-600 mb-4">
              You have the right to access, correct, or delete your personal information held by us. You can make such requests by contacting us directly.
            </p>

            <h2 className="text-2xl font-bold text-agency-dark mt-8 mb-4">7. Policy Updates</h2>
            <p className="text-gray-600 mb-4">
              We may update this privacy policy from time to time. Any changes will be posted on this page, and the "last updated" date will reflect the most recent modifications.
            </p>

            <h2 className="text-2xl font-bold text-agency-dark mt-8 mb-4">8. Contact Information</h2>
            <p className="text-gray-600">
              For any inquiries, concerns, or comments about this privacy policy, please reach out to us at{' '}
              <a href="mailto:contentfinix.ai@gmail.com" className="text-agency-orange hover:underline">
                contentfinix.ai@gmail.com
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>
      <Footer />
    </section>
  );
};

export default PrivacyPolicy;
