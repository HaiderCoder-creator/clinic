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
  Building2,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAppointments } from '@/context/AppointmentContext';
import { VERIFIED_DEPARTMENTS } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-7 h-7" />,
  Smile: <Smile className="w-7 h-7" />,
  Sparkles: <Sparkles className="w-7 h-7" />,
  Baby: <Baby className="w-7 h-7" />,
  HeartHandshake: <HeartHandshake className="w-7 h-7" />,
  Activity: <Activity className="w-7 h-7" />,
};

export default function DepartmentsPage() {
  const { t, language, isRTL } = useLanguage();
  const { openBookingModal } = useAppointments();

  return (
    <div className="py-12 sm:py-16 bg-[#F7F9F8]">
      <div className="clinic-container space-y-12">
        
        {/* Page Banner Header */}
        <div className="clinic-card p-8 sm:p-12 bg-gradient-to-r from-[#173F47] to-[#267D88] text-white space-y-4 text-start shadow-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D8F287] text-xs font-bold border border-white/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'تخصصات طبية معتمدة' : 'Verified Clinical Specialties'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.departments.title}
          </h1>
          <p className="text-sm sm:text-base text-teal-100/90 max-w-2xl leading-relaxed">
            {t.departments.subtitle}
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-start">
          {VERIFIED_DEPARTMENTS.map((dept) => {
            const icon = iconMap[dept.icon] || <Stethoscope className="w-7 h-7" />;
            const deptName = language === 'ar' ? dept.nameAr : dept.nameEn;
            const deptDesc = language === 'ar' ? dept.shortDescAr : dept.shortDescEn;
            const services = language === 'ar' ? dept.servicesAr : dept.servicesEn;

            return (
              <div
                key={dept.id}
                className="clinic-card p-7 bg-white border border-[#E3ECEB] flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#EEF6F6] text-[#267D88] group-hover:bg-[#267D88] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs">
                      {icon}
                    </div>
                    <span className="text-xs font-bold text-[#647B80] bg-[#F7F9F8] px-3 py-1 rounded-lg border border-[#E3ECEB]">
                      {services.length} {t.departments.servicesCount}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-xl font-bold text-[#173F47] group-hover:text-[#267D88] transition-colors">
                      <Link href={`/departments/${dept.slug}`}>
                        {deptName}
                      </Link>
                    </h2>
                    <p className="text-xs sm:text-sm text-[#647B80] leading-relaxed">
                      {deptDesc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-[#EEF4F3]">
                    <div className="text-xs font-bold text-[#173F47] mb-2">
                      {language === 'ar' ? 'أبرز الإجراءات:' : 'Key Procedures:'}
                    </div>
                    {services.map((srv, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#183B43]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#267D88] shrink-0 mt-0.5" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EEF4F3] flex items-center justify-between gap-3">
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
                    className="clinic-btn-primary text-xs py-2 px-3.5 shadow-xs"
                  >
                    <CalendarPlus className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'طلب موعد' : 'Book'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
