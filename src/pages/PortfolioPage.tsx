import React, { useState } from 'react';
import { portfolioItems } from '../data/portfolioData';
import { PortfolioItem, PageRoute } from '../types';
import { PortfolioVisual } from '../components/PortfolioVisual';
import { ArrowRight, MessageSquare, Check, X, ExternalLink, Info } from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Meta Ads' | 'Google Ads' | 'SEO' | 'Graphic Design'>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter((i) => i.category === activeCategory);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-14 md:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.16em] text-[#164B8C] uppercase">
            <span>PORTFOLIO & WORK SAMPLES</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 font-normal">Hazel Digital</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight">
            Creative Work and Digital Marketing Projects
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Explore sample creative concepts, demonstration advertising structures, and illustrative search architecture blueprints.
          </p>

          {/* Honest Concept Disclaimer Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-800 text-xs rounded-xl border border-amber-200/80 text-left max-w-xl">
            <Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Transparency Note:</strong> All items displayed below represent concept demonstration architectures and sample creative works created by Hazel Digital. No fabricated client testimonials or unverified revenue metrics are claimed.
            </span>
          </div>
        </div>
      </section>

      {/* Main Portfolio Grid */}
      <section className="py-14 md:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Controls */}
          <div className="flex items-center justify-center mb-10">
            <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-100 rounded-xl">
              {(['All', 'Meta Ads', 'Google Ads', 'SEO', 'Graphic Design'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-white text-[#164B8C] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <PortfolioVisual type={item.visualType} title={item.title} />

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#164B8C]">{item.category}</span>
                      <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0B1F3A] group-hover:text-[#164B8C] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                        Included Deliverables:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {item.deliverables.slice(0, 3).map((d, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-3.5 h-3.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5" />
                            </span>
                            <span className="line-clamp-1">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex gap-2">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="flex-1 py-2 px-3 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg transition-colors text-center"
                  >
                    View Concept Details
                  </button>

                  <a
                    href={`https://wa.me/917014797458?text=Hello%20Hazel%20Digital!%20I%20would%20like%20to%20discuss%20a%20project%20similar%20to%20${encodeURIComponent(
                      item.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#EAF3FF] hover:bg-blue-100 text-[#164B8C] rounded-lg transition-colors flex items-center justify-center"
                    title="Discuss on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-[#EAF3FF] border border-blue-100 text-center space-y-4">
            <h3 className="text-xl font-bold text-[#0B1F3A]">
              Have a Specific Marketing Project in Mind?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              We can formulate a custom campaign blueprint, targeting strategy, and creative visual suite tailored specifically to your business niche.
            </p>
            <div className="pt-2 flex justify-center">
              <button
                onClick={onOpenConsultation}
                className="py-3 px-6 bg-[#164B8C] hover:bg-[#0B1F3A] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
              >
                Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-1.5 text-slate-400 hover:text-slate-700 bg-white/80 rounded-full shadow-xs"
            >
              <X className="w-5 h-5" />
            </button>

            <PortfolioVisual type={selectedItem.visualType} title={selectedItem.title} />

            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-[#164B8C]">{selectedItem.category}</span>
                <span>·</span>
                <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 text-[11px] font-semibold">
                  {selectedItem.tag}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#0B1F3A]">{selectedItem.title}</h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600">
                <span className="font-bold text-slate-800 block mb-1">Architecture Rationale:</span>
                {selectedItem.metricsContext}
              </div>

              <div>
                <span className="text-xs font-bold text-slate-800 block mb-2">Scope & Deliverables:</span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {selectedItem.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex gap-3">
                <a
                  href={`https://wa.me/917014797458?text=Hello%20Hazel%20Digital!%20I%20would%20like%20to%20discuss%20a%20project%20similar%20to%20${encodeURIComponent(
                    selectedItem.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discuss This on WhatsApp</span>
                </a>

                <button
                  onClick={() => setSelectedItem(null)}
                  className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
