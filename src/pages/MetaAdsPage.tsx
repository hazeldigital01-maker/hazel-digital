import React, { useState } from 'react';
import { Target, CheckCircle2, HelpCircle, ArrowRight, MessageSquare, ChevronDown, Sparkles, AlertCircle } from 'lucide-react';
import { PageRoute } from '../types';

interface MetaAdsPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const MetaAdsPage: React.FC<MetaAdsPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const problemsSolved = [
    {
      title: 'Low Inquiries from Organic Posts',
      detail: 'Organic social reach on Facebook and Instagram has drastically decreased. Paid advertising ensures your target audience actually sees your business offerings.',
    },
    {
      title: 'Wasted Budget on Untargeted Boosting',
      detail: 'Simply clicking the "Boost Post" button often reaches generic users who have no buying intent. We use Meta Business Manager with demographic and radius constraints.',
    },
    {
      title: 'Ad Fatigue & Declining Results',
      detail: 'Running the same creative for months causes audiences to tune out. We implement structured testing across formats to sustain response rates.',
    },
    {
      title: 'Lack of Clear WhatsApp Leads',
      detail: 'We build direct WhatsApp click-to-chat campaigns that connect prospects immediately with your sales phone without clunky intermediary friction.',
    },
  ];

  const deliverables = [
    'Meta Business Manager and Pixel/Event configuration',
    'Target audience segmentation (age, interests, geo-radius in Jaipur & Chomu)',
    'High-converting ad copy with clear calls to action',
    'Custom video reels, single image & carousel creative formatting',
    'Direct-to-WhatsApp messaging funnel setup',
    'A/B split testing across hooks and creative angles',
    'Negative audience exclusions to preserve ad spend',
    'Transparent weekly reporting on spend, clicks, and incoming inquiries',
  ];

  const processSteps = [
    { step: '01', title: 'Audience Discovery', desc: 'Analyzing your ideal customer persona, geographic radius, and competitor offerings in Rajasthan.' },
    { step: '02', title: 'Creative Development', desc: 'Designing high-contrast images, promotional banners, and compelling copy that captures immediate attention.' },
    { step: '03', title: 'Campaign Launch', desc: 'Deploying campaigns across Instagram & Facebook with tracking parameters and WhatsApp destinations.' },
    { step: '04', title: 'Refinement & Scaling', desc: 'Reviewing real engagement data, pausing poor-performing variations, and reinforcing top performers.' },
  ];

  const faqs = [
    {
      q: 'How much budget do I need to start with Meta Ads?',
      a: 'You can start with a modest monthly budget (e.g. ₹5,000 to ₹10,000) for local campaigns in Chomu and Jaipur. We structure the campaign so that every rupee is directed toward relevant geographic boundaries.',
    },
    {
      q: 'Can Meta Ads send customers straight to my WhatsApp?',
      a: 'Yes! Direct WhatsApp Click-to-Chat ads are one of our core specialties. When an interested prospect taps the ad on Instagram or Facebook, their WhatsApp opens with a pre-formatted message ready to chat with you.',
    },
    {
      q: 'Do you guarantee an exact number of sales or leads?',
      a: 'We do not make deceptive claims about guaranteed sales or revenue figures, because actual customer purchases depend on market demand, pricing, and your own sales follow-up. What we do guarantee is disciplined audience targeting, high-grade creatives, and continuous campaign optimization.',
    },
    {
      q: 'Do I need an existing active Facebook page or Instagram account?',
      a: 'Yes, or we can assist you in establishing your business profile and connecting it to Meta Business Manager before advertising.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="py-14 md:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.16em] text-[#164B8C] uppercase">
            <span>META ADS MANAGEMENT</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 font-normal">Facebook & Instagram Campaigns</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight">
            Targeted Meta Advertising That Drives Real Customer Inquiries
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Connect with ready-to-buy audiences in Jaipur, Chomu, and beyond through strategically planned Facebook and Instagram ad campaigns.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/917014797458?text=Hello%20Hazel%20Digital!%20I%20would%20like%20to%20discuss%20Meta%20Ads%20Management%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 px-6 bg-[#164B8C] hover:bg-[#0B1F3A] text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp (+91 7014797458)</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="py-3 px-6 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200 transition-colors"
            >
              Get Free Campaign Audit
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Introduction & Overview */}
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#164B8C] uppercase tracking-wider block">
              Strategic Social Advertising
            </span>
            <h2 className="text-2xl font-bold text-[#0B1F3A]">
              Why Structured Meta Ads Outperform Simple Post Boosting
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Meta platforms (Facebook and Instagram) provide the deepest audience behavioral and interest targeting in digital advertising. However, amateur "post boosting" burns budget on unfocused impressions. At Hazel Digital, we configure campaigns within Meta Ads Manager, establishing precise geographic radiuses, negative exclusions, and conversion objectives.
            </p>
          </div>

          {/* Problems Solved */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#0B1F3A]">Challenges We Help You Overcome</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problemsSolved.map((item, idx) => (
                <div key={idx} className="p-5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1.5">
                  <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Deliverables */}
          <div className="bg-[#EAF3FF] p-8 rounded-2xl border border-blue-100 space-y-5">
            <div>
              <span className="text-xs font-bold text-[#164B8C] uppercase tracking-wider">
                Full Scope of Work
              </span>
              <h3 className="text-xl font-bold text-[#0B1F3A] mt-1">
                What Our Meta Ads Management Service Includes
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-lg border border-blue-100/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Working Process */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#0B1F3A]">Our 4-Step Campaign Roadmap</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {processSteps.map((p, idx) => (
                <div key={idx} className="p-5 border border-slate-200 rounded-xl space-y-2">
                  <span className="text-xl font-extrabold text-[#164B8C] font-mono">{p.step}</span>
                  <h4 className="text-sm font-bold text-slate-900">{p.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Realistic Expectations Banner */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#164B8C] shrink-0 mt-0.5" />
            <div className="text-xs text-slate-600 leading-relaxed space-y-1">
              <span className="font-bold text-slate-800 block text-sm">Realistic Expectations & Transparency</span>
              <p>
                High-performing Meta campaigns require 7 to 14 days of initial algorithmic learning. We monitor early indicators (click-through rates, cost per link click, message start rate) and refine audience criteria to ensure cost efficiency before expanding budget.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#0B1F3A]">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="p-4 pt-0 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Related Services */}
          <div className="border-t border-slate-100 pt-8">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
              Complementary Capabilities
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => onNavigate('graphic-design')}
                className="p-4 text-left border border-slate-200 rounded-xl hover:border-[#164B8C] transition-colors flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[#0B1F3A]">Graphic Design for Ad Creatives</div>
                  <div className="text-[11px] text-slate-500">Engaging visual creatives designed to halt the scroll</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => onNavigate('google-ads')}
                className="p-4 text-left border border-slate-200 rounded-xl hover:border-[#164B8C] transition-colors flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[#0B1F3A]">Google Ads Management</div>
                  <div className="text-[11px] text-slate-500">Capture active search queries when intent is highest</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
