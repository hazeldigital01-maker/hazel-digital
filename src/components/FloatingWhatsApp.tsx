import React, { useState } from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenConsultation: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenConsultation }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const directWhatsAppUrl = 'https://wa.me/917014797458?text=Hello%20Hazel%20Digital!%20I%20would%20like%20to%20learn%20more%20about%20your%20digital%20marketing%20services.';

  return (
    <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Tooltip on hover */}
      {showTooltip && (
        <div className="mb-2 px-3 py-1.5 bg-[#0B1F3A] text-white text-xs font-medium rounded-lg shadow-lg pointer-events-none transition-all hidden sm:block whitespace-nowrap">
          Chat with Hazel Digital on WhatsApp
        </div>
      )}

      <div className="flex items-center gap-2">
        {/* Quick Consultation Pill (desktop only) */}
        <button
          onClick={onOpenConsultation}
          className="hidden md:flex items-center gap-2 px-3.5 py-2.5 bg-white border border-slate-200 text-slate-800 hover:text-[#164B8C] text-xs font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[#164B8C]" />
          <span>Quick Inquiry</span>
        </button>

        {/* WhatsApp Icon Button */}
        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          aria-label="Direct WhatsApp chat with Hazel Digital"
        >
          <MessageSquare className="w-6 h-6 md:w-7 md:h-7 fill-white" />
        </a>
      </div>
    </aside>
  );
};
