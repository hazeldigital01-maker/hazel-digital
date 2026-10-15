import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight, HelpCircle } from 'lucide-react';
import { PageRoute } from '../types';
import { HazelLogo } from './HazelLogo';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenDeploymentGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDeploymentGuide }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1F3A] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Bio (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-3.5 rounded-xl inline-block shadow-sm">
              <HazelLogo size="md" showSubtitle={true} />
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              Hazel Digital is a strategic digital marketing agency. We help ambitious businesses strengthen online visibility, acquire relevant audiences, and drive high-intent commercial inquiries.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Service Areas: Chomu, Jaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="mailto:hazeldigital01@gmail.com" className="hover:text-white transition-colors underline decoration-slate-600">
                  hazeldigital01@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+917014797458" className="hover:text-white transition-colors underline decoration-slate-600">
                  +91 7014797458
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Digital Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Marketing Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => handleNav('meta-ads')}
                  className="hover:text-white transition-colors text-left"
                >
                  Meta Ads Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('google-ads')}
                  className="hover:text-white transition-colors text-left"
                >
                  Google Ads Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('seo')}
                  className="hover:text-white transition-colors text-left"
                >
                  SEO Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('graphic-design')}
                  className="hover:text-white transition-colors text-left"
                >
                  Graphic Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="text-[#D4AF37] hover:underline transition-colors text-left font-medium pt-1 block"
                >
                  All Capabilities →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Agency & Work
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('portfolio')}
                  className="hover:text-white transition-colors text-left"
                >
                  Portfolio & Samples
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDeploymentGuide}
                  className="text-emerald-400 hover:text-emerald-300 transition-colors text-left flex items-center gap-1 font-medium pt-1"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Domain & Hosting Guide</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Inquiries & WhatsApp */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Fast WhatsApp Inquiries
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Need immediate answers regarding campaign setup, budgeting, or local visibility?
            </p>
            <a
              href="https://wa.me/917014797458?text=Hello%20Hazel%20Digital!%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors w-full justify-center"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-4">
          <p>© {currentYear} Hazel Digital. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('privacy-policy')}
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-slate-200 transition-colors"
            >
              Terms & Conditions
            </button>
            <span className="text-slate-700">·</span>
            <span className="text-slate-300">Chomu & Jaipur, Rajasthan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
