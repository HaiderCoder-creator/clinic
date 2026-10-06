'use client';

import React from 'react';
import Link from 'next/link';
import {
  Stethoscope,
  Smile,
  Sparkles,
  Baby,
  HeartHandshake,
  Activity,
  ArrowRight,
  ArrowLeft,
  CalendarPlus,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAppointments } from '@/context/AppointmentContext';
import { VERIFIED_DEPARTMENTS } from '@/lib/data';
import { Department } from '@/types/clinic';

const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Smile: <Smile className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Baby: <Baby className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
};

export default function DepartmentHighlights() {
  const { t, language, isRTL } = useLanguage();
  const { openBookingModal } = useAppointments();

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E3ECEB]">
      <div className="clinic-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-start">
          <div className="space-y-2 max-w-2xl">
            <div className="clinic-badge bg-[#EEF6F6] text-[#267D88] border border-[#CDE1E0]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.departments.sectionBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#173F47] tracking-tight">
              {t.departments.title}
            </h2>
            <p className="text-sm sm:text-base text-[#647B80]">
              {t.departments.subtitle}
            </p>
          </div>

          <Link
            href="/departments"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#267D88] hover:text-[#173F47] transition-colors shrink-0"
          >
            <span>{t.departments.viewAll}</span>
            {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </Link>
        </div>

        {/* Departments 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERIFIED_DEPARTMENTS.map((dept) => {
            const icon = iconMap[dept.icon] || <Stethoscope className="w-6 h-6" />;
            const deptName = language === 'ar' ? dept.nameAr : dept.nameEn;
            const deptDesc = language === 'ar' ? dept.shortDescAr : dept.shortDescEn;
            const services = language === 'ar' ? dept.servicesAr : dept.servicesEn;

            return (
              <div
                key={dept.id}
                className="clinic-card p-6 flex flex-col justify-between group relative overflow-hidden bg-white text-start"
              >
                {/* Top Accent Stripe on Hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-[#267D88] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Icon & Title Header */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EEF6F6] text-[#267D88] group-hover:bg-[#267D88] group-hover:text-white flex items-center justify-center transition-all duration-200 shrink-0 shadow-2xs">
                      {icon}
                    </div>

                    <span className="text-[11px] font-bold text-[#647B80] bg-[#F7F9F8] px-2.5 py-1 rounded-md border border-[#E3ECEB]">
                      {services.length} {t.departments.servicesCount}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#173F47] group-hover:text-[#267D88] transition-colors">
                      <Link href={`/departments/${dept.slug}`}>
                        {deptName}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#647B80] leading-relaxed line-clamp-2">
                      {deptDesc}
                    </p>
                  </div>

                  {/* Top 3 Service Bullets */}
                  <div className="pt-2 space-y-1.5 border-t border-[#EEF4F3]">
                    {services.slice(0, 3).map((srv, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#183B43]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#267D88] shrink-0" />
                        <span className="truncate">{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTAs */}
                <div className="pt-6 mt-6 border-t border-[#EEF4F3] flex items-center justify-between gap-2">
                  <Link
                    href={`/departments/${dept.slug}`}
                    className="text-xs font-bold text-[#173F47] hover:text-[#267D88] transition-colors flex items-center gap-1"
                  >
                    <span>{t.departments.viewDetails}</span>
                    {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </Link>

                  <button
                    onClick={() => openBookingModal(dept.slug)}
                    type="button"
                    className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-[#F0F6F6] hover:bg-[#267D88] text-[#267D88] hover:text-white text-xs font-bold transition-all flex items-center gap-1.5"
                    title={t.departments.bookInDept}
                  >
                    <CalendarPlus className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{language === 'ar' ? 'حجز' : 'Book'}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
