import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { WhatsAppInquiryForm } from '../components/WhatsAppInquiryForm';
import { PageRoute } from '../types';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-14 md:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.16em] text-[#164B8C] uppercase">
            <span>GET IN TOUCH</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 font-normal">Hazel Digital</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight">
            Let's Talk About Your Business
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Ready to explore Meta Ads, Google Ads, SEO, or Graphic Design? Connect directly with our team on WhatsApp, phone, or email.
          </p>
        </div>
      </section>

      {/* Main Content: 2-Column Split */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact Details & Location Focus */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold text-[#164B8C] uppercase tracking-wider block mb-1">
                  Direct Channels
                </span>
                <h2 className="text-2xl font-bold text-[#0B1F3A]">
                  Fast, Transparent Communication
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  We believe in responsive, direct collaboration. Reach out via WhatsApp for immediate questions or submit your project details using the inquiry form.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/917014797458?text=Hello%20Hazel%20Digital!%20I%20would%20like%20to%20discuss%20my%20marketing%20needs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-2xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MessageSquare className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-900 block">WhatsApp Direct (Recommended)</span>
                    <span className="text-sm font-semibold text-emerald-700 mt-0.5 block font-mono">+91 7014797458</span>
                    <span className="text-[11px] text-emerald-600 mt-1 block">Tap to open WhatsApp chat immediately</span>
                  </div>
                </a>

                {/* Direct Phone */}
                <a
                  href="tel:+917014797458"
                  className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#164B8C]/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EAF3FF] text-[#164B8C] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Phone Call</span>
                    <span className="text-sm font-semibold text-[#164B8C] mt-0.5 block font-mono">+91 7014797458</span>
                    <span className="text-[11px] text-slate-500 mt-1 block">Direct phone inquiry line</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hazeldigital01@gmail.com"
                  className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#164B8C]/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EAF3FF] text-[#164B8C] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Email Inquiries</span>
                    <span className="text-sm font-semibold text-[#164B8C] mt-0.5 block">hazeldigital01@gmail.com</span>
                    <span className="text-[11px] text-slate-500 mt-1 block">Detailed briefs & proposal requests</span>
                  </div>
                </a>

                {/* Service Locations */}
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 bg-white">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF3FF] text-[#164B8C] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Service Locations</span>
                    <p className="text-xs font-medium text-slate-700 mt-0.5">
                      Chomu, Jaipur, Rajasthan, India
                    </p>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      Providing localized digital marketing across regional and national client networks
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Box */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Privacy & Confidentiality</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We respect your business data. Your contact details, campaign budgets, and proprietary business metrics are never shared with third parties.
                </p>
              </div>
            </div>

            {/* Right Column: Embedded Inquiry Form */}
            <div className="lg:col-span-7">
              <WhatsAppInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
