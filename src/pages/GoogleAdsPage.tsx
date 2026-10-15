import React, { useState } from 'react';
import { Search, CheckCircle2, ChevronDown, ArrowRight, MessageSquare, AlertCircle, Shield } from 'lucide-react';
import { PageRoute } from '../types';

interface GoogleAdsPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const GoogleAdsPage: React.FC<GoogleAdsPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const problemsSolved = [
    {
      title: 'Broad Match Waste & Irrelevant Clicks',
      detail: 'Default Google Ads setups show your ads to irrelevant searchers, wasting daily budget on users who have zero interest in buying your service.',
    },
    {
      title: 'Low Quality Scores & Inflated Cost-Per-Click',
      detail: 'When ad copy does not precisely match the user’s search term and landing page, Google charges significantly more per click. We optimize relevance.',
    },
    {
      title: 'No Conversion or Call Tracking',
      detail: 'If you cannot identify which keyword produced a phone call or WhatsApp inquiry, you are flying blind. We implement call tracking and event attribution.',
    },
    {
      title: 'Competitor Bidding Pressure',
      detail: 'We strategically position your brand against local competitors in Jaipur and Chomu without getting dragged into unsustainable bidding wars.',
    },
  ];

  const deliverables = [
    'Google Ads account architecture & campaign segmentation',
    'Commercial search intent keyword research (Exact & Phrase match)',
    'Comprehensive negative keyword lists (pruning non-buyer terms)',
    'Responsive Search Ads (RSA) with localized headlines & descriptions',
    'Call assets, location assets & sitelink extension integration',
    'Conversion tracking setup for phone clicks & inquiry submissions',
    'Bid strategy management (Maximize Clicks / Target CPA pacing)',
    'Monthly transparent performance and cost breakdown reports',
  ];

  const processSteps = [
    { step: '01', title: 'Intent Research', desc: 'Isolating the exact commercial terms potential clients type when seeking your service in Jaipur or Rajasthan.' },
    { step: '02', title: 'Campaign Architecture', desc: 'Organizing tightly themed ad groups with dedicated negative keywords and relevant extensions.' },
    { step: '03', title: 'Ad Copywriting & Tracking', desc: 'Writing compelling ad variations and connecting conversion events to phone numbers and WhatsApp.' },
    { step: '04', title: 'Search Term Pruning', desc: 'Weekly reviews of search query reports to eliminate irrelevant clicks and redirect budget to high-intent terms.' },
  ];

  const faqs = [
    {
      q: 'Why should I run Google Ads instead of just SEO?',
      a: 'SEO is a vital long-term asset, but it takes months to build organic ranking authority. Google Ads puts your business at the very top of Google search results on Day 1 for active commercial searches.',
    },
    {
      q: 'How does Google Ads billing work?',
      a: 'Google operates on a Pay-Per-Click (PPC) model: you only pay when an interested searcher clicks on your ad. You set a daily budget cap (e.g. ₹300–₹1,000/day) so you never spend more than you choose.',
    },
    {
      q: 'Can searchers call my phone number directly from Google Ads?',
      a: 'Yes. For mobile users in Chomu and Jaipur, we configure prominent Call Extensions so prospective clients can tap one button to call your business phone directly.',
    },
    {
      q: 'Do you manage campaigns for local service businesses?',
      a: 'Absolutely. Local service providers, clinics, retail shops, and B2B suppliers represent our primary focus in the Jaipur and Rajasthan area.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="py-14 md:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.16em] text-[#164B8C] uppercase">
            <span>GOOGLE ADS MANAGEMENT</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 font-normal">Intent-Driven PPC Campaigns</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight">
            Connect with Customers at the Exact Moment They Search
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Well-structured Google Ads campaigns designed to capture active search demand in Jaipur, Chomu, and regional markets with maximum cost control.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/917014797458?text=Hello%20Hazel%20Digital!%20I%20would%20like%20to%20discuss%20Google%20Ads%20Management%20for%20my%20business."
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
              Request Keyword Audit
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Overview */}
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#164B8C] uppercase tracking-wider block">
              Search Intent Focus
            </span>
            <h2 className="text-2xl font-bold text-[#0B1F3A]">
              Why Search Intent Converts Higher Than Casual Browsing
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When a person searches for a service on Google, they already have a defined need. The key to successful search advertising is matching that specific intent with relevant ad copy, eliminating ambiguous keywords, and directing the visitor to a frictionless contact action like a phone call or WhatsApp inquiry.
            </p>
          </div>

          {/* Problems Solved */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#0B1F3A]">Common Google Ads Pitfalls We Solve</h3>
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
                End-to-End Execution
              </span>
              <h3 className="text-xl font-bold text-[#0B1F3A] mt-1">
                What Our Google Ads Management Delivers
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
            <h3 className="text-xl font-bold text-[#0B1F3A]">Our Google Ads Optimization Cycle</h3>
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
              <span className="font-bold text-slate-800 block text-sm">Managing Click Costs & Bidding</span>
              <p>
                Cost-per-click varies by industry competition in Jaipur and Rajasthan. We begin with controlled manual or maximize-clicks bidding to collect real search term queries before migrating to target CPA automation.
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
              Related Services
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => onNavigate('seo')}
                className="p-4 text-left border border-slate-200 rounded-xl hover:border-[#164B8C] transition-colors flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[#0B1F3A]">Organic SEO Services</div>
                  <div className="text-[11px] text-slate-500">Long-term organic visibility on Google Search and Maps</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => onNavigate('meta-ads')}
                className="p-4 text-left border border-slate-200 rounded-xl hover:border-[#164B8C] transition-colors flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[#0B1F3A]">Meta Ads Management</div>
                  <div className="text-[11px] text-slate-500">Facebook & Instagram targeted audience campaigns</div>
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
