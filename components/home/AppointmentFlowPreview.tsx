'use client';

import React from 'react';
import { CalendarPlus, Building, Clock, UserCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAppointments } from '@/context/AppointmentContext';

export default function AppointmentFlowPreview() {
  const { t, language } = useLanguage();
  const { openBookingModal } = useAppointments();

  const steps = [
    {
      num: '01',
      icon: <Building className="w-5 h-5 text-[#267D88]" />,
      title: t.flow.step1Title,
      desc: t.flow.step1Desc,
    },
    {
      num: '02',
      icon: <Clock className="w-5 h-5 text-[#267D88]" />,
      title: t.flow.step2Title,
      desc: t.flow.step2Desc,
    },
    {
      num: '03',
      icon: <UserCheck className="w-5 h-5 text-[#267D88]" />,
      title: t.flow.step3Title,
      desc: t.flow.step3Desc,
    },
    {
      num: '04',
      icon: <CheckCircle2 className="w-5 h-5 text-[#267D88]" />,
      title: t.flow.step4Title,
      desc: t.flow.step4Desc,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F7F9F8] border-b border-[#E3ECEB]">
      <div className="clinic-container text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto space-y-3 mb-12">
          <div className="clinic-badge bg-[#EEF6F6] text-[#267D88] border border-[#CDE1E0]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.flow.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#173F47] tracking-tight">
            {t.flow.title}
          </h2>
          <p className="text-sm sm:text-base text-[#647B80]">
            {t.flow.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-start mb-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="clinic-card p-6 bg-white border border-[#E3ECEB] relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF6F6] flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-xs font-extrabold text-[#267D88] bg-[#EEF6F6] px-2.5 py-1 rounded-md">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#173F47] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#647B80] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-[#CDE1E0] shadow-xs">
          <span className="text-xs sm:text-sm font-bold text-[#173F47]">
            {language === 'ar'
              ? 'هل ترغب بحجز موعد استشاري الآن؟'
              : 'Would you like to request an appointment now?'}
          </span>
          <button
            onClick={() => openBookingModal()}
            type="button"
            className="clinic-btn-primary text-xs sm:text-sm py-2.5 px-5 shadow-xs"
          >
            <CalendarPlus className="w-4 h-4" />
            <span>{t.nav.bookAppointment}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
