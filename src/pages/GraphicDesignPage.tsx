import React, { useState } from 'react';
import { Palette, CheckCircle2, ChevronDown, ArrowRight, MessageSquare, AlertCircle, Layers, Image as ImageIcon } from 'lucide-react';
import { PageRoute } from '../types';

interface GraphicDesignPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const GraphicDesignPage: React.FC<GraphicDesignPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const problemsSolved = [
    {
      title: 'Inconsistent Visual Identity Across Platforms',
      detail: 'Using random color schemes, mixed fonts, and mismatched imagery dilutes brand credibility. We establish a clean, cohesive visual system.',
    },
    {
      title: 'Scroll-Past Ad Creatives with Low Click Rates',
      detail: 'Cluttered or low-contrast ads fail to capture user attention in mobile feeds. We design high-impact visuals with clear focal hierarchy.',
    },
    {
      title: 'Lack of Coordinated Campaign Assets',
      detail: 'When launching a promotion, you need matching formats for Instagram feeds (1:1), stories (9:16), banners (16:9), and WhatsApp catalog items.',
    },
    {
      title: 'Slow Asset Turnaround for Urgent Promotions',
      detail: 'We provide structured template systems and responsive workflows so seasonal promotions and new product announcements launch on time.',
    },
  ];

  const deliverables = [
    'Social media creative posts & story templates (Instagram & Facebook)',
    'High-converting digital advertising banners for paid campaigns',
    'Promotional graphics for festivals, discounts & seasonal offers',
    'Brand identity essentials (color systems, typography pairings & logo usage)',
    'WhatsApp Business catalog covers & product showcase graphics',
    'Website banners, hero visuals & service infographic layouts',
    'Print-ready flyers, business stationery & banner collateral',
    'Production exports optimized for mobile screens (JPG, PNG, WebP)',
  ];

  const processSteps = [
    { step: '01', title: 'Brand Discovery', desc: 'Understanding your company colors, target demographics, and preferred aesthetic style.' },
    { step: '02', title: 'Creative Concepts', desc: 'Developing initial layout options with high-contrast typography and clear callouts.' },
    { step: '03', title: 'Review & Refinement', desc: 'Gathering feedback and fine-tuning details, contrast, and messaging hierarchy.' },
    { step: '04', title: 'Multi-Format Export', desc: 'Delivering full asset packages ready for immediate posting across all social and ad channels.' },
  ];

  const faqs = [
    {
      q: 'What formats and resolutions do you deliver?',
      a: 'We deliver ultra-crisp web and mobile assets formatted specifically for Instagram (1080x1080 square and 1080x1920 vertical stories), Facebook feeds, and high-resolution banner dimensions.',
    },
    {
      q: 'Can you design visuals that match our existing logo and colors?',
      a: 'Yes, absolutely. We ensure all new graphic materials harmonize with your established brand colors, typography, and existing logo design.',
    },
    {
      q: 'Do you provide graphic design packages for monthly social media?',
      a: 'Yes, we offer ongoing monthly design packages to keep your business active and visually engaging on social media without requiring a full-time in-house designer.',
    },
    {
      q: 'Are your designs created specifically for advertising campaigns?',
      a: 'Yes. Our designs are built by digital marketers with conversion intent—ensuring high text legibility, clear value propositions, and prominent calls to action.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="py-14 md:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.16em] text-[#164B8C] uppercase">
            <span>GRAPHIC DESIGN SERVICES</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 font-normal">Social Media & Campaign Creatives</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight">
            Graphic Design That Builds Brand Trust & Stops the Scroll
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Build a consistent, professional brand presence with engaging visual content for social media, advertising campaigns, and digital marketing.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/917014797458?text=Hello%20Hazel%20Digital!%20I%20would%20like%20to%20discuss%20Graphic%20Design%20services%20for%20my%20business."
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
              Request Design Samples
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
              Visual Authority
            </span>
            <h2 className="text-2xl font-bold text-[#0B1F3A]">
              Why Professional Visuals Drive Higher Conversion
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In modern feeds, your visual creative is the first impression a prospect has of your business. Premium design signals reliability, craftsmanship, and trustworthiness before a single line of copy is read. At Hazel Digital, we combine aesthetic restraint with conversion-oriented layouts.
            </p>
          </div>

          {/* Problems Solved */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#0B1F3A]">Design Challenges We Solve</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problemsSolved.map((item, idx) => (
                <div key={idx} className="p-5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1.5">
                  <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="bg-[#EAF3FF] p-8 rounded-2xl border border-blue-100 space-y-5">
            <div>
              <span className="text-xs font-bold text-[#164B8C] uppercase tracking-wider">
                Comprehensive Design Suite
              </span>
              <h3 className="text-xl font-bold text-[#0B1F3A] mt-1">
                What Our Graphic Design Service Covers
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
            <h3 className="text-xl font-bold text-[#0B1F3A]">Our Creative Workflow</h3>
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

          {/* Realistic Expectations */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#164B8C] shrink-0 mt-0.5" />
            <div className="text-xs text-slate-600 leading-relaxed space-y-1">
              <span className="font-bold text-slate-800 block text-sm">Visual Consistency Matters Most</span>
              <p>
                A single great graphic does not build an iconic brand. Sustained visual consistency—using aligned colors, clean typography, and recognizable branding across weeks of campaigns—is what turns casual scrollers into familiar, paying clients.
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
                onClick={() => onNavigate('meta-ads')}
                className="p-4 text-left border border-slate-200 rounded-xl hover:border-[#164B8C] transition-colors flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[#0B1F3A]">Meta Ads Management</div>
                  <div className="text-[11px] text-slate-500">Deploy high-performing ad creatives directly to Facebook & Instagram</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => onNavigate('portfolio')}
                className="p-4 text-left border border-slate-200 rounded-xl hover:border-[#164B8C] transition-colors flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[#0B1F3A]">View Portfolio & Sample Work</div>
                  <div className="text-[11px] text-slate-500">Explore creative demonstration layouts and concept campaigns</div>
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
