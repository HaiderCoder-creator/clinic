'use client';

import React from 'react';
import { ShieldCheck, HeartPulse, UserCheck, Sparkles, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ClinicFeatures() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <HeartPulse className="w-6 h-6 text-[#267D88]" />,
      title: t.features.item1Title,
      desc: t.features.item1Desc,
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#267D88]" />,
      title: t.features.item2Title,
      desc: t.features.item2Desc,
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#267D88]" />,
      title: t.features.item3Title,
      desc: t.features.item3Desc,
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#267D88]" />,
      title: t.features.item4Title,
      desc: t.features.item4Desc,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E3ECEB]">
      <div className="clinic-container text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto space-y-3 mb-12">
          <div className="clinic-badge bg-[#EEF6F6] text-[#267D88] border border-[#CDE1E0]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.features.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#173F47] tracking-tight">
            {t.features.title}
          </h2>
          <p className="text-sm sm:text-base text-[#647B80]">
            {t.features.subtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-start">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="clinic-card p-6 flex flex-col justify-start bg-[#F7F9F8] border border-[#E3ECEB] group hover:bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-white text-[#267D88] border border-[#E3ECEB] group-hover:bg-[#267D88] group-hover:text-white flex items-center justify-center mb-4 transition-all duration-200 shrink-0 shadow-2xs">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-[#173F47] mb-2 group-hover:text-[#267D88] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#647B80] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
