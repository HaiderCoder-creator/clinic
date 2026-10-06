'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Stethoscope,
  ShieldCheck,
  CalendarPlus,
  ArrowRight,
  ArrowLeft,
  Building2,
  Award,
  ExternalLink,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAppointments } from '@/context/AppointmentContext';
import { VERIFIED_DOCTORS, VERIFIED_DEPARTMENTS, CLINIC_INFO } from '@/lib/data';

export default function DoctorsPage() {
  const { t, language, isRTL } = useLanguage();
  const { openBookingModal } = useAppointments();

  return (
    <div className="py-12 sm:py-16 bg-[#F7F9F8]">
      <div className="clinic-container space-y-12">
        
        {/* Banner Header */}
        <div className="clinic-card p-8 sm:p-12 bg-gradient-to-r from-[#173F47] to-[#267D88] text-white space-y-4 text-start shadow-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D8F287] text-xs font-bold border border-white/20">
            <Award className="w-3.5 h-3.5" />
            <span>{t.doctors.sectionBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.doctors.title}
          </h1>
          <p className="text-sm sm:text-base text-teal-100/90 max-w-2xl leading-relaxed">
            {t.doctors.subtitle}
          </p>
        </div>

        {/* Verification Notice Strip */}
        <div className="p-4 rounded-xl bg-white border border-[#CDE1E0] text-xs text-[#173F47] flex items-center justify-between gap-4 text-start">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#267D88] shrink-0" />
            <span>{t.doctors.verifiedProfileText}</span>
          </div>
          <a
            href={CLINIC_INFO.tebcanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#267D88] hover:underline font-bold inline-flex items-center gap-1 shrink-0"
          >
            <span>{language === 'ar' ? 'سجل طبكان' : 'Tebcan Registry'}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-start">
          {VERIFIED_DOCTORS.map((doc) => {
            const dept = VERIFIED_DEPARTMENTS.find((d) => d.slug === doc.departmentSlug);
            const docName = language === 'ar' ? doc.nameAr : doc.nameEn;
            const docTitle = language === 'ar' ? doc.titleAr : doc.titleEn;
            const docSpecialty = language === 'ar' ? doc.specialtyAr : doc.specialtyEn;
            const docBio = language === 'ar' ? doc.bioAr : doc.bioEn;
            const deptName = language === 'ar' ? dept?.nameAr : dept?.nameEn;

            return (
              <div
                key={doc.id}
                className="clinic-card overflow-hidden bg-white p-6 sm:p-7 flex flex-col justify-between group relative"
              >
                <div className="space-y-4">
                  {/* Photo & Identity Row */}
                  <div className="flex items-start gap-4">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-gray-100 shrink-0 border-2 border-[#CDE1E0] shadow-xs">
                      <Image
                        src={doc.imageUrl}
                        alt={docName}
                        fill
                        sizes="112px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="space-y-1 min-w-0 pr-2">
                      <div className="inline-flex items-center gap-1 bg-[#EEF6F6] text-[#267D88] px-2 py-0.5 rounded-full text-[10px] font-bold border border-[#CDE1E0] mb-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>{t.doctors.verifiedSpecialist}</span>
                      </div>

                      <h2 className="text-xl font-bold text-[#173F47] group-hover:text-[#267D88] transition-colors leading-tight">
                        <Link href={`/doctors/${doc.slug}`}>
                          {docName}
                        </Link>
                      </h2>

                      <div className="text-xs font-semibold text-[#267D88]">
                        {docTitle}
                      </div>

                      <div className="text-xs text-[#647B80] flex items-center gap-1 mt-1">
                        <Building2 className="w-3.5 h-3.5 text-[#267D88] shrink-0" />
                        <span>{deptName}</span>
                      </div>
                    </div>
                  </div>

                  {/* Specialty & Bio */}
                  <div className="space-y-2 pt-3 border-t border-[#EEF4F3]">
                    <div className="text-xs font-bold text-[#183B43] flex items-center gap-1.5">
                      <Stethoscope className="w-3.5 h-3.5 text-[#267D88]" />
                      <span>{docSpecialty}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#647B80] leading-relaxed">
                      {docBio}
                    </p>
                  </div>

                  {/* Verification Source Box */}
                  <div className="text-[11px] text-[#647B80] bg-[#F7F9F8] p-3 rounded-xl border border-[#E3ECEB] flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#267D88] shrink-0 mt-0.5" />
                    <span>{doc.sourceVerification}</span>
                  </div>
                </div>

                {/* Bottom Action CTAs */}
                <div className="pt-6 mt-6 border-t border-[#EEF4F3] flex items-center justify-between gap-3">
                  <Link
                    href={`/doctors/${doc.slug}`}
                    className="text-xs font-bold text-[#173F47] hover:text-[#267D88] transition-colors flex items-center gap-1"
                  >
                    <span>{t.doctors.doctorProfile}</span>
                    {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </Link>

                  <button
                    onClick={() => openBookingModal(doc.departmentSlug, doc.slug)}
                    type="button"
                    className="clinic-btn-primary text-xs py-2 px-4 shadow-xs"
                  >
                    <CalendarPlus className="w-3.5 h-3.5" />
                    <span>{t.doctors.bookWithDoctor}</span>
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
