import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Shield } from 'lucide-react';
import Footer from './Footer';

const TermsOfUse: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
          <AnimatedSection animation="fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-sm px-5 py-2 mb-6 border border-agency-orange/20">
              <Shield className="h-4 w-4 text-agency-orange" />
              <span className="text-agency-dark font-medium text-sm">Terms of Use</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} animation="fade-up">
            <h1 className="font-bold text-agency-dark mb-6 text-4xl">
              <span className="text-agency-orange">Contentfinix - Terms of Use</span>
            </h1>
            <p className="text-gray-600 mb-4">Last updated: 17/08/2024</p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={300} animation="fade-up">
          <div className="mb-10 prose prose-lg max-w-4xl mx-auto border border-agency-orange/20 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-gray-600 mb-8">
              Welcome to Contentfinix. This document outlines the terms of use governing the use of our content marketing services. By using our services, you agree to be bound by these terms.
            </p>

            <h2 className="text-2xl font-bold text-agency-dark mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using Contentfinix’s services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-agency-dark mt-8 mb-4">2. Ownership & Rights</h2>
            <ul className="list-none pl-6 text-gray-600 space-y-2">
              <li>
                <strong>a.</strong> Upon completion of our content marketing services and full payment by the client, Contentfinix hereby transfers and assigns to the client all ownership rights in the content we produce and publish for them. This includes the rights to distribute, display, modify, and monetize the content.
              </li>
              <li>
                <strong>b.</strong> Until full payment is received, Contentfinix retains all rights to the produced content.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-agency-dark mt-8 mb-4">3. Payment & Fees</h2>
            <p className="text-gray-600 mb-4">
              Payment terms, fees, and other related charges will be specified separately in the service contract or agreement. Failure to settle payment within the stipulated timeframe may result in the withholding of content files and rights.
            </p>

            <h2 className="text-2xl font-bold text-agency-dark mt-8 mb-4">4. Service Guarantee & Limitations</h2>
            <p className="text-gray-600 mb-4">
              Contentfinix strives to provide top-quality services to all our clients. However, we make no warranties regarding the outcome or effectiveness of any particular content marketing project. Feedback and revisions will be governed by the stipulations outlined in the service agreement.
            </p>

            <h2 className="text-2xl font-bold text-agency-dark mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              Contentfinix and its affiliates will not be liable for any indirect, incidental, or consequential damages (including lost profits) arising out of or in connection with our services, even if we have been advised of the possibility of such damages.
            </p>

            <h2 className="text-2xl font-bold text-agency-dark mt-8 mb-4">6. Termination</h2>
            <p className="text-gray-600 mb-4">
              Contentfinix reserves the right to terminate services at any time for any reason, including but not limited to violations of these terms or failure to pay fees when due.
            </p>

            <h2 className="text-2xl font-bold text-agency-dark mt-8 mb-4">7. Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify these terms at any time. If we make changes, we will notify you by revising the date at the top of the page.
            </p>

            <h2 className="text-2xl font-bold text-agency-dark mt-8 mb-4">8. Contact</h2>
            <p className="text-gray-600">
              For any questions or clarifications regarding these terms, please contact us at{' '}
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

export default TermsOfUse;
