import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { PageRoute } from '../types';
import { HazelLogo } from './HazelLogo';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenConsultation,
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceLinks: { name: string; route: PageRoute; desc: string }[] = [
    { name: 'Meta Ads Management', route: 'meta-ads', desc: 'Targeted Facebook & Instagram performance campaigns' },
    { name: 'Google Ads Management', route: 'google-ads', desc: 'High-intent search, keyword analysis & conversions' },
    { name: 'SEO Services', route: 'seo', desc: 'Technical, on-page & local search visibility in Jaipur & Chomu' },
    { name: 'Graphic Design', route: 'graphic-design', desc: 'High-impact social media creatives & brand marketing assets' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-2.5'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Original Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#164B8C] rounded-lg"
            aria-label="Hazel Digital Home"
          >
            <HazelLogo size="sm" showSubtitle={false} />
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#164B8C] ${
                currentRoute === 'home' ? 'text-[#164B8C] font-semibold' : ''
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#164B8C] ${
                currentRoute === 'about' ? 'text-[#164B8C] font-semibold' : ''
              }`}
            >
              About Us
            </button>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className={`flex items-center gap-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#164B8C] py-2 ${
                  ['services', 'meta-ads', 'google-ads', 'seo', 'graphic-design'].includes(currentRoute)
                    ? 'text-[#164B8C] font-semibold'
                    : ''
                }`}
                aria-expanded={isServicesOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown panel */}
              {isServicesOpen && (
                <div
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 w-80 bg-white border border-slate-100 shadow-xl rounded-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="p-2 border-b border-slate-50 mb-1">
                    <button
                      onClick={() => handleNavClick('services')}
                      className="text-xs font-bold text-[#164B8C] hover:underline flex items-center justify-between w-full"
                    >
                      <span>Explore All Services</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  {serviceLinks.map((item) => (
                    <button
                      key={item.route}
                      onClick={() => handleNavClick(item.route)}
                      className={`w-full text-left p-2.5 rounded-lg transition-colors hover:bg-slate-50 flex flex-col ${
                        currentRoute === item.route ? 'bg-[#EAF3FF] text-[#164B8C]' : 'text-slate-800'
                      }`}
                    >
                      <span className="text-xs font-semibold">{item.name}</span>
                      <span className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{item.desc}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('portfolio')}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#164B8C] ${
                currentRoute === 'portfolio' ? 'text-[#164B8C] font-semibold' : ''
              }`}
            >
              Portfolio
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#164B8C] ${
                currentRoute === 'contact' ? 'text-[#164B8C] font-semibold' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/917014797458?text=Hello%20Hazel%20Digital!%20I%20would%20like%20to%20get%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-emerald-700 transition-colors px-2 py-1"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#164B8C] hover:bg-[#0B1F3A] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0"
            >
              Get Free Consultation
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#164B8C] hover:bg-slate-50 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-slate-200 shadow-xl p-5 z-40 max-h-[calc(100vh-60px)] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-2 px-3 rounded-lg text-sm font-medium ${
                currentRoute === 'home' ? 'bg-[#EAF3FF] text-[#164B8C]' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-left py-2 px-3 rounded-lg text-sm font-medium ${
                currentRoute === 'about' ? 'bg-[#EAF3FF] text-[#164B8C]' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              About Us
            </button>

            {/* Mobile Services Accordion */}
            <div className="border border-slate-100 rounded-lg p-3 bg-slate-50/50">
              <button
                onClick={() => handleNavClick('services')}
                className="text-left text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 w-full hover:text-[#164B8C]"
              >
                Services Overview →
              </button>
              <div className="space-y-1 pl-2">
                {serviceLinks.map((service) => (
                  <button
                    key={service.route}
                    onClick={() => handleNavClick(service.route)}
                    className={`block w-full text-left py-1.5 text-xs ${
                      currentRoute === service.route ? 'text-[#164B8C] font-semibold' : 'text-slate-700 hover:text-[#164B8C]'
                    }`}
                  >
                    • {service.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavClick('portfolio')}
              className={`text-left py-2 px-3 rounded-lg text-sm font-medium ${
                currentRoute === 'portfolio' ? 'bg-[#EAF3FF] text-[#164B8C]' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Portfolio
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left py-2 px-3 rounded-lg text-sm font-medium ${
                currentRoute === 'contact' ? 'bg-[#EAF3FF] text-[#164B8C]' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Contact
            </button>

            {/* Mobile CTAs */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold text-white bg-[#164B8C] rounded-lg shadow-sm"
              >
                Get Free Consultation
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="https://wa.me/917014797458"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-lg border border-emerald-200"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+917014797458"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-50 text-slate-800 text-xs font-medium rounded-lg border border-slate-200"
                >
                  <Phone className="w-3.5 h-3.5 text-[#164B8C]" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
