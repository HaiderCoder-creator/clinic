'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Stethoscope,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  FileText,
  UserCheck,
  Building,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAppointments } from '@/context/AppointmentContext';
import { VERIFIED_DEPARTMENTS, VERIFIED_DOCTORS, SAMPLE_TIME_SLOTS } from '@/lib/data';
import { AppointmentRequest } from '@/types/clinic';

interface AppointmentFormProps {
  preselectedDeptSlug?: string;
  preselectedDoctorSlug?: string;
  onSuccess?: (created: AppointmentRequest) => void;
  isStandalonePage?: boolean;
}

export default function AppointmentForm({
  preselectedDeptSlug,
  preselectedDoctorSlug,
  onSuccess,
  isStandalonePage = false,
}: AppointmentFormProps) {
  const { t, language, isRTL } = useLanguage();
  const { addAppointment } = useAppointments();

  const todayStr = new Date().toISOString().split('T')[0];

  const [deptSlug, setDeptSlug] = useState<string>(preselectedDeptSlug || '');
  const [doctorSlug, setDoctorSlug] = useState<string>(preselectedDoctorSlug || '');
  const [preferredDate, setPreferredDate] = useState<string>(todayStr);
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [patientName, setPatientName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<AppointmentRequest | null>(null);

  useEffect(() => {
    if (preselectedDeptSlug) setDeptSlug(preselectedDeptSlug);
    if (preselectedDoctorSlug) setDoctorSlug(preselectedDoctorSlug);
  }, [preselectedDeptSlug, preselectedDoctorSlug]);

  // Filter available doctors for the selected department
  const availableDoctors = VERIFIED_DOCTORS.filter(
    (doc) => !deptSlug || doc.departmentSlug === deptSlug
  );

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!deptSlug) {
      errs.dept = t.booking.validationErrors.deptRequired;
    }

    if (!preferredDate) {
      errs.date = t.booking.validationErrors.dateRequired;
    } else if (preferredDate < todayStr) {
      errs.date = t.booking.dateMinError;
    }

    if (!timeSlot) {
      errs.time = t.booking.validationErrors.timeRequired;
    }

    if (!patientName.trim() || patientName.trim().length < 3) {
      errs.name = t.booking.validationErrors.nameRequired;
    }

    // Saudi phone format validation: must start with 05 and be 10 digits, or 9665...
    const cleanPhone = phone.replace(/[\s-+]/g, '');
    const isSaudiPhone = /^(05|5|9665)[0-9]{8}$/.test(cleanPhone);
    if (!cleanPhone || !isSaudiPhone) {
      errs.phone = t.booking.validationErrors.phoneRequired;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Format phone cleanly
    let formattedPhone = phone.trim();
    if (formattedPhone.startsWith('5')) formattedPhone = '0' + formattedPhone;

    setTimeout(() => {
      const created = addAppointment({
        patientName: patientName.trim(),
        phone: formattedPhone,
        departmentSlug: deptSlug,
        doctorSlug: doctorSlug || undefined,
        preferredDate,
        timeSlot,
        notes: notes.trim() || undefined,
      });

      setIsSubmitting(false);
      setSubmittedRecord(created);
      if (onSuccess) onSuccess(created);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedRecord(null);
    setDeptSlug(preselectedDeptSlug || '');
    setDoctorSlug(preselectedDoctorSlug || '');
    setPreferredDate(todayStr);
    setTimeSlot('');
    setPatientName('');
    setPhone('');
    setNotes('');
    setErrors({});
  };

  // SUCCESS STATE VIEW
  if (submittedRecord) {
    const selectedDept = VERIFIED_DEPARTMENTS.find((d) => d.slug === submittedRecord.departmentSlug);
    const selectedDoc = VERIFIED_DOCTORS.find((d) => d.slug === submittedRecord.doctorSlug);

    return (
      <div className="py-6 px-4 sm:px-6 text-center space-y-6">
        <div className="w-16 h-16 bg-[#EEF6F6] text-[#267D88] rounded-full flex items-center justify-center mx-auto border-2 border-[#267D88]/20">
          <CheckCircle2 className="w-9 h-9 text-[#267D88]" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-[#173F47]">
            {t.booking.successTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#647B80] max-w-md mx-auto">
            {t.booking.successDesc}
          </p>
        </div>

        {/* Reference Number Card */}
        <div className="bg-[#F0F6F6] border border-[#CDE1E0] rounded-2xl p-4 sm:p-5 max-w-md mx-auto text-start space-y-3">
          <div className="flex items-center justify-between border-b border-[#CDE1E0] pb-3">
            <span className="text-xs text-[#647B80] font-medium">{t.booking.successRef}</span>
            <span className="text-base sm:text-lg font-extrabold text-[#173F47] tracking-wider px-2.5 py-0.5 bg-white rounded-md border border-[#CDE1E0]" dir="ltr">
              {submittedRecord.referenceNumber}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-[#647B80] block">{t.admin.colPatient}:</span>
              <span className="font-semibold text-[#183B43]">{submittedRecord.patientName}</span>
            </div>
            <div>
              <span className="text-[#647B80] block">{t.admin.colDept}:</span>
              <span className="font-semibold text-[#183B43]">
                {language === 'ar' ? selectedDept?.nameAr : selectedDept?.nameEn}
              </span>
            </div>
            <div>
              <span className="text-[#647B80] block">{t.admin.colDate}:</span>
              <span className="font-semibold text-[#183B43]" dir="ltr">
                {submittedRecord.preferredDate}
              </span>
            </div>
            <div>
              <span className="text-[#647B80] block">{t.booking.timeSlotLabel.replace('*', '')}:</span>
              <span className="font-semibold text-[#183B43]">{submittedRecord.timeSlot}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/demo-admin"
            className="w-full sm:w-auto clinic-btn-primary text-sm py-3 px-6 shadow-sm"
          >
            <UserCheck className="w-4 h-4" />
            <span>{t.booking.viewInAdminBtn}</span>
          </Link>

          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto clinic-btn-outline text-sm py-3 px-6"
          >
            <span>{t.booking.bookAnotherBtn}</span>
          </button>
        </div>
      </div>
    );
  }

  // FORM INPUT VIEW
  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-start">
      {/* Disclaimer Box */}
      <div className="p-3.5 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E] text-xs leading-relaxed flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block mb-0.5">{language === 'ar' ? 'تنويه تجريبي:' : 'Demo Notice:'}</span>
          <span>{t.booking.demoNotice}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Department Field */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-[#173F47] flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-[#267D88]" />
            <span>{t.booking.deptLabel}</span>
          </label>
          <select
            value={deptSlug}
            onChange={(e) => {
              setDeptSlug(e.target.value);
              setDoctorSlug(''); // Reset doctor when dept changes
              if (errors.dept) setErrors({ ...errors, dept: '' });
            }}
            className={`w-full text-sm rounded-xl border bg-white px-3.5 py-2.5 outline-none transition-all ${
              errors.dept
                ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                : 'border-[#D1DFDE] focus:border-[#267D88] focus:ring-1 focus:ring-[#267D88]'
            }`}
          >
            <option value="">{t.booking.deptPlaceholder}</option>
            {VERIFIED_DEPARTMENTS.map((dept) => (
              <option key={dept.id} value={dept.slug}>
                {language === 'ar' ? dept.nameAr : dept.nameEn}
              </option>
            ))}
          </select>
          {errors.dept && <p className="text-[11px] text-red-600">{errors.dept}</p>}
        </div>

        {/* Doctor Field (Filtered by Dept) */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-[#173F47] flex items-center gap-1.5">
            <Stethoscope className="w-3.5 h-3.5 text-[#267D88]" />
            <span>{t.booking.doctorLabel}</span>
          </label>
          <select
            value={doctorSlug}
            onChange={(e) => setDoctorSlug(e.target.value)}
            className="w-full text-sm rounded-xl border border-[#D1DFDE] bg-white px-3.5 py-2.5 outline-none focus:border-[#267D88] focus:ring-1 focus:ring-[#267D88] transition-all"
          >
            <option value="">{t.booking.anyDoctor}</option>
            {availableDoctors.map((doc) => (
              <option key={doc.id} value={doc.slug}>
                {language === 'ar' ? doc.nameAr : doc.nameEn} ({language === 'ar' ? doc.specialtyAr : doc.specialtyEn})
              </option>
            ))}
          </select>
        </div>

        {/* Date Field */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-[#173F47] flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#267D88]" />
            <span>{t.booking.dateLabel}</span>
          </label>
          <input
            type="date"
            min={todayStr}
            value={preferredDate}
            onChange={(e) => {
              setPreferredDate(e.target.value);
              if (errors.date) setErrors({ ...errors, date: '' });
            }}
            className={`w-full text-sm rounded-xl border bg-white px-3.5 py-2.5 outline-none transition-all ${
              errors.date
                ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                : 'border-[#D1DFDE] focus:border-[#267D88] focus:ring-1 focus:ring-[#267D88]'
            }`}
          />
          {errors.date && <p className="text-[11px] text-red-600">{errors.date}</p>}
        </div>

        {/* Time Slot Field */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-[#173F47] flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#267D88]" />
            <span>{t.booking.timeSlotLabel}</span>
          </label>
          <select
            value={timeSlot}
            onChange={(e) => {
              setTimeSlot(e.target.value);
              if (errors.time) setErrors({ ...errors, time: '' });
            }}
            className={`w-full text-sm rounded-xl border bg-white px-3.5 py-2.5 outline-none transition-all ${
              errors.time
                ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                : 'border-[#D1DFDE] focus:border-[#267D88] focus:ring-1 focus:ring-[#267D88]'
            }`}
          >
            <option value="">{t.booking.timeSlotPlaceholder}</option>
            <optgroup label={language === 'ar' ? 'الفترة الصباحية' : 'Morning Slots'}>
              {SAMPLE_TIME_SLOTS.filter((s) => s.period === 'morning').map((slot) => (
                <option key={slot.id} value={`${slot.timeAr} (${slot.timeEn})`}>
                  {language === 'ar' ? slot.timeAr : slot.timeEn}
                </option>
              ))}
            </optgroup>
            <optgroup label={language === 'ar' ? 'الفترة المسائية' : 'Evening Slots'}>
              {SAMPLE_TIME_SLOTS.filter((s) => s.period === 'evening').map((slot) => (
                <option key={slot.id} value={`${slot.timeAr} (${slot.timeEn})`}>
                  {language === 'ar' ? slot.timeAr : slot.timeEn}
                </option>
              ))}
            </optgroup>
          </select>
          {errors.time && <p className="text-[11px] text-red-600">{errors.time}</p>}
        </div>

        {/* Patient Name Field */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-[#173F47] flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#267D88]" />
            <span>{t.booking.nameLabel}</span>
          </label>
          <input
            type="text"
            placeholder={t.booking.namePlaceholder}
            value={patientName}
            onChange={(e) => {
              setPatientName(e.target.value);
              if (errors.name) setErrors({ ...errors, name: '' });
            }}
            className={`w-full text-sm rounded-xl border bg-white px-3.5 py-2.5 outline-none transition-all ${
              errors.name
                ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                : 'border-[#D1DFDE] focus:border-[#267D88] focus:ring-1 focus:ring-[#267D88]'
            }`}
          />
          {errors.name && <p className="text-[11px] text-red-600">{errors.name}</p>}
        </div>

        {/* Phone Field */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-[#173F47] flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#267D88]" />
            <span>{t.booking.phoneLabel}</span>
          </label>
          <input
            type="tel"
            dir="ltr"
            placeholder={t.booking.phonePlaceholder}
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (errors.phone) setErrors({ ...errors, phone: '' });
            }}
            className={`w-full text-sm rounded-xl border bg-white px-3.5 py-2.5 outline-none transition-all ${
              errors.phone
                ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                : 'border-[#D1DFDE] focus:border-[#267D88] focus:ring-1 focus:ring-[#267D88]'
            }`}
          />
          {errors.phone && <p className="text-[11px] text-red-600">{errors.phone}</p>}
        </div>
      </div>

      {/* Notes Field */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-[#173F47] flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-[#267D88]" />
          <span>{t.booking.notesLabel}</span>
        </label>
        <textarea
          rows={2}
          placeholder={t.booking.notesPlaceholder}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full text-sm rounded-xl border border-[#D1DFDE] bg-white px-3.5 py-2 outline-none focus:border-[#267D88] focus:ring-1 focus:ring-[#267D88] transition-all resize-none"
        />
      </div>

      {/* Submit CTA */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full clinic-btn-primary text-sm py-3.5 shadow-md flex items-center justify-center gap-2 font-bold cursor-pointer disabled:opacity-75"
        >
          {isSubmitting ? (
            <span>{t.booking.submittingBtn}</span>
          ) : (
            <>
              <CheckCircle2 className="w-4 h-4" />
              <span>{t.booking.submitBtn}</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
