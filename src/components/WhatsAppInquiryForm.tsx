import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, CheckCircle2, Copy, ExternalLink, ArrowRight, AlertCircle } from 'lucide-react';
import { ServiceInquiryData } from '../types';

interface WhatsAppInquiryFormProps {
  initialService?: string;
  onSuccess?: () => void;
  className?: string;
}

export const WhatsAppInquiryForm: React.FC<WhatsAppInquiryFormProps> = ({
  initialService = 'Meta Ads',
  onSuccess,
  className = '',
}) => {
  const [formData, setFormData] = useState<ServiceInquiryData>({
    fullName: '',
    businessName: '',
    phoneNumber: '',
    email: '',
    serviceRequired: initialService,
    monthlyBudget: '₹10,000–₹25,000',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ServiceInquiryData, string>>>({});
  const [isPrepared, setIsPrepared] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const serviceOptions = [
    'Meta Ads',
    'Google Ads',
    'SEO',
    'Graphic Design',
    'Multiple Services',
    'Other',
  ];

  const budgetOptions = [
    'Under ₹5,000',
    '₹5,000–₹10,000',
    '₹10,000–₹25,000',
    '₹25,000+',
    'Not Decided',
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ServiceInquiryData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business or Brand Name is required.';
    }

    // Phone validation (accepts 10 digits or international formats)
    const phoneClean = formData.phoneNumber.replace(/[\s\-\(\)\+]/g, '');
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone / WhatsApp number is required.';
    } else if (phoneClean.length < 10) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit mobile number.';
    }

    // Email validation
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please provide a valid email address.';
      }
    } else {
      newErrors.email = 'Email address is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please briefly describe your marketing needs or goals.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructWhatsAppMessage = (data: ServiceInquiryData): string => {
    return `Hello Hazel Digital! I would like to discuss your digital marketing services.

Name: ${data.fullName.trim()}
Business: ${data.businessName.trim()}
Service Required: ${data.serviceRequired}
Monthly Budget: ${data.monthlyBudget}
Phone: ${data.phoneNumber.trim()}
Email: ${data.email.trim()}
Message: ${data.message.trim()}

Please contact me to discuss the next steps.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = constructWhatsAppMessage(formData);
    setGeneratedMessage(message);
    setIsPrepared(true);

    // Prompt step 4 & 5: Let the visitor review and open WhatsApp click-to-chat
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/917014797458?text=${encoded}`;
    
    // Automatically trigger launch, but leave interactive confirmation with fallback
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    if (onSuccess) {
      onSuccess();
    }
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleManualOpenWhatsApp = () => {
    const encoded = encodeURIComponent(generatedMessage);
    window.open(`https://wa.me/917014797458?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-sm ${className}`}>
      {!isPrepared ? (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold text-[#0B1F3A]">Send an Inquiry on WhatsApp</h3>
            <p className="text-sm text-slate-500 mt-1">
              Fill in your project details below to start a direct consultation on WhatsApp with Hazel Digital.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Rahul Sharma"
                className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-lg transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#164B8C]/20 ${
                  errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-[#164B8C]'
                }`}
              />
              {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
            </div>

            {/* Business Name */}
            <div>
              <label htmlFor="businessName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Business / Brand Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="businessName"
                type="text"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                placeholder="e.g. Apex Retail Jaipur"
                className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-lg transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#164B8C]/20 ${
                  errors.businessName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-[#164B8C]'
                }`}
              />
              {errors.businessName && <p className="text-xs text-rose-500 mt-1">{errors.businessName}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                WhatsApp / Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                placeholder="+91 98765 43210"
                className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-lg transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#164B8C]/20 ${
                  errors.phoneNumber ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-[#164B8C]'
                }`}
              />
              {errors.phoneNumber && <p className="text-xs text-rose-500 mt-1">{errors.phoneNumber}</p>}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="rahul@example.com"
                className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-lg transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#164B8C]/20 ${
                  errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-[#164B8C]'
                }`}
              />
              {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Service Required */}
            <div>
              <label htmlFor="serviceRequired" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Service Required
              </label>
              <select
                id="serviceRequired"
                value={formData.serviceRequired}
                onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#164B8C]/20 focus:border-[#164B8C]"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Monthly Budget */}
            <div>
              <label htmlFor="monthlyBudget" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Monthly Marketing Budget
              </label>
              <select
                id="monthlyBudget"
                value={formData.monthlyBudget}
                onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#164B8C]/20 focus:border-[#164B8C]"
              >
                {budgetOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Project Brief / Goals <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your target audience, current campaigns, and what you aim to achieve..."
              className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border rounded-lg transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#164B8C]/20 ${
                errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-[#164B8C]'
              }`}
            />
            {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-[#164B8C] hover:bg-[#0B1F3A] text-white font-semibold text-sm rounded-lg shadow-sm hover:shadow transition-all group"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Continue to WhatsApp (+91 7014797458)</span>
              <ArrowRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-xs text-slate-400 mt-2.5">
              Opens WhatsApp with your pre-filled inquiry. You can review and edit before sending.
            </p>
          </div>
        </form>
      ) : (
        /* Review & Confirmation State */
        <div className="space-y-6 py-2">
          <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200/80 rounded-xl">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-emerald-900">Inquiry Prepared for WhatsApp</h4>
              <p className="text-xs text-emerald-700 mt-0.5">
                We've formatted your inquiry below. Please click the button below to open WhatsApp and send the message to initiate your conversation.
              </p>
            </div>
          </div>

          {/* Formatted Message Preview */}
          <div className="relative">
            <div className="flex items-center justify-between pb-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <span>Formatted WhatsApp Message</span>
              <button
                type="button"
                onClick={handleCopyMessage}
                className="flex items-center gap-1 text-[#164B8C] hover:text-[#0B1F3A] font-medium transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Copied!' : 'Copy Text'}</span>
              </button>
            </div>
            <pre className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-mono whitespace-pre-wrap leading-relaxed select-all">
              {generatedMessage}
            </pre>
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={handleManualOpenWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Open WhatsApp & Send</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </button>

            <button
              type="button"
              onClick={() => setIsPrepared(false)}
              className="w-full py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Edit Inquiry Details
            </button>
          </div>

          {/* Fallback Direct Contact Options */}
          <div className="pt-4 border-t border-slate-100">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
              <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
              <span>WhatsApp not opening on your device? Contact us directly:</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href="tel:+917014797458"
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg border border-slate-200 hover:border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#164B8C]" />
                <span>+91 7014797458</span>
              </a>
              <a
                href="mailto:hazeldigital01@gmail.com"
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg border border-slate-200 hover:border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#164B8C]" />
                <span>hazeldigital01@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
