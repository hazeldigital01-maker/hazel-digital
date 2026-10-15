export type PageRoute =
  | 'home'
  | 'about'
  | 'services'
  | 'meta-ads'
  | 'google-ads'
  | 'seo'
  | 'graphic-design'
  | 'portfolio'
  | 'contact'
  | 'privacy-policy'
  | 'terms';

export interface ServiceInquiryData {
  fullName: string;
  businessName: string;
  phoneNumber: string;
  email: string;
  serviceRequired: string;
  monthlyBudget: string;
  message: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Meta Ads' | 'Google Ads' | 'SEO' | 'Graphic Design';
  tag: 'Concept Project' | 'Sample Work';
  description: string;
  deliverables: string[];
  metricsContext: string;
  visualType: 'meta' | 'google' | 'seo' | 'design';
}
