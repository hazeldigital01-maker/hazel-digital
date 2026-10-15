import React, { useState } from 'react';
import { TrendingUp, CheckCircle2, ChevronDown, ArrowRight, MessageSquare, AlertCircle, MapPin, Globe } from 'lucide-react';
import { PageRoute } from '../types';

interface SeoPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const SeoPage: React.FC<SeoPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const problemsSolved = [
    {
      title: 'Invisible on Google for Local Searches',
      detail: 'When prospective customers search for services in Chomu or Jaipur, your website fails to appear in organic results or local Google Map packs.',
    },
    {
      title: 'Technical Crawl & Indexing Errors',
      detail: 'Slow page loading, missing mobile viewport responsiveness, broken sitemaps, or improper canonical links prevent Google bots from indexing your pages properly.',
    },
    {
      title: 'Unstructured Content & Keyword Stuffing',
      detail: 'Older black-hat SEO tactics like repetitive keyword stuffing trigger search penalties. Modern SEO requires semantic hierarchy, clean structured data, and helpful content.',
    },
    {
      title: 'Disjointed Google Business Profile',
      detail: 'Inconsistent business categories, incomplete descriptions, or missing location signals weaken local search relevance in Rajasthan.',
    },
  ];

  const deliverables = [
    'Comprehensive technical website audit & Core Web Vitals review',
    'Local SEO targeting Chomu, Jaipur, and regional commercial hubs',
    'Commercial keyword research & search volume opportunity mapping',
    'On-page title tags, meta descriptions, and semantic H1/H2 structuring',
    'Schema.org structured data (LocalBusiness & ProfessionalService JSON-LD)',
    'XML sitemap and robots.txt file configuration',
    'Google Search Console setup & crawl index monitoring',
    'Google Business Profile optimization guidance & category alignment',
  ];

  const processSteps = [
    { step: '01', title: 'Technical Audit', desc: 'Analyzing crawlability, mobile speed, schema markup, and index status across your web pages.' },
    { step: '02', title: 'Keyword Mapping', desc: 'Isolating high-relevance search terms across Jaipur and Chomu for each specific service page.' },
    { step: '03', title: 'On-Page Implementation', desc: 'Refining headings, internal anchor links, meta tags, and structured data with clean code.' },
    { step: '04', title: 'Search Console Monitoring', desc: 'Tracking organic impressions, clicks, and average query positions over time in Search Console.' },
  ];

  const faqs = [
    {
      q: 'How long does SEO take to produce measurable results?',
      a: 'Unlike paid ads which deliver immediate visibility, organic SEO typically requires 3 to 6 months of consistent technical health, indexing, and on-page improvements. We provide transparent monthly Search Console progress reports so you see impressions grow.',
    },
    {
      q: 'What is Local SEO and why does it matter for Chomu and Jaipur businesses?',
      a: 'Local SEO optimizes your digital presence for geographically constrained queries (such as "services near me" or "in Chomu / Jaipur"). It helps your business appear prominently on Google Maps and regional search results when local customers are ready to buy.',
    },
    {
      q: 'Do you guarantee #1 ranking on Google?',
      a: 'No ethical digital marketing agency can guarantee a #1 ranking, as Google’s search algorithms evaluate hundreds of dynamic factors. What we guarantee is rigorous adherence to Google Search Essentials, clean semantic code, and technical excellence.',
    },
    {
      q: 'Will my website need major code changes for SEO?',
      a: 'Most SEO improvements involve clean title tags, header hierarchies, faster loading assets, mobile responsiveness, and adding Schema.org JSON-LD structured data—all of which enhance user experience as well as search indexing.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="py-14 md:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.16em] text-[#164B8C] uppercase">
            <span>SEARCH ENGINE OPTIMIZATION (SEO)</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 font-normal">Jaipur, Chomu & Across India</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight">
            Build Sustainable Organic Search Visibility on Google
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Technical SEO, localized search architecture, and on-page optimization designed to help relevant customers discover your business organically.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/917014797458?text=Hello%20Hazel%20Digital!%20I%20would%20like%20to%20discuss%20SEO%20Services%20for%20my%20website."
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
              Request Free SEO Audit
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
              Organic Search Foundations
            </span>
            <h2 className="text-2xl font-bold text-[#0B1F3A]">
              Why Technical Quality & Local Relevance Matter
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Whether you are searching for a trusted <strong>digital marketing company in Chomu</strong> or looking to engage an experienced <strong>digital marketing agency in Jaipur</strong>, modern search engines prioritize sites that provide clear semantic answers, rapid loading times, and verifiable regional authority. We implement search strategies aligned with Google Search Central guidelines.
            </p>
          </div>

          {/* Regional SEO Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#164B8C] uppercase">
                <MapPin className="w-4 h-4" />
                <span>Local SEO Services in Chomu & Jaipur</span>
              </div>
              <h3 className="text-base font-bold text-[#0B1F3A]">
                Hyper-Local Search Optimization
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                For retail showrooms, clinics, and regional service providers in Chomu and Jaipur, capturing nearby searches is the most direct path to calls and walk-in inquiries. We align your Google Business Profile with structured schema data.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#164B8C] uppercase">
                <Globe className="w-4 h-4" />
                <span>SEO Services in India</span>
              </div>
              <h3 className="text-base font-bold text-[#0B1F3A]">
                National Reach for Expanding Brands
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If your business ships products or provides consulting throughout India, we build scalable category taxonomies, programmatic sitemaps, and content clusters that rank for broad commercial search queries.
              </p>
            </div>
          </div>

          {/* Problems Solved */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#0B1F3A]">Search Roadblocks We Address</h3>
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
                Full Deliverables List
              </span>
              <h3 className="text-xl font-bold text-[#0B1F3A] mt-1">
                What Our SEO Services Include
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
            <h3 className="text-xl font-bold text-[#0B1F3A]">Our SEO Workflow</h3>
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
              <span className="font-bold text-slate-800 block text-sm">Sustainable Rankings vs Quick Tricks</span>
              <p>
                Search algorithms reward websites that offer authentic utility to visitors. We focus on ethical, white-hat optimizations that withstand algorithm updates and protect your brand's digital presence for years to come.
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
                onClick={() => onNavigate('google-ads')}
                className="p-4 text-left border border-slate-200 rounded-xl hover:border-[#164B8C] transition-colors flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[#0B1F3A]">Google Ads Management</div>
                  <div className="text-[11px] text-slate-500">Pair organic search with immediate top-of-page paid ads</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => onNavigate('graphic-design')}
                className="p-4 text-left border border-slate-200 rounded-xl hover:border-[#164B8C] transition-colors flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[#0B1F3A]">Graphic Design Services</div>
                  <div className="text-[11px] text-slate-500">Create compelling visual assets that keep visitors on your site</div>
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
