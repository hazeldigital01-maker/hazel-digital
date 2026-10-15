import React from 'react';
import { Target, Search, TrendingUp, Palette, ArrowRight, MessageSquare, CheckCircle2, Shield, HeartHandshake } from 'lucide-react';
import { PageRoute } from '../types';
import { HazelLogo } from '../components/HazelLogo';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="py-14 md:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.16em] text-[#164B8C] uppercase">
            <span>ABOUT HAZEL DIGITAL</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 font-normal">Chomu & Jaipur, Rajasthan</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight">
            Helping Businesses Make Better Use of Digital Marketing
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A focused digital marketing practice dedicated to building sustainable visibility, targeted paid advertising, and high-impact design assets.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Who We Are & What We Do */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#164B8C] uppercase tracking-wider block">
                Who We Are
              </span>
              <h2 className="text-2xl font-bold text-[#0B1F3A]">
                A Digital Partner Focused on Practical Business Growth
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Hazel Digital is a digital marketing agency located in Rajasthan, serving businesses in Chomu, Jaipur, and surrounding commercial areas. We operate with a clear objective: removing confusion from digital channels and replacing guesswork with structured campaigns.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rather than treating online marketing as a series of isolated experiments, we connect search visibility, targeted paid reach, and creative presentation into a coherent system tailored to your commercial priorities.
              </p>
            </div>

            <div className="space-y-4 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80">
              <span className="text-xs font-bold text-[#164B8C] uppercase tracking-wider block">
                What We Do
              </span>
              <h2 className="text-xl font-bold text-[#0B1F3A]">
                Comprehensive Marketing Execution
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Paid Social Campaigns:</strong> Managing targeted Facebook and Instagram ad accounts to generate qualified inquiries.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Google Search Ads:</strong> Structuring exact and phrase match campaigns to capture high-intent local queries.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Search Engine Optimization:</strong> Enhancing website structure, local citations, and on-page signals.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Graphic & Brand Design:</strong> Crafting cohesive advertising visuals, social media feeds, and promotional banners.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Our Approach */}
          <div className="border-t border-slate-100 pt-12 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-[#164B8C] uppercase tracking-wider">
                Our Approach
              </span>
              <h2 className="text-2xl font-bold text-[#0B1F3A]">
                Honest Strategy Grounded in Business Reality
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                How we work with our clients to maintain trust, transparency, and consistent momentum.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-slate-200 bg-white">
                <div className="w-9 h-9 rounded-lg bg-[#EAF3FF] text-[#164B8C] flex items-center justify-center mb-3">
                  <Search className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#0B1F3A] mb-1.5">No Fluff Discovery</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We take time to understand your operating margins, customer profile, and local competitive landscape before recommending budgets.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-slate-200 bg-white">
                <div className="w-9 h-9 rounded-lg bg-[#EAF3FF] text-[#164B8C] flex items-center justify-center mb-3">
                  <Shield className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#0B1F3A]">Realistic Expectations</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We refrain from making unrealistic promises about instant overnight riches. Instead, we focus on measurable inquiry improvements.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-slate-200 bg-white">
                <div className="w-9 h-9 rounded-lg bg-[#EAF3FF] text-[#164B8C] flex items-center justify-center mb-3">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#0B1F3A]">Direct Communication</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clients communicate directly with the individuals managing their campaigns via WhatsApp for immediate support and updates.
                </p>
              </div>
            </div>
          </div>

          {/* Who We Help */}
          <div className="bg-[#EAF3FF] rounded-2xl p-8 border border-blue-100">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold text-[#164B8C] uppercase tracking-wider block">
                Who We Help
              </span>
              <h2 className="text-2xl font-bold text-[#0B1F3A]">
                Serving Ambitious Regional Businesses & Retailers
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Whether you are a retailer in Chomu looking to reach shoppers within a 15km radius, a professional service practice in Jaipur seeking search inquiries, or an emerging brand expanding across Rajasthan, our frameworks are designed for practical local and regional growth.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-600 font-medium">
                <span className="bg-white px-3 py-1.5 rounded-lg border border-blue-200">Local Retailers</span>
                <span className="bg-white px-3 py-1.5 rounded-lg border border-blue-200">Healthcare Clinics</span>
                <span className="bg-white px-3 py-1.5 rounded-lg border border-blue-200">Home & Professional Services</span>
                <span className="bg-white px-3 py-1.5 rounded-lg border border-blue-200">Hospitality & Dining</span>
                <span className="bg-white px-3 py-1.5 rounded-lg border border-blue-200">Emerging E-Commerce</span>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="text-center pt-8 border-t border-slate-100 space-y-4">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">
              Ready to Discuss Your Business Goals?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              Reach out via WhatsApp or submit an inquiry to schedule an introductory consultation with Hazel Digital.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/917014797458?text=Hello%20Hazel%20Digital!%20I%20would%20like%20to%20discuss%20working%20together."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3 px-6 bg-[#164B8C] hover:bg-[#0B1F3A] text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={onOpenConsultation}
                className="py-3 px-6 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200 transition-colors"
              >
                Submit Project Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
