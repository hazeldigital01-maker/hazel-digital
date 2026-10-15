import React, { useState } from 'react';
import {
  MessageSquare,
  ArrowRight,
  Target,
  Search,
  TrendingUp,
  Palette,
  CheckCircle2,
  Compass,
  BarChart2,
  MessageCircle,
  Users,
  Sparkles,
  ShieldCheck,
  Phone,
  Layers,
} from 'lucide-react';
import { PageRoute } from '../types';
import { HeroGraphic } from '../components/HeroGraphic';
import { ServiceCard } from '../components/ServiceCard';
import { portfolioItems } from '../data/portfolioData';
import { PortfolioVisual } from '../components/PortfolioVisual';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [portfolioFilter, setPortfolioFilter] = useState<'All' | 'Meta Ads' | 'Google Ads' | 'SEO' | 'Graphic Design'>('All');

  const filteredPortfolio = portfolioFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === portfolioFilter);

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-slate-100 bg-gradient-to-b from-white via-[#F8FAFC] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Introductory Label (No static pill, clean text) */}
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-[#164B8C] uppercase">
                <span>DIGITAL MARKETING AGENCY</span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-500 font-medium normal-case tracking-normal">Chomu & Jaipur, Rajasthan</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1F3A] leading-[1.15]" style={{ textWrap: 'balance' }}>
                Grow Your Business with Smarter Digital Marketing
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Helping businesses improve online visibility, reach the right audience, generate quality inquiries, and build a stronger digital presence with data-driven marketing strategies.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="https://wa.me/917014797458?text=Hello%20Hazel%20Digital!%20I%20would%20like%20to%20discuss%20growing%20my%20business%20with%20digital%20marketing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 px-6 bg-[#164B8C] hover:bg-[#0B1F3A] text-white font-semibold text-sm rounded-xl shadow-sm hover:shadow transition-all group"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  onClick={() => onNavigate('services')}
                  className="flex items-center justify-center gap-2 py-3.5 px-6 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm rounded-xl border border-slate-200 transition-all hover:border-slate-300"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Compact Supporting Line */}
              <div className="pt-3 border-t border-slate-200/80">
                <p className="text-xs font-semibold text-slate-500 tracking-wide">
                  SEO <span className="text-[#D4AF37] mx-1.5">|</span> Google Ads <span className="text-[#D4AF37] mx-1.5">|</span> Meta Ads <span className="text-[#D4AF37] mx-1.5">|</span> Graphic Design
                </p>
              </div>
            </div>

            {/* Right Column: High-Fidelity Strategy Command Visual */}
            <div className="lg:col-span-5">
              <HeroGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="text-xs font-bold text-[#164B8C] tracking-wider uppercase">
            Strategic Growth Philosophy
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] tracking-tight">
            Digital Marketing That Works Towards Your Business Goals
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            At Hazel Digital, we help businesses strengthen their online presence through strategic digital marketing. From search engine optimization to paid advertising and creative design, our approach focuses on understanding your goals and building solutions around your business needs.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#EAF3FF] hover:bg-[#d8e9ff] text-[#164B8C] font-semibold text-xs rounded-lg transition-colors"
            >
              <span>Learn About Hazel Digital</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-100" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="text-xs font-bold text-[#164B8C] tracking-wider uppercase">
              Core Expertise
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
              Our Digital Marketing Services
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Practical digital solutions to help your business get discovered, attract relevant audiences, and grow online.
            </p>
          </div>

          {/* Four Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Meta Ads Management"
              description="Reach potential customers on Facebook and Instagram with strategically planned advertising campaigns designed around your business objectives."
              items={[
                'Campaign Planning',
                'Audience Research',
                'Lead Generation',
                'Ad Creative Strategy',
                'Campaign Optimization',
                'Performance Analysis',
              ]}
              buttonText="Explore Meta Ads"
              route="meta-ads"
              icon={<Target className="w-6 h-6" />}
              onNavigate={onNavigate}
            />

            <ServiceCard
              title="Google Ads Management"
              description="Connect with potential customers when they search for relevant products and services through well-structured Google Ads campaigns."
              items={[
                'Search Campaigns',
                'Keyword Research',
                'Search Intent Analysis',
                'Campaign Setup',
                'Conversion Tracking',
                'Performance Optimization',
              ]}
              buttonText="Explore Google Ads"
              route="google-ads"
              icon={<Search className="w-6 h-6" />}
              onNavigate={onNavigate}
            />

            <ServiceCard
              title="SEO Services"
              description="Improve your website's search visibility and help customers discover your business through relevant, search-focused optimization."
              items={[
                'Technical SEO',
                'Keyword Research',
                'On-Page SEO',
                'Local SEO',
                'Content Optimization',
                'Search Performance Analysis',
              ]}
              buttonText="Explore SEO Services"
              route="seo"
              icon={<TrendingUp className="w-6 h-6" />}
              onNavigate={onNavigate}
            />

            <ServiceCard
              title="Graphic Design"
              description="Build a consistent and professional brand presence with engaging visual content for social media, advertising, and digital marketing."
              items={[
                'Social Media Creatives',
                'Ad Creatives',
                'Promotional Banners',
                'Brand Identity',
                'Marketing Graphics',
                'Campaign Visuals',
              ]}
              buttonText="Explore Graphic Design"
              route="graphic-design"
              icon={<Palette className="w-6 h-6" />}
              onNavigate={onNavigate}
            />
          </div>
        </div>
      </section>

      {/* 4. Why Choose Hazel Digital? */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="text-xs font-bold text-[#164B8C] tracking-wider uppercase">
              Our Principles
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              Your Business Deserves a Thoughtful Digital Strategy
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We prioritize sustainable foundations, realistic campaign planning, and clear collaboration over inflated promises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/40 hover:bg-white hover:border-[#164B8C]/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#EAF3FF] text-[#164B8C] flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0B1F3A]">Customized Marketing Strategies</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Every business model, geography, and target customer requires tailored campaign architecture rather than pre-packaged templates.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/40 hover:bg-white hover:border-[#164B8C]/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#EAF3FF] text-[#164B8C] flex items-center justify-center mb-4">
                <BarChart2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0B1F3A]">Data-Informed Decisions</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Campaign budget allocation, creative iterations, and keyword bidding adjustments are guided by observable conversion metrics.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/40 hover:bg-white hover:border-[#164B8C]/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#EAF3FF] text-[#164B8C] flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0B1F3A]">Clear Communication</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Direct accessibility via WhatsApp and scheduled reviews ensures you always understand what actions are taken and why.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/40 hover:bg-white hover:border-[#164B8C]/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#EAF3FF] text-[#164B8C] flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0B1F3A]">Audience-Focused Campaigns</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                We design ad copy and creative messaging focused on solving the exact pain points of your target prospects in Rajasthan and beyond.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/40 hover:bg-white hover:border-[#164B8C]/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#EAF3FF] text-[#164B8C] flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0B1F3A]">Continuous Improvement</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Digital marketing is an iterative process. We systematically test ad variations, negative keywords, and landing copy to improve efficiency.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/40 hover:bg-white hover:border-[#164B8C]/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#EAF3FF] text-[#164B8C] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0B1F3A]">Solutions Aligned With Business Goals</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Whether you need immediate local phone inquiries, long-term organic search authority, or brand awareness, strategies match your true priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How We Work */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="text-xs font-bold text-[#164B8C] tracking-wider uppercase">
              Working Process
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              How We Work
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              A transparent four-stage methodology to guide your campaigns from initial scoping to ongoing enhancement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200/80 relative">
              <span className="text-2xl font-extrabold text-[#164B8C] block mb-3 font-mono">01</span>
              <h3 className="text-base font-bold text-[#0B1F3A] mb-1.5">Understand</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learn about your business, audience, challenges, and goals through a comprehensive initial discovery discussion.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200/80 relative">
              <span className="text-2xl font-extrabold text-[#164B8C] block mb-3 font-mono">02</span>
              <h3 className="text-base font-bold text-[#0B1F3A] mb-1.5">Plan</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Develop a marketing strategy tailored to your needs, including channel selection, budgeting, and creative direction.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200/80 relative">
              <span className="text-2xl font-extrabold text-[#164B8C] block mb-3 font-mono">03</span>
              <h3 className="text-base font-bold text-[#0B1F3A] mb-1.5">Execute</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Implement campaigns, SEO activities, tracking pixels, and creative visual solutions according to the approved roadmap.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200/80 relative">
              <span className="text-2xl font-extrabold text-[#164B8C] block mb-3 font-mono">04</span>
              <h3 className="text-base font-bold text-[#0B1F3A] mb-1.5">Optimize</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Review available performance data and identify opportunities to improve audience response, clicks, and lead efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Portfolio Section */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-bold text-[#164B8C] tracking-wider uppercase mb-1">
                Portfolio Showcase
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
                Creative Work and Digital Marketing Projects
              </h2>
              <p className="text-xs text-slate-500 mt-1 max-w-xl">
                Demonstration campaign layouts, creative visual concepts, and technical SEO frameworks.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1 p-1 bg-slate-100 rounded-xl">
              {(['All', 'Meta Ads', 'Google Ads', 'SEO', 'Graphic Design'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setPortfolioFilter(filter)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    portfolioFilter === filter
                      ? 'bg-white text-[#164B8C] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <PortfolioVisual type={item.visualType} title={item.title} />

                  <div className="p-5 space-y-2.5">
                    {/* Honest Concept Label (Unboxed text with bullet) */}
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                      <span className="text-[#164B8C]">{item.category}</span>
                      <span>·</span>
                      <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/80">{item.tag}</span>
                    </div>

                    <h3 className="text-base font-bold text-[#0B1F3A] leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 text-[11px] text-slate-500 italic">
                      {item.metricsContext}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 mt-2">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full mt-3 py-2 text-xs font-semibold text-[#164B8C] bg-[#EAF3FF] hover:bg-[#d8e9ff] rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors"
            >
              <span>View All Portfolio Samples</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="py-16 md:py-20 bg-[#EAF3FF] border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-xs font-bold text-[#164B8C] tracking-wider uppercase">
            Start A Conversation
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Let's Build Your Digital Growth Strategy
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Tell us about your business and discover how the right digital marketing approach can support your next stage of growth.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/917014797458?text=Hello%20Hazel%20Digital!%20I%20would%20like%20to%20build%20a%20digital%20growth%20strategy."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 bg-[#164B8C] hover:bg-[#0B1F3A] text-white font-semibold text-sm rounded-xl shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Start a WhatsApp Conversation</span>
            </a>

            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm rounded-xl border border-slate-200 transition-colors"
            >
              <span>View Our Services</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
