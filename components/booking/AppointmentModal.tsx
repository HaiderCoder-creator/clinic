'use client';

import React, { useEffect } from 'react';
import { X, CalendarPlus } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAppointments } from '@/context/AppointmentContext';
import AppointmentForm from './AppointmentForm';

export default function AppointmentModal() {
  const { isBookingModalOpen, closeBookingModal, preselectedDeptSlug, preselectedDoctorSlug } = useAppointments();
  const { t, isRTL } = useLanguage();

  // Escape key handler and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isBookingModalOpen) {
        closeBookingModal();
      }
    };

    if (isBookingModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isBookingModalOpen, closeBookingModal]);

  if (!isBookingModalOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={closeBookingModal}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#D1DFDE] overflow-hidden z-10 my-auto animate-in zoom-in-95 duration-200">
        {/* Header Strip */}
        <div className="bg-[#173F47] text-white p-5 sm:p-6 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#D8F287] shrink-0 border border-white/10">
              <CalendarPlus className="w-5 h-5" />
            </div>
            <div>
              <h2 id="booking-modal-title" className="text-lg sm:text-xl font-bold text-white leading-tight">
                {t.booking.modalTitle}
              </h2>
              <p className="text-xs text-teal-100/80 mt-1">
                {t.booking.modalSubtitle}
              </p>
            </div>
          </div>

          <button
            onClick={closeBookingModal}
            type="button"
            className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-colors shrink-0"
            aria-label={t.booking.closeBtn}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Body */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          <AppointmentForm
            preselectedDeptSlug={preselectedDeptSlug}
            preselectedDoctorSlug={preselectedDoctorSlug}
          />
        </div>
      </div>
    </div>
  );
}
