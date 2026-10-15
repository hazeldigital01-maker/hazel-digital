import React from 'react';
import { PageRoute } from '../types';
import { ArrowLeft } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#164B8C] hover:underline mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">
            Terms and Conditions
          </h1>
          <p className="text-xs text-slate-500">
            Last updated: October 2026 · Hazel Digital
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#0B1F3A]">1. Agreement to Terms</h2>
            <p>
              By accessing and using the website of Hazel Digital, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#0B1F3A]">2. Digital Marketing Services</h2>
            <p>
              Hazel Digital provides digital marketing consultation, campaign management (Meta Ads and Google Ads), search engine optimization (SEO), and graphic design services. Detailed project scopes, deliverables, timelines, and payment terms for client engagements are formalized through individual service agreements or written proposals.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#0B1F3A]">3. Advertising & Performance Disclaimer</h2>
            <p>
              Digital advertising and search rankings are subject to third-party platform policies (such as Google LLC and Meta Platforms, Inc.), auction dynamics, consumer demand, and competitive shifts. Hazel Digital executes professional best practices, diligent research, and continuous optimization; however, we do not make guarantees of specific sales figures, exact lead volumes, or permanent search ranking positions.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#0B1F3A]">4. Intellectual Property</h2>
            <p>
              The original brand name, monogram, graphics, text, and layout on this website are the intellectual property of Hazel Digital. Sample work and concept demonstration projects shown on the portfolio page are illustrative examples of agency capabilities.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#0B1F3A]">5. External Links & WhatsApp Functionality</h2>
            <p>
              Our website links directly to WhatsApp and external services. Hazel Digital has no control over the content, privacy policies, or practices of any third-party sites or software.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#0B1F3A]">6. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Rajasthan and the Republic of India.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#0B1F3A]">7. Contact</h2>
            <p>
              For inquiries regarding these terms, contact Hazel Digital at <strong>hazeldigital01@gmail.com</strong> or <strong>+91 7014797458</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
