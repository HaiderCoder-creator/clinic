'use client';

import React from 'react';
import Link from 'next/link';
import { CalendarPlus, ShieldCheck, MapPin, Phone, Building2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CLINIC_INFO } from '@/lib/data';
import AppointmentForm from '@/components/booking/AppointmentForm';
import AppointmentFlowPreview from '@/components/home/AppointmentFlowPreview';

export default function BookingPage() {
  const { t, language } = useLanguage();

  return (
    <div className="py-12 sm:py-16 bg-[#F7F9F8]">
      <div className="clinic-container space-y-12">
        
        {/* Banner */}
        <div className="clinic-card p-8 sm:p-12 bg-gradient-to-r from-[#173F47] to-[#267D88] text-white space-y-4 text-start shadow-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D8F287] text-xs font-bold border border-white/20">
            <CalendarPlus className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'طلب موعد عيادة' : 'Online Appointment Request'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.booking.modalTitle}
          </h1>
          <p className="text-sm sm:text-base text-teal-100/90 max-w-2xl leading-relaxed">
            {t.booking.modalSubtitle}
          </p>
        </div>

        {/* 2-Column Booking Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Form Card (7 cols) */}
          <div className="lg:col-span-7 clinic-card p-6 sm:p-8 bg-white border border-[#D1DFDE] shadow-md">
            <div className="mb-6 pb-4 border-b border-[#EEF4F3] text-start">
              <h2 className="text-lg font-bold text-[#173F47]">
                {language === 'ar' ? 'نموذج طلب الموعد التجريبي' : 'Demo Appointment Request Form'}
              </h2>
              <p className="text-xs text-[#647B80] mt-1">
                {language === 'ar'
                  ? 'يرجى تعبئة الحقول التالية لاختبار تجربة حجز الموعد.'
                  : 'Please complete the fields below to test the appointment booking flow.'}
              </p>
            </div>

            <AppointmentForm isStandalonePage={true} />
          </div>

          {/* Quick Info & Steps Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-start">
            
            <div className="clinic-card p-6 bg-white border border-[#E3ECEB] space-y-4">
              <h3 className="text-sm font-bold text-[#173F47] flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#267D88]" />
                <span>{language === 'ar' ? 'مجمع ميلا نجد الطبي - الرياض' : 'Mila Najd Medical Complex'}</span>
              </h3>

              <div className="space-y-3 text-xs text-[#647B80]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#267D88] shrink-0 mt-0.5" />
                  <span>{language === 'ar' ? CLINIC_INFO.fullAddressAr : CLINIC_INFO.fullAddressEn}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#267D88] shrink-0" />
                  <a
                    href={`tel:${CLINIC_INFO.phoneClean}`}
                    className="font-bold text-[#173F47] hover:text-[#267D88]"
                    dir="ltr"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#EEF6F6] border border-[#CDE1E0] text-xs text-[#173F47] space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-[#267D88]">
                <ShieldCheck className="w-4 h-4" />
                <span>{language === 'ar' ? 'معاينة إدارة الاستقبال' : 'Reception Admin Preview'}</span>
              </div>
              <p className="text-[#647B80] leading-relaxed">
                {language === 'ar'
                  ? 'بعد إرسال الطلب، يمكنك التوجه إلى صفحة لوحة التحكم لمشاهدة كيف يتلقى موظف الاستقبال الموعد ويغير حالته.'
                  : 'After submitting, visit the Demo Admin page to see how receptionists receive and manage appointment requests.'}
              </p>
              <div className="pt-2">
                <Link
                  href="/demo-admin"
                  className="font-bold text-[#267D88] hover:underline inline-flex items-center gap-1"
                >
                  <span>{t.nav.demoAdmin}</span>
                  <span>›</span>
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
