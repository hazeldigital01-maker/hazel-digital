import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { PageRoute } from '../types';

interface ServiceCardProps {
  title: string;
  description: string;
  items: string[];
  buttonText: string;
  route: PageRoute;
  icon: React.ReactNode;
  onNavigate: (route: PageRoute) => void;
  accentColor?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  items,
  buttonText,
  route,
  icon,
  onNavigate,
}) => {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#164B8C]/40 transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Service Icon with soft blue container */}
        <div className="w-12 h-12 rounded-xl bg-[#EAF3FF] text-[#164B8C] flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#164B8C] group-hover:text-white transition-all duration-200">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#0B1F3A] group-hover:text-[#164B8C] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
          {description}
        </p>

        {/* Deliverables Checklist */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2.5">
            Key Deliverables
          </span>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-xs text-slate-700">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <button
          onClick={() => onNavigate(route)}
          className="w-full flex items-center justify-between py-2.5 px-4 rounded-lg bg-slate-50 hover:bg-[#EAF3FF] text-[#0B1F3A] hover:text-[#164B8C] font-semibold text-xs transition-colors group/btn"
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-[#164B8C] group-hover/btn:translate-x-1 transition-all" />
        </button>
      </div>
    </div>
  );
};
