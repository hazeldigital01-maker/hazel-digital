import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { WhatsAppInquiryModal } from './components/WhatsAppInquiryModal';
import { DeploymentGuideModal } from './components/DeploymentGuideModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { MetaAdsPage } from './pages/MetaAdsPage';
import { GoogleAdsPage } from './pages/GoogleAdsPage';
import { SeoPage } from './pages/SeoPage';
import { GraphicDesignPage } from './pages/GraphicDesignPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  // Determine initial route from URL hash or fallback to 'home'
  const getRouteFromHash = (): PageRoute => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    const validRoutes: PageRoute[] = [
      'home',
      'about',
      'services',
      'meta-ads',
      'google-ads',
      'seo',
      'graphic-design',
      'portfolio',
      'contact',
      'privacy-policy',
      'terms',
    ];
    if (validRoutes.includes(hash as PageRoute)) {
      return hash as PageRoute;
    }
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getRouteFromHash());
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationService, setConsultationService] = useState('Meta Ads');
  const [isDeploymentGuideOpen, setIsDeploymentGuideOpen] = useState(false);

  // Sync hash changes (e.g. browser back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL hash and document title on navigation
  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = `#/${route === 'home' ? '' : route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Synchronize Page Title & Meta for SEO
  useEffect(() => {
    const titles: Record<PageRoute, { title: string; desc: string }> = {
      home: {
        title: 'Hazel Digital — Digital Marketing Agency in Jaipur & Chomu',
        desc: 'Helping businesses grow with data-driven Meta Ads, Google Ads, SEO, and Graphic Design strategies.',
      },
      about: {
        title: 'About Us — Hazel Digital Marketing Agency',
        desc: 'Learn about Hazel Digital, our thoughtful marketing approach, and our commitment to helping regional businesses grow.',
      },
      services: {
        title: 'Services — Meta Ads, Google Ads, SEO & Design | Hazel Digital',
        desc: 'Explore our complete suite of digital marketing services tailored for measurable inquiries and sustainable brand visibility.',
      },
      'meta-ads': {
        title: 'Meta Ads Management (Facebook & Instagram) — Hazel Digital',
        desc: 'Targeted Facebook and Instagram advertising campaigns built for lead generation and direct WhatsApp inquiries.',
      },
      'google-ads': {
        title: 'Google Ads Management (Search & PPC) — Hazel Digital',
        desc: 'Connect with active searchers on Google with intent-driven keyword research, negative pruning, and call tracking.',
      },
      seo: {
        title: 'SEO Services in Jaipur & Chomu — Hazel Digital',
        desc: 'Technical SEO, on-page optimization, and Local SEO strategies to build sustainable organic Google search rankings.',
      },
      'graphic-design': {
        title: 'Graphic Design & Brand Creatives — Hazel Digital',
        desc: 'High-contrast social media post templates, ad banners, and cohesive brand identity visuals designed to convert.',
      },
      portfolio: {
        title: 'Portfolio & Work Samples — Hazel Digital',
        desc: 'Explore sample work and demonstration campaign frameworks across Meta Ads, Google Ads, SEO, and Graphic Design.',
      },
      contact: {
        title: 'Contact Us — Hazel Digital (+91 7014797458)',
        desc: 'Get in touch with Hazel Digital via WhatsApp, phone, or email to discuss your digital marketing goals.',
      },
      'privacy-policy': {
        title: 'Privacy Policy — Hazel Digital',
        desc: 'Hazel Digital privacy policy regarding inquiry data and confidentiality.',
      },
      terms: {
        title: 'Terms and Conditions — Hazel Digital',
        desc: 'Terms of service and marketing consultation conditions for Hazel Digital.',
      },
    };

    const currentMeta = titles[currentRoute] || titles.home;
    document.title = currentMeta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentMeta.desc);
    }
  }, [currentRoute]);

  const handleOpenConsultation = (service = 'Meta Ads') => {
    setConsultationService(service);
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0B1F3A] font-sans">
      {/* Sticky Header with 3-Zone Contract */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentRoute === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentRoute === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentRoute === 'meta-ads' && (
          <MetaAdsPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation('Meta Ads')}
          />
        )}
        {currentRoute === 'google-ads' && (
          <GoogleAdsPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation('Google Ads')}
          />
        )}
        {currentRoute === 'seo' && (
          <SeoPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation('SEO')}
          />
        )}
        {currentRoute === 'graphic-design' && (
          <GraphicDesignPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation('Graphic Design')}
          />
        )}
        {currentRoute === 'portfolio' && (
          <PortfolioPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentRoute === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
        {currentRoute === 'privacy-policy' && (
          <PrivacyPolicyPage onNavigate={handleNavigate} />
        )}
        {currentRoute === 'terms' && (
          <TermsPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Authoritative Quiet Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDeploymentGuide={() => setIsDeploymentGuideOpen(true)}
      />

      {/* Non-obstructive Floating WhatsApp */}
      <FloatingWhatsApp
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Free Consultation & Inquiry Modal */}
      <WhatsAppInquiryModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        service={consultationService}
      />

      {/* Domain & Deployment Guide Modal */}
      <DeploymentGuideModal
        isOpen={isDeploymentGuideOpen}
        onClose={() => setIsDeploymentGuideOpen(false)}
      />
    </div>
  );
}
