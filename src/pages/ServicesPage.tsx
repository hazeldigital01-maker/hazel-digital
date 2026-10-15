import React from 'react';
import { Target, Search, TrendingUp, Palette, ArrowRight, Check, MessageSquare } from 'lucide-react';
import { PageRoute } from '../types';

interface ServicesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const services = [
    {
      id: 'meta-ads',
      title: 'Meta Ads Management',
      route: 'meta-ads' as PageRoute,
      subtitle: 'Facebook & Instagram Paid Advertising',
      description: 'Reach potential customers on Facebook and Instagram with strategically planned advertising campaigns designed around your business objectives.',
      icon: <Target className="w-6 h-6 text-[#164B8C]" />,
      deliverables: [
        'Campaign Planning & Strategy',
        'Audience Research & Geographic Radius',
        'High-Converting Ad Creative Strategy',
        'Direct WhatsApp Click-to-Chat Campaigns',
        'Retargeting & Lookalike Segments',
        'Weekly Performance Reviews',
      ],
      idealFor: 'Businesses looking for immediate lead generation, product visibility, and customer messaging.',
    },
    {
      id: 'google-ads',
      title: 'Google Ads Management',
      route: 'google-ads' as PageRoute,
      subtitle: 'Intent-Driven Search Engine Advertising',
      description: 'Connect with potential customers when they search for relevant products and services through well-structured Google Ads campaigns.',
      icon: <Search className="w-6 h-6 text-[#164B8C]" />,
      deliverables: [
        'Search & Local Service Campaigns',
        'Commercial Keyword Research',
        'Search Intent Analysis & Negative Keywords',
        'Responsive Search Ad Copywriting',
        'Conversion & Call Tracking Setup',
        'Cost-Per-Click (CPC) Optimization',
      ],
      idealFor: 'Companies offering services or products that customers actively search for on Google.',
    },
    {
      id: 'seo',
      title: 'SEO Services',
      route: 'seo' as PageRoute,
      subtitle: 'Search Engine Optimization & Local Discovery',
      description: 'Improve your website’s search visibility and help customers discover your business through relevant, search-focused optimization.',
      icon: <TrendingUp className="w-6 h-6 text-[#164B8C]" />,
      deliverables: [
        'Comprehensive Technical SEO Audits',
        'Local SEO for Chomu & Jaipur Regions',
        'Targeted Keyword Mapping & Content Strategy',
        'On-Page Metadata & Header Structuring',
        'Google Business Profile Integration',
        'Schema.org Structured Data Implementation',
      ],
      idealFor: 'Businesses aiming to build long-term organic traffic and local Google Maps authority.',
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      route: 'graphic-design' as PageRoute,
      subtitle: 'Brand Identity & Campaign Visuals',
      description: 'Build a consistent and professional brand presence with engaging visual content for social media, advertising, and digital marketing.',
      icon: <Palette className="w-6 h-6 text-[#164B8C]" />,
      deliverables: [
        'High-Contrast Social Media Creatives',
        'Advertising Banners & Promotional Graphics',
        'Brand Identity Guidelines & Typography',
        'WhatsApp Catalog & Product Showcase Visuals',
        'Flyers, Posters & Digital Marketing Collateral',
        'Campaign Multi-Format Asset Packs',
      ],
      idealFor: 'Brands needing polished, professional visual presentation to stand out on social media.',
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-14 md:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.16em] text-[#164B8C] uppercase">
            <span>CORE SERVICES OVERVIEW</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 font-normal">Hazel Digital</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight">
            Our Digital Marketing Services
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Practical digital solutions to help your business get discovered, attract relevant audiences, and grow online with measurable efficiency.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="p-8 sm:p-10 rounded-2xl border border-slate-200/90 bg-white shadow-xs hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Info */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF3FF] flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#164B8C] uppercase tracking-wider">
                      {service.subtitle}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A]">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                    Ideal Application:
                  </span>
                  <p className="text-xs text-slate-700">{service.idealFor}</p>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => onNavigate(service.route)}
                    className="flex items-center gap-2 py-2.5 px-4 bg-[#164B8C] hover:bg-[#0B1F3A] text-white text-xs font-semibold rounded-lg transition-colors"
                  >
                    <span>View Dedicated {service.title} Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/917014797458?text=Hello%20Hazel%20Digital!%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                      service.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-medium rounded-lg border border-emerald-200 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Deliverables Matrix */}
              <div className="lg:col-span-5 bg-slate-50/70 p-6 rounded-xl border border-slate-200/80">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-3.5">
                  Core Deliverables
                </span>
                <ul className="space-y-2.5">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-Service Integration CTA */}
      <section className="py-16 bg-[#EAF3FF] border-b border-blue-100 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">
            Need a Multi-Channel Marketing Plan?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Many businesses achieve the best return by pairing search ads with social retargeting and high-impact graphic design. We can help you build an integrated package.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenConsultation}
              className="py-3 px-6 bg-[#164B8C] hover:bg-[#0B1F3A] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
            >
              Get a Multi-Service Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
