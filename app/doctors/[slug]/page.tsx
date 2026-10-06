'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Stethoscope,
  ShieldCheck,
  Building2,
  CalendarPlus,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Award,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { VERIFIED_DOCTORS, VERIFIED_DEPARTMENTS } from '@/lib/data';
import AppointmentForm from '@/components/booking/AppointmentForm';

export default function DoctorDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { t, language, isRTL } = useLanguage();

  const doctor = VERIFIED_DOCTORS.find((d) => d.slug === slug);

  if (!doctor) {
    return (
      <div className="py-20 clinic-container text-center space-y-4">
        <h1 className="text-2xl font-bold text-[#173F47]">
          {language === 'ar' ? 'الطبيب غير موجود' : 'Doctor Not Found'}
        </h1>
        <Link href="/doctors" className="clinic-btn-primary text-sm py-2 px-4">
          {t.doctors.viewAll}
        </Link>
      </div>
    );
  }

  const dept = VERIFIED_DEPARTMENTS.find((d) => d.slug === doctor.departmentSlug);
  const docName = language === 'ar' ? doctor.nameAr : doctor.nameEn;
  const docTitle = language === 'ar' ? doctor.titleAr : doctor.titleEn;
  const docSpecialty = language === 'ar' ? doctor.specialtyAr : doctor.specialtyEn;
  const docBio = language === 'ar' ? doctor.bioAr : doctor.bioEn;
  const deptName = language === 'ar' ? dept?.nameAr : dept?.nameEn;

  return (
    <div className="py-10 sm:py-16 bg-[#F7F9F8]">
      <div className="clinic-container space-y-10">
        
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#647B80]">
          <Link href="/" className="hover:text-[#267D88]">
            {t.nav.home}
          </Link>
          <span>/</span>
          <Link href="/doctors" className="hover:text-[#267D88]">
            {t.nav.doctors}
          </Link>
          <span>/</span>
          <span className="text-[#173F47]">{docName}</span>
        </div>

        {/* 2-Column Grid: Doctor Profile Card (Left), Booking Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Doctor Profile & Verification Details */}
          <div className="lg:col-span-7 space-y-8 text-start">
            
            <div className="clinic-card p-6 sm:p-8 bg-white border border-[#E3ECEB] space-y-6">
              
              {/* Doctor Head Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-gray-100 shrink-0 border-2 border-[#CDE1E0] shadow-md">
                  <Image
                    src={doctor.imageUrl}
                    alt={docName}
                    fill
                    sizes="128px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF6F6] text-[#267D88] text-xs font-bold border border-[#CDE1E0]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{t.doctors.verifiedSpecialist}</span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#173F47]">
                    {docName}
                  </h1>

                  <div className="text-sm font-bold text-[#267D88]">
                    {docTitle}
                  </div>

                  {dept && (
                    <Link
                      href={`/departments/${dept.slug}`}
                      className="text-xs text-[#647B80] hover:text-[#267D88] flex items-center gap-1 mt-1 transition-colors"
                    >
                      <Building2 className="w-3.5 h-3.5 text-[#267D88]" />
                      <span>{deptName}</span>
                    </Link>
                  )}
                </div>
              </div>

              {/* Specialty & Bio */}
              <div className="space-y-3 pt-6 border-t border-[#EEF4F3]">
                <h2 className="text-base font-bold text-[#173F47] flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-[#267D88]" />
                  <span>{t.doctors.specialty}</span>
                </h2>
                <div className="p-3.5 rounded-xl bg-[#F7F9F8] border border-[#EEF4F3] text-xs sm:text-sm font-semibold text-[#183B43]">
                  {docSpecialty}
                </div>

                <h2 className="text-base font-bold text-[#173F47] pt-3">
                  {language === 'ar' ? 'نبذة مهنية معتمدة' : 'Clinical Biography'}
                </h2>
                <p className="text-xs sm:text-sm text-[#647B80] leading-relaxed">
                  {docBio}
                </p>
              </div>

              {/* Source Verification Badge */}
              <div className="p-4 rounded-xl bg-[#F0F6F6] border border-[#CDE1E0] text-xs text-[#173F47] space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-[#267D88]">
                  <Award className="w-4 h-4" />
                  <span>{t.doctors.verificationSource}</span>
                </div>
                <p className="text-[11px] text-[#647B80] leading-relaxed">
                  {doctor.sourceVerification}
                </p>
              </div>

            </div>

          </div>

          {/* Right Column (5 cols): Embedded Booking Form */}
          <div className="lg:col-span-5">
            <div className="clinic-card p-6 sm:p-8 bg-white border border-[#D1DFDE] shadow-md sticky top-24">
              <div className="mb-6 space-y-1 text-start">
                <div className="clinic-badge bg-[#EEF6F6] text-[#267D88] border border-[#CDE1E0] mb-2">
                  <CalendarPlus className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'طلب موعد مخصص' : 'Doctor Consultation'}</span>
                </div>
                <h3 className="text-lg font-bold text-[#173F47]">
                  {language === 'ar'
                    ? `حجز موعد مع ${doctor.nameAr}`
                    : `Request Appointment with ${doctor.nameEn}`}
                </h3>
                <p className="text-xs text-[#647B80]">
                  {language === 'ar'
                    ? 'اختر التاريخ والفترة المفضلة وسيتواصل معك فريق الاستقبال لتأكيد الحضور.'
                    : 'Select date & timing; clinic reception will confirm your visit.'}
                </p>
              </div>

              <AppointmentForm
                preselectedDeptSlug={doctor.departmentSlug}
                preselectedDoctorSlug={doctor.slug}
                isStandalonePage={true}
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
