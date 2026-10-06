'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Stethoscope,
  ShieldCheck,
  CalendarPlus,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Building2,
  Award,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAppointments } from '@/context/AppointmentContext';
import { VERIFIED_DOCTORS, VERIFIED_DEPARTMENTS } from '@/lib/data';

export default function DoctorHighlights() {
  const { t, language, isRTL } = useLanguage();
  const { openBookingModal } = useAppointments();

  return (
    <section className="py-16 sm:py-20 bg-[#F7F9F8] border-b border-[#E3ECEB]">
      <div className="clinic-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-start">
          <div className="space-y-2 max-w-2xl">
            <div className="clinic-badge bg-[#EEF6F6] text-[#267D88] border border-[#CDE1E0]">
              <Award className="w-3.5 h-3.5" />
              <span>{t.doctors.sectionBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#173F47] tracking-tight">
              {t.doctors.title}
            </h2>
            <p className="text-sm sm:text-base text-[#647B80]">
              {t.doctors.subtitle}
            </p>
          </div>

          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#267D88] hover:text-[#173F47] transition-colors shrink-0"
          >
            <span>{t.doctors.viewAll}</span>
            {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </Link>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                className="clinic-card overflow-hidden bg-white p-6 flex flex-col justify-between group text-start relative"
              >
                {/* Verified Profile Floating Stamp */}
                <div className="absolute top-4 end-4">
                  <div className="inline-flex items-center gap-1 bg-[#EEF6F6] text-[#267D88] px-2.5 py-1 rounded-full text-[11px] font-bold border border-[#CDE1E0]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{t.doctors.verifiedSpecialist}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Photo & Identity Row */}
                  <div className="flex items-start gap-4">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-gray-100 shrink-0 border-2 border-[#CDE1E0] shadow-xs">
                      <Image
                        src={doc.imageUrl}
                        alt={docName}
                        fill
                        sizes="96px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="space-y-1 min-w-0 pr-2">
                      <h3 className="text-lg font-bold text-[#173F47] group-hover:text-[#267D88] transition-colors leading-tight">
                        <Link href={`/doctors/${doc.slug}`}>
                          {docName}
                        </Link>
                      </h3>
                      <div className="text-xs font-semibold text-[#267D88]">
                        {docTitle}
                      </div>
                      <div className="text-[11px] text-[#647B80] flex items-center gap-1 mt-1">
                        <Building2 className="w-3 h-3 text-[#267D88] shrink-0" />
                        <span>{deptName}</span>
                      </div>
                    </div>
                  </div>

                  {/* Specialty & Bio */}
                  <div className="space-y-2 pt-2 border-t border-[#EEF4F3]">
                    <div className="text-xs font-bold text-[#183B43] flex items-center gap-1.5">
                      <Stethoscope className="w-3.5 h-3.5 text-[#267D88]" />
                      <span>{docSpecialty}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#647B80] leading-relaxed line-clamp-3">
                      {docBio}
                    </p>
                  </div>

                  {/* Verification Attribution Note */}
                  <div className="text-[10px] text-[#647B80] bg-[#F7F9F8] p-2.5 rounded-lg border border-[#E3ECEB] flex items-start gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#267D88] shrink-0 mt-0.5" />
                    <span>{doc.sourceVerification}</span>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-5 mt-5 border-t border-[#EEF4F3] flex items-center justify-between gap-3">
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
                    className="clinic-btn-primary text-xs py-2 px-3.5 shadow-xs"
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
    </section>
  );
}
