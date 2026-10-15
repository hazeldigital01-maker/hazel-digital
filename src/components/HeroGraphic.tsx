import React, { useState } from 'react';
import { Target, Search, TrendingUp, Palette, Layers, Check, ArrowRight } from 'lucide-react';

export const HeroGraphic: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<'meta' | 'google' | 'seo' | 'design'>('meta');

  const channelData = {
    meta: {
      title: 'Meta Advertising Strategy',
      subtitle: 'Targeted reach across Facebook & Instagram feeds, stories & reels',
      badge: 'Audience & Creative Optimization',
      stages: [
        { label: 'Audience Mapping', detail: 'Demographic, interest & geo-targeting' },
        { label: 'Creative Testing', detail: 'Reels, carousels & lead generation formats' },
        { label: 'Conversion Tracking', detail: 'Pixel events & custom standard actions' },
      ],
      diagram: (
        <div className="space-y-3">
          <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-800 mb-2">
              <span>Audience Precision Layer</span>
              <span className="text-[#164B8C] font-mono">Geo: Jaipur & Region</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[11px] text-center">
              <div className="p-2 bg-[#EAF3FF] text-[#164B8C] font-medium rounded-lg">High Intent</div>
              <div className="p-2 bg-slate-50 text-slate-700 font-medium rounded-lg">Local In-Market</div>
              <div className="p-2 bg-slate-50 text-slate-700 font-medium rounded-lg">Custom Retargeting</div>
            </div>
          </div>
          <div className="p-3 bg-slate-900 text-white rounded-xl text-xs space-y-1.5">
            <div className="flex justify-between items-center text-slate-400 text-[11px]">
              <span>Ad Creative Format</span>
              <span className="text-emerald-400 font-mono">Structured Testing</span>
            </div>
            <p className="text-slate-200 text-xs font-medium">Video Reels + Carousel Catalog + WhatsApp Click-to-Chat</p>
          </div>
        </div>
      ),
    },
    google: {
      title: 'Google Search Ads Architecture',
      subtitle: 'Capturing active commercial intent at the exact moment of search',
      badge: 'Intent-Driven Keyword Structure',
      stages: [
        { label: 'Intent Keyword Tiers', detail: 'High-intent search terms & negative exclusions' },
        { label: 'Ad Relevance & Copy', detail: 'Responsive search ads focused on local value' },
        { label: 'Conversion Flow', detail: 'Direct call tracking & lead form conversion' },
      ],
      diagram: (
        <div className="space-y-3">
          <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="text-xs font-semibold text-slate-800 mb-2 flex items-center justify-between">
              <span>Search Query Pipeline</span>
              <span className="text-emerald-600 font-mono text-[11px]">High Quality Score</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-between">
                <span className="text-slate-700 font-medium">Commercial Search Query</span>
                <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600">Exact Match</span>
              </div>
              <div className="p-2 bg-[#EAF3FF] rounded-lg text-[#164B8C] font-medium flex items-center justify-between">
                <span>Tailored Responsive Ad Copy</span>
                <span className="text-[10px] font-mono">Location Assets</span>
              </div>
            </div>
          </div>
          <div className="p-3 bg-slate-900 text-white rounded-xl text-xs flex items-center justify-between">
            <span className="text-slate-300">Action Outcome:</span>
            <span className="text-amber-300 font-semibold">Direct Phone Call / WhatsApp Inquiry</span>
          </div>
        </div>
      ),
    },
    seo: {
      title: 'Organic Search & Local Visibility',
      subtitle: 'Sustainable ranking foundation for regional search queries',
      badge: 'Technical & Local SEO',
      stages: [
        { label: 'Search Architecture', detail: 'Crawlability, schema metadata & speed' },
        { label: 'Local Search Placement', detail: 'Google Business Profile & regional signals' },
        { label: 'Content Relevance', detail: 'Keyword structure tailored to Jaipur & Chomu' },
      ],
      diagram: (
        <div className="space-y-3">
          <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="text-xs font-semibold text-slate-800 mb-2 flex items-center justify-between">
              <span>Search Index Coverage</span>
              <span className="text-blue-600 font-mono text-[11px]">Semantic Hierarchy</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                <span className="block font-semibold text-slate-800">Local Authority</span>
                <span className="text-slate-500">Chomu & Jaipur focus</span>
              </div>
              <div className="p-2.5 bg-[#EAF3FF] rounded-lg border border-blue-100">
                <span className="block font-semibold text-[#164B8C]">Schema.org</span>
                <span className="text-slate-600">Structured business data</span>
              </div>
            </div>
          </div>
          <div className="p-3 bg-slate-900 text-white rounded-xl text-xs space-y-1">
            <div className="text-slate-400 text-[11px]">Long-Term Asset Value</div>
            <p className="text-slate-200 text-xs">Consistent non-paid discovery across relevant search categories.</p>
          </div>
        </div>
      ),
    },
    design: {
      title: 'Graphic Design & Brand Assets',
      subtitle: 'Visual identity and high-impact creatives designed to halt the scroll',
      badge: 'Conversion-Focused Visuals',
      stages: [
        { label: 'Brand Consistency', detail: 'Unified palettes, typography & visual cues' },
        { label: 'Ad Creatives', detail: 'High-contrast visual messaging for paid campaigns' },
        { label: 'Social Media Assets', detail: 'Engaging banners, story templates & promotional art' },
      ],
      diagram: (
        <div className="space-y-3">
          <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="text-xs font-semibold text-slate-800 mb-2 flex items-center justify-between">
              <span>Visual Communication System</span>
              <span className="text-[#D4AF37] font-bold text-[11px]">High Contrast</span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 p-2 bg-gradient-to-br from-[#164B8C] to-[#0B1F3A] text-white rounded-lg text-center">
                <span className="text-[10px] block opacity-80">Primary Brand</span>
                <span className="text-xs font-bold">Deep Navy</span>
              </div>
              <div className="flex-1 p-2 bg-[#EAF3FF] text-[#164B8C] rounded-lg text-center border border-blue-100">
                <span className="text-[10px] block opacity-80">Canvas</span>
                <span className="text-xs font-bold">Clean White</span>
              </div>
              <div className="flex-1 p-2 bg-gradient-to-br from-[#D4AF37] to-[#B38622] text-white rounded-lg text-center">
                <span className="text-[10px] block opacity-80">Accent</span>
                <span className="text-xs font-bold">Gold Touch</span>
              </div>
            </div>
          </div>
          <div className="p-3 bg-slate-900 text-white rounded-xl text-xs">
            <p className="text-slate-300">Clean typography, clear CTA placement, and purposeful visual hierarchy.</p>
          </div>
        </div>
      ),
    },
  };

  const current = channelData[activeChannel];

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/80 p-5 sm:p-6 shadow-sm overflow-hidden">
      {/* Top Bar with Channel Switchers */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#164B8C]" />
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Campaign Strategy Matrix
          </span>
        </div>
        <span className="text-[11px] text-slate-500 font-medium">
          Interactive Architecture
        </span>
      </div>

      {/* Interactive Tabs */}
      <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100/80 rounded-xl my-4">
        <button
          onClick={() => setActiveChannel('meta')}
          className={`py-2 px-2 text-xs font-semibold rounded-lg transition-all text-center flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
            activeChannel === 'meta'
              ? 'bg-white text-[#164B8C] shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Target className="w-3.5 h-3.5" />
          <span className="whitespace-nowrap">Meta Ads</span>
        </button>

        <button
          onClick={() => setActiveChannel('google')}
          className={`py-2 px-2 text-xs font-semibold rounded-lg transition-all text-center flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
            activeChannel === 'google'
              ? 'bg-white text-[#164B8C] shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Search className="w-3.5 h-3.5" />
          <span className="whitespace-nowrap">Google Ads</span>
        </button>

        <button
          onClick={() => setActiveChannel('seo')}
          className={`py-2 px-2 text-xs font-semibold rounded-lg transition-all text-center flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
            activeChannel === 'seo'
              ? 'bg-white text-[#164B8C] shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5" />
          <span className="whitespace-nowrap">SEO</span>
        </button>

        <button
          onClick={() => setActiveChannel('design')}
          className={`py-2 px-2 text-xs font-semibold rounded-lg transition-all text-center flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
            activeChannel === 'design'
              ? 'bg-white text-[#164B8C] shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span className="whitespace-nowrap">Design</span>
        </button>
      </div>

      {/* Main Channel Visual Box */}
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-[#164B8C]">{current.badge}</span>
            <span className="text-slate-300">·</span>
            <span className="text-[11px] text-slate-500">Hazel Digital Framework</span>
          </div>
          <h3 className="text-base font-bold text-[#0B1F3A]">{current.title}</h3>
          <p className="text-xs text-slate-600 mt-0.5">{current.subtitle}</p>
        </div>

        {/* Visual Preview */}
        {current.diagram}

        {/* 3 Process Pillars for the active channel */}
        <div className="space-y-2 pt-1 border-t border-slate-100">
          {current.stages.map((stage, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs">
              <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mt-0.5 shrink-0 font-bold text-[10px]">
                <Check className="w-2.5 h-2.5" />
              </div>
              <div>
                <span className="font-semibold text-slate-800 mr-1.5">{stage.label}:</span>
                <span className="text-slate-500">{stage.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footnote on methodology */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span>Channel Execution Model</span>
        <span className="text-slate-600 font-medium">Strategic Alignment</span>
      </div>
    </div>
  );
};
