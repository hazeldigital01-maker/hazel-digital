import React from 'react';
import { Target, Search, TrendingUp, Palette, Smartphone, Globe, ExternalLink } from 'lucide-react';

interface PortfolioVisualProps {
  type: 'meta' | 'google' | 'seo' | 'design';
  title: string;
}

export const PortfolioVisual: React.FC<PortfolioVisualProps> = ({ type, title }) => {
  if (type === 'meta') {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-[#164B8C] to-[#0B1F3A] p-4 flex flex-col justify-between text-white relative overflow-hidden select-none">
        <div className="flex items-center justify-between text-xs text-blue-200">
          <div className="flex items-center gap-1.5">
            <Smartphone className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-semibold uppercase tracking-wider text-[10px]">Meta Feed Ad Preview</span>
          </div>
          <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded backdrop-blur-xs font-mono">Sponsored</span>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center text-[10px] font-bold text-slate-900">
              HD
            </div>
            <div>
              <div className="text-[11px] font-bold leading-tight">Hazel Digital Client Campaign</div>
              <div className="text-[9px] text-blue-200">Jaipur & Rajasthan • WhatsApp Lead Objective</div>
            </div>
          </div>
          <div className="text-[11px] text-white/90 line-clamp-1 font-medium">
            "{title}"
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[10px]">
            <span className="text-emerald-300 font-medium">WhatsApp CTA Button</span>
            <span className="text-white/70">Send Message →</span>
          </div>
        </div>

        <div className="text-[10px] text-blue-200 flex items-center justify-between">
          <span>Targeting: Local In-Market</span>
          <span className="font-mono">Placement: IG & FB Feeds</span>
        </div>
      </div>
    );
  }

  if (type === 'google') {
    return (
      <div className="w-full h-48 bg-slate-50 border-b border-slate-200 p-4 flex flex-col justify-between text-slate-800 relative overflow-hidden select-none">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Search className="w-4 h-4 text-[#164B8C]" />
            <span className="font-semibold uppercase tracking-wider text-[10px]">Google Search Result Ad</span>
          </div>
          <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold px-1.5 py-0.5 rounded">
            Ad · Sponsored
          </span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs space-y-1">
          <div className="text-[10px] text-slate-500 flex items-center gap-1 font-mono">
            <span>https://example.com/services</span>
            <span>›</span>
            <span className="text-emerald-700">jaipur-chomu</span>
          </div>
          <div className="text-xs font-bold text-[#164B8C] line-clamp-1 hover:underline">
            {title} | Licensed & Local
          </div>
          <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
            Connect with verified professionals in Jaipur & Chomu. Fast response, direct WhatsApp inquiries & transparent pricing.
          </p>
          <div className="flex items-center gap-3 pt-1 text-[10px] text-[#164B8C] font-medium">
            <span>📞 Direct Call Extension</span>
            <span>📍 Chomu / Jaipur Assets</span>
          </div>
        </div>

        <div className="text-[10px] text-slate-500 flex items-center justify-between">
          <span>Match Type: Exact & Phrase</span>
          <span className="font-mono text-emerald-600">High Quality Score Structure</span>
        </div>
      </div>
    );
  }

  if (type === 'seo') {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-slate-900 to-[#0B1F3A] p-4 flex flex-col justify-between text-white relative overflow-hidden select-none">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold uppercase tracking-wider text-[10px]">Organic Search Architecture</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-mono">Index Optimization</span>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-slate-300 font-medium">Local Query Matching:</span>
            <span className="text-[#D4AF37] font-semibold">Chomu & Jaipur</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="p-1.5 bg-white/5 rounded border border-white/5">
              <span className="text-slate-400 block">Schema.org</span>
              <span className="font-semibold text-white">LocalBusiness JSON-LD</span>
            </div>
            <div className="p-1.5 bg-white/5 rounded border border-white/5">
              <span className="text-slate-400 block">Core Web Vitals</span>
              <span className="font-semibold text-emerald-400">95+ Target Speed</span>
            </div>
          </div>
        </div>

        <div className="text-[10px] text-slate-400 flex items-center justify-between">
          <span>Search Console Sitemap Integration</span>
          <span className="text-slate-300">Sustainable Organic Reach</span>
        </div>
      </div>
    );
  }

  // Graphic Design
  return (
    <div className="w-full h-48 bg-[#EAF3FF] border-b border-blue-100 p-4 flex flex-col justify-between text-slate-800 relative overflow-hidden select-none">
      <div className="flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <Palette className="w-4 h-4 text-[#164B8C]" />
          <span className="font-semibold uppercase tracking-wider text-[10px]">Creative Asset Composition</span>
        </div>
        <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-blue-200 text-[#164B8C] font-semibold">
          High Contrast
        </span>
      </div>

      <div className="bg-white rounded-xl p-3 border border-blue-200/60 shadow-2xs space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#0B1F3A]" />
          <div className="w-4 h-4 rounded bg-[#164B8C]" />
          <div className="w-4 h-4 rounded bg-[#D4AF37]" />
          <div className="w-4 h-4 rounded bg-slate-100 border border-slate-200" />
          <span className="text-[10px] text-slate-400 font-mono ml-auto">Brand Palette System</span>
        </div>
        <div className="text-xs font-bold text-[#0B1F3A] line-clamp-1">{title}</div>
        <div className="text-[10px] text-slate-500 flex items-center justify-between">
          <span>Formats: 1:1 Social, 9:16 Stories, 16:9 Banners</span>
        </div>
      </div>

      <div className="text-[10px] text-slate-500 flex items-center justify-between">
        <span>Typography: Bold Headline Hierarchy</span>
        <span className="text-[#164B8C] font-semibold">Zero Clutter</span>
      </div>
    </div>
  );
};
