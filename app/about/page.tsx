'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Heart,
  Target,
  Eye,
  CheckCircle2,
  CalendarPlus,
  MapPin,
  Building2,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAppointments } from '@/context/AppointmentContext';
import { CLINIC_INFO } from '@/lib/data';

export default function AboutPage() {
  const { t, language } = useLanguage();
  const { openBookingModal } = useAppointments();

  const values = [
    t.aboutPage.val1,
    t.aboutPage.val2,
    t.aboutPage.val3,
    t.aboutPage.val4,
  ];

  return (
    <div className="py-12 sm:py-16 bg-[#F7F9F8]">
      <div className="clinic-container space-y-12">
        
        {/* Banner */}
        <div className="clinic-card p-8 sm:p-12 bg-gradient-to-r from-[#173F47] to-[#267D88] text-white space-y-4 text-start shadow-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D8F287] text-xs font-bold border border-white/20">
            <Building2 className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'صرح طبي في الرياض' : 'Healthcare Facility in Riyadh'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.aboutPage.heroTitle}
          </h1>
          <p className="text-sm sm:text-base text-teal-100/90 max-w-3xl leading-relaxed">
            {t.aboutPage.heroSubtitle}
          </p>
        </div>

        {/* 2-Column Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-start">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#267D88] uppercase tracking-wider block">
                {language === 'ar' ? 'عن المجمع ورسالته' : 'Our Story & Purpose'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#173F47]">
                {language === 'ar'
                  ? 'رعاية صحية عائلية متكاملة تجمع بين العلم والاهتمام'
                  : 'Integrated Family Healthcare Combining Science & Compassion'}
              </h2>
              <p className="text-sm text-[#647B80] leading-relaxed">
                {language === 'ar' ? CLINIC_INFO.aboutAr : CLINIC_INFO.aboutEn}
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E3ECEB] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#EEF6F6] text-[#267D88] flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#173F47]">
                  {t.aboutPage.missionTitle}
                </h3>
                <p className="text-xs text-[#647B80] leading-relaxed">
                  {t.aboutPage.missionDesc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E3ECEB] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#EEF6F6] text-[#267D88] flex items-center justify-center">
                  <Eye className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#173F47]">
                  {t.aboutPage.visionTitle}
                </h3>
                <p className="text-xs text-[#647B80] leading-relaxed">
                  {t.aboutPage.visionDesc}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="clinic-card overflow-hidden bg-white p-3 border border-[#D1DFDE] shadow-md">
              <div className="relative h-72 sm:h-80 w-full rounded-xl overflow-hidden bg-[#173F47]">
                <Image
                  src="/images/clinic/unnamed (1).webp"
                  alt="مجمع ميلا نجد الطبي"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute top-3 start-3 bg-[#173F47]/85 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-white/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D8F287]" />
                  <span>{language === 'ar' ? 'صورة موثقة رسمياً' : 'Verified Facility'}</span>
                </div>
              </div>

              <div className="p-4 text-start space-y-1">
                <div className="text-xs font-bold text-[#173F47]">
                  {language === 'ar' ? CLINIC_INFO.nameAr : CLINIC_INFO.nameEn}
                </div>
                <div className="text-[11px] text-[#647B80] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#267D88]" />
                  <span>{language === 'ar' ? CLINIC_INFO.fullAddressAr : CLINIC_INFO.fullAddressEn}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Values Section */}
        <div className="clinic-card p-8 sm:p-10 bg-white border border-[#E3ECEB] space-y-6 text-start">
          <h2 className="text-xl sm:text-2xl font-bold text-[#173F47]">
            {t.aboutPage.valuesTitle}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#F7F9F8] border border-[#EEF4F3] flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#267D88] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-[#183B43]">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#173F47] to-[#267D88] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-start space-y-1">
            <h3 className="text-lg sm:text-xl font-bold">
              {language === 'ar' ? 'احجز استشارتك الطبية القادمة بكل سهولة' : 'Book Your Next Medical Consultation'}
            </h3>
            <p className="text-xs sm:text-sm text-teal-100/80">
              {language === 'ar' ? 'فريقنا الطبي مستعد لتقديم أفضل رعاية لك ولعائلتك.' : 'Our medical team is ready to provide the best care for you.'}
            </p>
          </div>

          <button
            onClick={() => openBookingModal()}
            type="button"
            className="clinic-btn-accent text-sm py-3 px-6 shrink-0 shadow-sm"
          >
            <CalendarPlus className="w-4 h-4" />
            <span>{t.nav.bookAppointment}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
