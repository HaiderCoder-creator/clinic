'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  ExternalLink,
  Navigation,
  Send,
  CheckCircle2,
  CalendarPlus,
  Building2,
  ShieldCheck,
  Mail,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAppointments } from '@/context/AppointmentContext';
import { CLINIC_INFO } from '@/lib/data';

export default function ContactPage() {
  const { t, language, isRTL } = useLanguage();
  const { openBookingModal } = useAppointments();

  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone) return;
    setIsSent(true);
  };

  return (
    <div className="py-12 sm:py-16 bg-[#F7F9F8]">
      <div className="clinic-container space-y-12">
        
        {/* Banner */}
        <div className="clinic-card p-8 sm:p-12 bg-gradient-to-r from-[#173F47] to-[#267D88] text-white space-y-4 text-start shadow-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D8F287] text-xs font-bold border border-white/20">
            <MapPin className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'الموقع والتواصل' : 'Location & Contacts'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.location.title}
          </h1>
          <p className="text-sm sm:text-base text-teal-100/90 max-w-2xl leading-relaxed">
            {t.location.subtitle}
          </p>
        </div>

        {/* 2-Column Grid: Contact Info & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-start">
          
          {/* Left: Contact Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="clinic-card p-6 sm:p-8 bg-white border border-[#E3ECEB] space-y-6">
              <h2 className="text-lg font-bold text-[#173F47]">
                {language === 'ar' ? 'معلومات الاتصال المباشرة' : 'Direct Contact Information'}
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF6F6] text-[#267D88] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#647B80] block font-semibold">{t.location.addressLabel}</span>
                    <span className="font-semibold text-[#183B43] leading-relaxed">
                      {language === 'ar' ? CLINIC_INFO.fullAddressAr : CLINIC_INFO.fullAddressEn}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF6F6] text-[#267D88] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#647B80] block font-semibold">{t.location.phoneLabel}</span>
                    <a
                      href={`tel:${CLINIC_INFO.phoneClean}`}
                      className="font-bold text-base text-[#173F47] hover:text-[#267D88] transition-colors"
                      dir="ltr"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF6F6] text-[#267D88] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#647B80] block font-semibold">
                      {language === 'ar' ? 'التسجيل الصحي والترخيص:' : 'Healthcare Registration:'}
                    </span>
                    <span className="text-xs text-[#647B80]">
                      {language === 'ar' ? 'مسجل في منصة طبكان (معرف 100517)' : 'Registered in Tebcan (ID: 100517)'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#EEF4F3] flex flex-col gap-3">
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

                <button
                  type="button"
                  onClick={() => openBookingModal()}
                  className="clinic-btn-outline text-xs sm:text-sm py-3 px-4 justify-center"
                >
                  <CalendarPlus className="w-4 h-4 text-[#267D88]" />
                  <span>{t.nav.bookAppointment}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right: Map & Inquiry Message Demo (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Map Embed */}
            <div className="clinic-card overflow-hidden bg-white border border-[#E3ECEB] h-72 sm:h-80 relative">
              <iframe
                src="https://maps.google.com/maps?q=24.885918,46.610632&hl=ar&z=16&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                title="Google Maps Location for Mila Najd Medical Complex"
              />
            </div>

            {/* Quick General Inquiry Form */}
            <div className="clinic-card p-6 sm:p-8 bg-white border border-[#E3ECEB] space-y-4">
              <h3 className="text-base font-bold text-[#173F47]">
                {language === 'ar' ? 'إرسال استفسار عام (نموذج تجريبي)' : 'Send General Inquiry (Demo)'}
              </h3>

              {isSent ? (
                <div className="p-4 rounded-xl bg-[#EEF6F6] text-[#267D88] text-xs sm:text-sm font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>
                    {language === 'ar'
                      ? 'شكراً لك! تم استلام استفسارك في النموذج التجريبي.'
                      : 'Thank you! Your inquiry was submitted in demo mode.'}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder={t.booking.namePlaceholder}
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full text-xs sm:text-sm rounded-xl border border-[#D1DFDE] bg-white px-3.5 py-2.5 outline-none focus:border-[#267D88]"
                    />
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      placeholder={t.booking.phonePlaceholder}
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full text-xs sm:text-sm rounded-xl border border-[#D1DFDE] bg-white px-3.5 py-2.5 outline-none focus:border-[#267D88]"
                    />
                  </div>
                  <textarea
                    rows={3}
                    placeholder={language === 'ar' ? 'اكتب رسالتك أو استفسارك هنا...' : 'Write your inquiry here...'}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full text-xs sm:text-sm rounded-xl border border-[#D1DFDE] bg-white px-3.5 py-2 outline-none focus:border-[#267D88] resize-none"
                  />
                  <button
                    type="submit"
                    className="clinic-btn-primary text-xs sm:text-sm py-2.5 px-5"
                  >
                    <Send className="w-4 h-4" />
                    <span>{language === 'ar' ? 'إرسال الاستفسار التجريبي' : 'Send Demo Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
