'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Stethoscope,
  Smile,
  Sparkles,
  Baby,
  HeartHandshake,
  Activity,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Building2,
  CalendarPlus,
  UserCheck,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAppointments } from '@/context/AppointmentContext';
import { VERIFIED_DEPARTMENTS, VERIFIED_DOCTORS } from '@/lib/data';
import AppointmentForm from '@/components/booking/AppointmentForm';

const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-8 h-8" />,
  Smile: <Smile className="w-8 h-8" />,
  Sparkles: <Sparkles className="w-8 h-8" />,
  Baby: <Baby className="w-8 h-8" />,
  HeartHandshake: <HeartHandshake className="w-8 h-8" />,
  Activity: <Activity className="w-8 h-8" />,
};

export default function DepartmentDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { t, language, isRTL } = useLanguage();
  const { openBookingModal } = useAppointments();

  const dept = VERIFIED_DEPARTMENTS.find((d) => d.slug === slug);

  if (!dept) {
    return (
      <div className="py-20 clinic-container text-center space-y-4">
        <h1 className="text-2xl font-bold text-[#173F47]">
          {language === 'ar' ? 'القسم غير موجود' : 'Department Not Found'}
        </h1>
        <Link href="/departments" className="clinic-btn-primary text-sm py-2 px-4">
          {t.departments.viewAll}
        </Link>
      </div>
    );
  }

  const deptName = language === 'ar' ? dept.nameAr : dept.nameEn;
  const deptLongDesc = language === 'ar' ? dept.longDescAr : dept.longDescEn;
  const services = language === 'ar' ? dept.servicesAr : dept.servicesEn;
  const doctorsInDept = VERIFIED_DOCTORS.filter((doc) => doc.departmentSlug === dept.slug);
  const icon = iconMap[dept.icon] || <Stethoscope className="w-8 h-8" />;

  return (
    <div className="py-10 sm:py-16 bg-[#F7F9F8]">
      <div className="clinic-container space-y-10">
        
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#647B80]">
          <Link href="/" className="hover:text-[#267D88]">
            {t.nav.home}
          </Link>
          <span>/</span>
          <Link href="/departments" className="hover:text-[#267D88]">
            {t.nav.departments}
          </Link>
          <span>/</span>
          <span className="text-[#173F47]">{deptName}</span>
        </div>

        {/* Hero Header Card */}
        <div className="clinic-card p-8 sm:p-12 bg-gradient-to-r from-[#173F47] to-[#267D88] text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4 text-start max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#D8F287] border border-white/20">
                {icon}
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#D8F287] text-xs font-bold border border-white/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'تخصص موثق' : 'Verified Specialty'}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {deptName}
            </h1>

            <p className="text-sm sm:text-base text-teal-100/90 leading-relaxed">
              {deptLongDesc}
            </p>
          </div>
        </div>

        {/* 2-Column Grid: Left (Services & Doctors), Right (Booking Form Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Services & Doctors */}
          <div className="lg:col-span-7 space-y-8 text-start">
            
            {/* Services Card */}
            <div className="clinic-card p-6 sm:p-8 bg-white border border-[#E3ECEB] space-y-6">
              <h2 className="text-xl font-bold text-[#173F47] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#267D88]"></span>
                <span>{t.departments.servicesOffered}</span>
              </h2>

              <div className="grid grid-cols-1 gap-3">
                {services.map((srv, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#F7F9F8] border border-[#EEF4F3] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#267D88] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-[#183B43]">{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctors in this Department */}
            <div className="clinic-card p-6 sm:p-8 bg-white border border-[#E3ECEB] space-y-6">
              <h2 className="text-xl font-bold text-[#173F47] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#267D88]"></span>
                <span>{t.departments.doctorsInDept}</span>
              </h2>

              {doctorsInDept.length === 0 ? (
                <div className="p-6 rounded-xl bg-[#F7F9F8] border border-[#E3ECEB] text-center text-xs text-[#647B80]">
                  <p>{t.departments.noDoctorsInDept}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {doctorsInDept.map((doc) => {
                    const docName = language === 'ar' ? doc.nameAr : doc.nameEn;
                    const docTitle = language === 'ar' ? doc.titleAr : doc.titleEn;
                    const docBio = language === 'ar' ? doc.bioAr : doc.bioEn;

                    return (
                      <div
                        key={doc.id}
                        className="p-4 rounded-xl bg-[#F7F9F8] border border-[#E3ECEB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-[#CDE1E0]">
                            <Image
                              src={doc.imageUrl}
                              alt={docName}
                              fill
                              sizes="56px"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-[#173F47]">
                              <Link href={`/doctors/${doc.slug}`} className="hover:text-[#267D88]">
                                {docName}
                              </Link>
                            </h3>
                            <div className="text-xs text-[#267D88] font-semibold">{docTitle}</div>
                            <div className="text-[11px] text-[#647B80] mt-0.5 line-clamp-1">{docBio}</div>
                          </div>
                        </div>

                        <button
                          onClick={() => openBookingModal(dept.slug, doc.slug)}
                          type="button"
                          className="clinic-btn-primary text-xs py-2 px-3.5 shrink-0 self-end sm:self-center"
                        >
                          <CalendarPlus className="w-3.5 h-3.5" />
                          <span>{t.doctors.bookWithDoctor}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

          </div>

          {/* Right Column (5 cols): Embedded Booking Form Card */}
          <div className="lg:col-span-5">
            <div className="clinic-card p-6 sm:p-8 bg-white border border-[#D1DFDE] shadow-md sticky top-24">
              <div className="mb-6 space-y-1 text-start">
                <div className="clinic-badge bg-[#EEF6F6] text-[#267D88] border border-[#CDE1E0] mb-2">
                  <CalendarPlus className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'طلب موعد فوري' : 'Direct Booking'}</span>
                </div>
                <h3 className="text-lg font-bold text-[#173F47]">
                  {language === 'ar'
                    ? `حجز موعد في قسم ${dept.nameAr}`
                    : `Request Appointment in ${dept.nameEn}`}
                </h3>
                <p className="text-xs text-[#647B80]">
                  {language === 'ar'
                    ? 'أدخل بياناتك للتنسيق مع طبيب القسم عبر مكتب الاستقبال.'
                    : 'Submit your contact details for reception coordination.'}
                </p>
              </div>

              <AppointmentForm
                preselectedDeptSlug={dept.slug}
                isStandalonePage={true}
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
