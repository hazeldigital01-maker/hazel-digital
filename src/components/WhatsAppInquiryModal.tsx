import React from 'react';
import { X } from 'lucide-react';
import { WhatsAppInquiryForm } from './WhatsAppInquiryForm';

interface WhatsAppInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  service?: string;
}

export const WhatsAppInquiryModal: React.FC<WhatsAppInquiryModalProps> = ({
  isOpen,
  onClose,
  service = 'Meta Ads',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-2">
          <WhatsAppInquiryForm initialService={service} onSuccess={() => {}} />
        </div>
      </div>
    </div>
  );
};
