'use client';

import React from 'react';
import { MapPin, Phone, ExternalLink, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CLINIC_INFO } from '@/lib/data';

export default function TopHeaderStrip() {
  const { t, language } = useLanguage();

  return (
    <aside aria-label="Clinic Quick Info" className="bg-[#173F47] text-white/90 text-xs py-2 border-b border-white/10 relative z-30">
      <div className="clinic-container flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        {/* Left / Start Info: Location & Directions */}
        <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
          <div className="flex items-center gap-1.5 text-teal-100">
            <MapPin className="w-3.5 h-3.5 text-[#D8F287] shrink-0" />
            <span>{t.topStrip.location}</span>
          </div>

          <a
            href={CLINIC_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-[#D8F287] hover:underline transition-colors text-[11px]"
          >
            <span>{t.topStrip.directions}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Right / End Info: Direct Phone & Verified Badge */}
        <div className="flex items-center gap-4">
          <div className="hidden md:inline-flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded text-[11px] text-teal-200">
            <ShieldCheck className="w-3 h-3 text-[#D8F287]" />
            <span>{language === 'ar' ? 'سجل موثق (Tebcan #100517)' : 'Verified Profile (Tebcan #100517)'}</span>
          </div>

          <a
            href={`tel:${CLINIC_INFO.phoneClean}`}
            className="flex items-center gap-1.5 font-bold text-white hover:text-[#D8F287] transition-colors"
            dir="ltr"
          >
            <Phone className="w-3.5 h-3.5 text-[#D8F287]" />
            <span>{CLINIC_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
