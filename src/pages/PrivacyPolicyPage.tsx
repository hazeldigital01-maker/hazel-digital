import React from 'react';
import { PageRoute } from '../types';
import { Shield, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
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
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500">
            Last updated: October 2026 · Hazel Digital
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#0B1F3A]">1. Introduction</h2>
            <p>
              Hazel Digital ("we", "our", or "us") operates the website and digital marketing consulting services located in Chomu, Jaipur, Rajasthan, India. This Privacy Policy informs visitors and potential clients of our policies regarding the collection, use, and disclosure of personal information when using our website or contacting us.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#0B1F3A]">2. Information We Collect</h2>
            <p>
              When you voluntarily reach out to us via our website forms, direct email (hazeldigital01@gmail.com), phone, or WhatsApp (+91 7014797458), we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Full Name</li>
              <li>Business or Brand Name</li>
              <li>Phone / WhatsApp Number</li>
              <li>Email Address</li>
              <li>Project briefs, service selections, and marketing budgets</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#0B1F3A]">3. How We Use Your Information</h2>
            <p>
              We use collected information solely for genuine business purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Responding to your inquiries and scheduling marketing consultations</li>
              <li>Preparing customized proposals for Meta Ads, Google Ads, SEO, or Graphic Design</li>
              <li>Communicating campaign updates, performance analyses, and account management details</li>
              <li>Maintaining professional service records and meeting legal compliance</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#0B1F3A]">4. WhatsApp Communication</h2>
            <p>
              Our website provides click-to-chat features that connect with WhatsApp. When you initiate a conversation via WhatsApp, communication is subject to WhatsApp's standard end-to-end encryption and terms of service. We do not transmit or sell your WhatsApp contact details to any third-party marketing brokers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#0B1F3A]">5. Data Security & Storage</h2>
            <p>
              We implement reasonable administrative and technical security measures to safeguard your business details against unauthorized access, alteration, or disclosure. However, no internet transmission or electronic storage method is 100% immune from security incidents.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#0B1F3A]">6. Contact Information</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to request the deletion of your contact records, please reach out to us:
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1 text-xs">
              <div><strong>Hazel Digital</strong></div>
              <div>Email: <a href="mailto:hazeldigital01@gmail.com" className="text-[#164B8C] underline">hazeldigital01@gmail.com</a></div>
              <div>Phone: <a href="tel:+917014797458" className="text-[#164B8C] underline">+91 7014797458</a></div>
              <div>Service Locations: Chomu, Jaipur, Rajasthan, India</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
