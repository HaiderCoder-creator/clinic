'use client';

import React from 'react';
import { MapPin, Phone, ExternalLink, Navigation, Clock, ShieldCheck, Building2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CLINIC_INFO } from '@/lib/data';

export default function LocationMapSection() {
  const { t, language, isRTL } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E3ECEB]">
      <div className="clinic-container">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto space-y-3 mb-12 text-center">
          <div className="clinic-badge bg-[#EEF6F6] text-[#267D88] border border-[#CDE1E0]">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.location.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#173F47] tracking-tight">
            {t.location.title}
          </h2>
          <p className="text-sm sm:text-base text-[#647B80]">
            {t.location.subtitle}
          </p>
        </div>

        {/* 2-Column Split: Info Card + Interactive Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Details (5 cols) */}
          <div className="lg:col-span-5 clinic-card p-6 sm:p-8 bg-[#F7F9F8] border border-[#E3ECEB] flex flex-col justify-between text-start">
            <div className="space-y-6">
              
              {/* Complex Name & Verified Tag */}
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#267D88] bg-[#EEF6F6] px-2.5 py-1 rounded-md mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'موقع معتمد رسمياً' : 'Verified Clinical Location'}</span>
                </div>
                <h3 className="text-xl font-extrabold text-[#173F47]">
                  {language === 'ar' ? CLINIC_INFO.nameAr : CLINIC_INFO.nameEn}
                </h3>
                <p className="text-xs text-[#647B80]">
                  {language === 'ar' ? CLINIC_INFO.districtAr : CLINIC_INFO.districtEn}
                </p>
              </div>

              {/* Address details */}
              <div className="space-y-4 text-xs sm:text-sm text-[#183B43] pt-2 border-t border-[#EEF4F3]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E3ECEB] flex items-center justify-center shrink-0 text-[#267D88]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#647B80] block font-semibold">{t.location.addressLabel}</span>
                    <span className="font-medium leading-relaxed">
                      {language === 'ar' ? CLINIC_INFO.fullAddressAr : CLINIC_INFO.fullAddressEn}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E3ECEB] flex items-center justify-center shrink-0 text-[#267D88]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#647B80] block font-semibold">{t.location.phoneLabel}</span>
                    <a
                      href={`tel:${CLINIC_INFO.phoneClean}`}
                      className="font-bold text-[#173F47] hover:text-[#267D88] transition-colors"
                      dir="ltr"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E3ECEB] flex items-center justify-center shrink-0 text-[#267D88]">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#647B80] block font-semibold">
                      {language === 'ar' ? 'الإحداثيات الجغرافية:' : 'Coordinates:'}
                    </span>
                    <span className="font-mono text-xs text-[#647B80]" dir="ltr">
                      24.8859° N, 46.6106° E
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="pt-6 mt-6 border-t border-[#EEF4F3] flex flex-col sm:flex-row gap-3">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="clinic-btn-primary text-xs sm:text-sm py-3 px-4 justify-center"
              >
                <Navigation className="w-4 h-4" />
                <span>{t.location.getDirections}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="clinic-btn-outline text-xs sm:text-sm py-3 px-4 justify-center"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-[#267D88]" />
                <span>{t.location.callNow}</span>
              </a>
            </div>

          </div>

          {/* Interactive Google Maps Embed / Visual (7 cols) */}
          <div className="lg:col-span-7 clinic-card overflow-hidden bg-white border border-[#E3ECEB] relative min-h-[380px] flex flex-col">
            <iframe
              src="https://maps.google.com/maps?q=24.885918,46.610632&hl=ar&z=16&output=embed"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[360px] border-0 flex-1"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع مجمع ميلا نجد الطبي على الخريطة"
            />

            {/* Floating Info Strip on Map */}
            <div className="p-3 bg-white border-t border-[#E3ECEB] flex items-center justify-between text-xs text-[#647B80]">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#267D88]" />
                <span>{t.location.mapNotice}</span>
              </span>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#267D88] hover:underline flex items-center gap-1 shrink-0"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
