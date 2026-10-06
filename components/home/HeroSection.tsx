'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CalendarPlus,
  Phone,
  ShieldCheck,
  MapPin,
  Stethoscope,
  Building2,
  Clock,
  Award,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAppointments } from '@/context/AppointmentContext';
import { CLINIC_INFO, VERIFIED_DOCTORS } from '@/lib/data';

export default function HeroSection() {
  const { t, language, isRTL } = useLanguage();
  const { openBookingModal } = useAppointments();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF5F5] via-[#F7F9F8] to-[#F7F9F8] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E3ECEB]">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#267D88]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#D8F287]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="clinic-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Text & CTAs (7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-start">
            {/* Verified Location & Scope Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4EFEF] border border-[#CDE1E0] text-[#173F47] text-xs font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#267D88] animate-pulse"></span>
              <MapPin className="w-3.5 h-3.5 text-[#267D88]" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173F47] tracking-tight leading-[1.25] sm:leading-[1.2]">
              <span className="text-[#267D88] block mb-1">
                {t.hero.titleHighlight}
              </span>
              <span>{t.hero.titleRest}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#647B80] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              {t.hero.subtitle}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => openBookingModal()}
                type="button"
                className="clinic-btn-primary text-sm sm:text-base py-3 px-6 shadow-md"
              >
                <CalendarPlus className="w-5 h-5" />
                <span>{t.hero.bookBtn}</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="clinic-btn-outline text-sm sm:text-base py-3 px-6"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-[#267D88]" />
                <span>{CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Verified Trust Badges */}
            <div className="pt-3 flex flex-wrap items-center gap-3 text-xs text-[#173F47]">
              <div className="flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-lg border border-[#E3ECEB] shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#267D88]" />
                <span className="font-semibold">{t.hero.verifiedProfileBadge}</span>
              </div>

              <div className="flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-lg border border-[#E3ECEB] shadow-2xs">
                <Building2 className="w-4 h-4 text-[#267D88]" />
                <span className="font-semibold">{t.hero.verifiedLocationBadge}</span>
              </div>
            </div>

            {/* Key Metrics Strip */}
            <div className="pt-4 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg border-t border-[#E3ECEB]">
              <div className="bg-white/80 p-3 rounded-xl border border-[#E3ECEB] text-start">
                <div className="text-xl sm:text-2xl font-extrabold text-[#173F47]">
                  {t.hero.stat1Number}
                </div>
                <div className="text-[11px] sm:text-xs text-[#647B80] font-medium mt-0.5">
                  {t.hero.stat1Label}
                </div>
              </div>

              <div className="bg-white/80 p-3 rounded-xl border border-[#E3ECEB] text-start">
                <div className="text-xl sm:text-2xl font-extrabold text-[#267D88]">
                  {t.hero.stat2Number}
                </div>
                <div className="text-[11px] sm:text-xs text-[#647B80] font-medium mt-0.5">
                  {t.hero.stat2Label}
                </div>
              </div>

              <div className="bg-white/80 p-3 rounded-xl border border-[#E3ECEB] text-start">
                <div className="text-xl sm:text-2xl font-extrabold text-[#173F47]">
                  {t.hero.stat3Number}
                </div>
                <div className="text-[11px] sm:text-xs text-[#647B80] font-medium mt-0.5">
                  {t.hero.stat3Label}
                </div>
              </div>
            </div>
          </div>

          {/* Clinic Visual & Verification Presentation Card (5 columns on desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="clinic-card overflow-hidden bg-white shadow-xl border border-[#D1DFDE] p-2 relative">
              
              {/* Card Image Banner */}
              <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-[#173F47]">
                <Image
                  src="/images/clinic/unnamed.webp"
                  alt="مجمع ميلا نجد الطبي - الرياض حي العارض"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                  priority
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-3 start-3 bg-[#173F47]/85 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-white/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D8F287]" />
                  <span>{language === 'ar' ? 'صورة موثقة رسمياً' : 'Verified Facility Image'}</span>
                </div>

                {/* Location Overlay Pill */}
                <div className="absolute bottom-3 start-3 end-3 bg-[#173F47]/90 backdrop-blur-md text-white text-xs p-2.5 rounded-lg border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#D8F287] shrink-0" />
                    <span className="font-semibold text-[11px] sm:text-xs truncate">
                      {language === 'ar' ? 'حي العارض، طريق الملك عبد العزيز' : 'King Abdulaziz Rd, Al Aarid'}
                    </span>
                  </div>
                  <span className="text-[10px] bg-[#267D88] text-white px-2 py-0.5 rounded font-bold">
                    {CLINIC_INFO.cityAr}
                  </span>
                </div>
              </div>

              {/* Verified Doctors Mini Showcase */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#173F47] flex items-center gap-1.5">
                    <Stethoscope className="w-4 h-4 text-[#267D88]" />
                    <span>{language === 'ar' ? 'أطباء معتمدون ومتاحون للاستشارة' : 'Verified Clinical Specialists'}</span>
                  </span>
                  <Link
                    href="/doctors"
                    className="text-[11px] font-bold text-[#267D88] hover:underline flex items-center gap-0.5"
                  >
                    <span>{language === 'ar' ? 'الكل' : 'All'}</span>
                    {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {VERIFIED_DOCTORS.map((doc) => (
                    <div
                      key={doc.id}
                      onClick={() => openBookingModal(doc.departmentSlug, doc.slug)}
                      className="p-2 rounded-xl bg-[#F7F9F8] hover:bg-[#EEF6F6] border border-[#E3ECEB] flex items-center gap-2.5 transition-all cursor-pointer group"
                    >
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-gray-100 shrink-0 border border-[#CDE1E0]">
                        <Image
                          src={doc.imageUrl}
                          alt={language === 'ar' ? doc.nameAr : doc.nameEn}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 text-start">
                        <div className="text-[11px] font-bold text-[#173F47] truncate group-hover:text-[#267D88]">
                          {language === 'ar' ? doc.nameAr : doc.nameEn}
                        </div>
                        <div className="text-[10px] text-[#647B80] truncate">
                          {language === 'ar' ? doc.specialtyAr : doc.specialtyEn}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Call to Action Bar */}
                <div className="pt-1">
                  <button
                    onClick={() => openBookingModal()}
                    type="button"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#EEF6F6] hover:bg-[#267D88] hover:text-white text-[#267D88] text-xs font-bold transition-all flex items-center justify-center gap-2 border border-[#CDE1E0]"
                  >
                    <CalendarPlus className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'طلب موعد فوري مع الفريق الطبي' : 'Request Consult with Specialist'}</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
