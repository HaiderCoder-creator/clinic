'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  UserCog,
  Calendar,
  Clock,
  User,
  Phone,
  Building,
  Stethoscope,
  CheckCircle2,
  Clock3,
  XCircle,
  AlertCircle,
  RotateCcw,
  PlusCircle,
  Search,
  Filter,
  Eye,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Check,
  X,
  FileText,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAppointments } from '@/context/AppointmentContext';
import { VERIFIED_DEPARTMENTS, VERIFIED_DOCTORS } from '@/lib/data';
import { AppointmentRequest, AppointmentStatus } from '@/types/clinic';

export default function DemoAdminView() {
  const { t, language, isRTL } = useLanguage();
  const { appointments, updateStatus, resetDemoData, openBookingModal } = useAppointments();

  // Filters State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedDate, setSelectedDate] = useState('');

  // Selected request for detail modal
  const [activeRequest, setActiveRequest] = useState<AppointmentRequest | null>(null);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  // Status badge styling helper
  const getStatusBadge = (status: AppointmentStatus) => {
    switch (status) {
      case 'pending':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
            <Clock3 className="w-3 h-3" />
            <span>{t.admin.statusPending}</span>
          </span>
        );
      case 'confirmed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-teal-50 text-[#267D88] border border-teal-200">
            <CheckCircle2 className="w-3 h-3" />
            <span>{t.admin.statusConfirmed}</span>
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
            <Check className="w-3 h-3" />
            <span>{t.admin.statusCompleted}</span>
          </span>
        );
      case 'cancelled':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-800 border border-rose-200">
            <XCircle className="w-3 h-3" />
            <span>{t.admin.statusCancelled}</span>
          </span>
        );
    }
  };

  // Filter appointments
  const filteredAppointments = appointments.filter((req) => {
    const matchesSearch =
      !searchTerm ||
      req.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.phone.includes(searchTerm) ||
      req.referenceNumber.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDept = selectedDept === 'all' || req.departmentSlug === selectedDept;
    const matchesStatus = selectedStatus === 'all' || req.status === selectedStatus;
    const matchesDate = !selectedDate || req.preferredDate === selectedDate;

    return matchesSearch && matchesDept && matchesStatus && matchesDate;
  });

  // Stats calculation
  const totalCount = appointments.length;
  const pendingCount = appointments.filter((a) => a.status === 'pending').length;
  const confirmedCount = appointments.filter((a) => a.status === 'confirmed').length;
  const completedCount = appointments.filter((a) => a.status === 'completed').length;

  const handleStatusChange = (newStatus: AppointmentStatus) => {
    if (!activeRequest) return;
    updateStatus(activeRequest.id, newStatus);
    setActiveRequest({ ...activeRequest, status: newStatus });
    setFeedbackMsg(t.admin.statusUpdatedMsg);
    setTimeout(() => setFeedbackMsg(null), 3000);
  };

  const handleReset = () => {
    resetDemoData();
    setFeedbackMsg(t.admin.resetSuccessMsg);
    setTimeout(() => setFeedbackMsg(null), 3000);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDept('all');
    setSelectedStatus('all');
    setSelectedDate('');
  };

  return (
    <div className="py-8 sm:py-12 bg-[#F7F9F8] min-h-[85vh]">
      <div className="clinic-container space-y-8">
        
        {/* Banner Alert for Commercial Pitch */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#173F47] to-[#267D88] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-md">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#D8F287] shrink-0 border border-white/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D8F287]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t.admin.badge}</span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold leading-snug">
                {t.admin.title}
              </h1>
              <p className="text-xs sm:text-sm text-teal-100/90 max-w-3xl leading-relaxed">
                {t.admin.commercialCallout}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end md:self-center shrink-0">
            <button
              onClick={() => openBookingModal()}
              type="button"
              className="clinic-btn-accent text-xs py-2.5 px-4 shadow-xs"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{t.admin.addNewDemoBtn}</span>
            </button>

            <button
              onClick={handleReset}
              type="button"
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-2.5 rounded-xl border border-white/20 transition-colors flex items-center gap-1.5"
              title={t.admin.resetDataBtn}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.admin.resetDataBtn}</span>
            </button>
          </div>
        </div>

        {/* Feedback Message Toast */}
        {feedbackMsg && (
          <div className="p-3.5 rounded-xl bg-teal-50 border border-[#267D88]/30 text-[#173F47] text-xs font-bold flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#267D88]" />
              <span>{feedbackMsg}</span>
            </div>
            <button
              onClick={() => setFeedbackMsg(null)}
              className="text-teal-700 hover:text-teal-900"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Metrics Overview Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="clinic-card p-4 sm:p-5 bg-white border border-[#E3ECEB]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#647B80]">{t.admin.statsTotal}</span>
              <div className="w-7 h-7 rounded-lg bg-[#EEF6F6] text-[#267D88] flex items-center justify-center">
                <FileText className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#173F47]">
              {totalCount}
            </div>
          </div>

          <div className="clinic-card p-4 sm:p-5 bg-white border border-[#E3ECEB]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#647B80]">{t.admin.statsPending}</span>
              <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                <Clock3 className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-700">
              {pendingCount}
            </div>
          </div>

          <div className="clinic-card p-4 sm:p-5 bg-white border border-[#E3ECEB]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#647B80]">{t.admin.statsConfirmed}</span>
              <div className="w-7 h-7 rounded-lg bg-teal-50 text-[#267D88] flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#267D88]">
              {confirmedCount}
            </div>
          </div>

          <div className="clinic-card p-4 sm:p-5 bg-white border border-[#E3ECEB]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#647B80]">{t.admin.statsCompleted}</span>
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <Check className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-800">
              {completedCount}
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="clinic-card p-4 sm:p-5 bg-white border border-[#E3ECEB] space-y-4">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-bold text-[#173F47] flex items-center gap-1.5">
              <Filter className="w-4 h-4 text-[#267D88]" />
              <span>{language === 'ar' ? 'أدوات التصفية والبحث السريع' : 'Filters & Search'}</span>
            </span>

            {(searchTerm || selectedDept !== 'all' || selectedStatus !== 'all' || selectedDate) && (
              <button
                onClick={clearFilters}
                className="text-xs font-bold text-[#267D88] hover:underline"
              >
                {t.admin.clearFilters}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#647B80] absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.admin.filterSearchPlaceholder}
                className="w-full text-xs sm:text-sm rounded-xl border border-[#D1DFDE] bg-white ps-9 pe-3 py-2.5 outline-none focus:border-[#267D88]"
              />
            </div>

            {/* Department Filter */}
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full text-xs sm:text-sm rounded-xl border border-[#D1DFDE] bg-white px-3 py-2.5 outline-none focus:border-[#267D88]"
            >
              <option value="all">{t.admin.filterAllDepts}</option>
              {VERIFIED_DEPARTMENTS.map((d) => (
                <option key={d.id} value={d.slug}>
                  {language === 'ar' ? d.nameAr : d.nameEn}
                </option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full text-xs sm:text-sm rounded-xl border border-[#D1DFDE] bg-white px-3 py-2.5 outline-none focus:border-[#267D88]"
            >
              <option value="all">{t.admin.filterAllStatuses}</option>
              <option value="pending">{t.admin.statusPending}</option>
              <option value="confirmed">{t.admin.statusConfirmed}</option>
              <option value="completed">{t.admin.statusCompleted}</option>
              <option value="cancelled">{t.admin.statusCancelled}</option>
            </select>

            {/* Date Filter */}
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full text-xs sm:text-sm rounded-xl border border-[#D1DFDE] bg-white px-3 py-2.5 outline-none focus:border-[#267D88]"
            />
          </div>
        </div>

        {/* Requests Table / Card List */}
        <div className="clinic-card bg-white border border-[#E3ECEB] overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-[#EEF4F3] flex items-center justify-between">
            <h2 className="text-base font-bold text-[#173F47]">
              {language === 'ar' ? 'سجل طلبات المواعيد' : 'Appointment Requests Table'}
            </h2>
            <span className="text-xs text-[#647B80] bg-[#F7F9F8] px-2.5 py-1 rounded-md border border-[#E3ECEB]">
              {filteredAppointments.length} {language === 'ar' ? 'طلب معروض' : 'records shown'}
            </span>
          </div>

          {filteredAppointments.length === 0 ? (
            <div className="p-12 text-center space-y-3">
              <AlertCircle className="w-8 h-8 text-[#647B80] mx-auto opacity-50" />
              <p className="text-sm font-semibold text-[#647B80]">
                {t.admin.noRequestsFound}
              </p>
              <button
                onClick={clearFilters}
                className="clinic-btn-outline text-xs py-2 px-4 mx-auto"
              >
                {t.admin.clearFilters}
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-start text-xs sm:text-sm">
                <thead className="bg-[#F7F9F8] text-[#647B80] font-bold border-b border-[#EEF4F3]">
                  <tr>
                    <th className="p-3.5 sm:p-4 text-start">{t.admin.colRef}</th>
                    <th className="p-3.5 sm:p-4 text-start">{t.admin.colPatient}</th>
                    <th className="p-3.5 sm:p-4 text-start">{t.admin.colPhone}</th>
                    <th className="p-3.5 sm:p-4 text-start">{t.admin.colDept}</th>
                    <th className="p-3.5 sm:p-4 text-start">{t.admin.colDate}</th>
                    <th className="p-3.5 sm:p-4 text-start">{t.admin.colStatus}</th>
                    <th className="p-3.5 sm:p-4 text-center">{t.admin.colActions}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EEF4F3]">
                  {filteredAppointments.map((req) => {
                    const dept = VERIFIED_DEPARTMENTS.find((d) => d.slug === req.departmentSlug);
                    const doc = VERIFIED_DOCTORS.find((d) => d.slug === req.doctorSlug);

                    return (
                      <tr
                        key={req.id}
                        className="hover:bg-[#F9FCFC] transition-colors group cursor-pointer"
                        onClick={() => setActiveRequest(req)}
                      >
                        <td className="p-3.5 sm:p-4 font-mono font-bold text-[#173F47]" dir="ltr">
                          <span className="bg-[#EEF6F6] text-[#267D88] px-2 py-0.5 rounded text-xs border border-[#CDE1E0]">
                            {req.referenceNumber}
                          </span>
                        </td>
                        <td className="p-3.5 sm:p-4 font-bold text-[#173F47]">
                          {req.patientName}
                        </td>
                        <td className="p-3.5 sm:p-4 font-mono text-[#647B80]" dir="ltr">
                          <a
                            href={`tel:${req.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-[#267D88] hover:underline"
                          >
                            {req.phone}
                          </a>
                        </td>
                        <td className="p-3.5 sm:p-4 text-[#183B43]">
                          <div>{language === 'ar' ? dept?.nameAr : dept?.nameEn}</div>
                          {doc && (
                            <div className="text-[11px] text-[#647B80]">
                              {language === 'ar' ? doc.nameAr : doc.nameEn}
                            </div>
                          )}
                        </td>
                        <td className="p-3.5 sm:p-4 text-[#183B43]">
                          <div className="font-semibold" dir="ltr">{req.preferredDate}</div>
                          <div className="text-[11px] text-[#647B80]">{req.timeSlot}</div>
                        </td>
                        <td className="p-3.5 sm:p-4">
                          {getStatusBadge(req.status)}
                        </td>
                        <td className="p-3.5 sm:p-4 text-center">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveRequest(req);
                            }}
                            className="p-2 rounded-lg bg-[#EEF6F6] text-[#267D88] hover:bg-[#267D88] hover:text-white transition-colors text-xs font-bold inline-flex items-center gap-1"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">{t.admin.actionView}</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>

      {/* Request Details & Status Update Modal */}
      {activeRequest && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
        >
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#D1DFDE] overflow-hidden animate-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="bg-[#173F47] text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-[#D8F287]" />
                <h3 className="text-base sm:text-lg font-bold">
                  {t.admin.detailTitle}
                </h3>
              </div>
              <button
                onClick={() => setActiveRequest(null)}
                className="text-white/70 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-5 text-start text-xs sm:text-sm max-h-[75vh] overflow-y-auto">
              
              {/* Reference & Current Status Row */}
              <div className="flex items-center justify-between pb-3 border-b border-[#EEF4F3]">
                <div>
                  <span className="text-[#647B80] block text-[11px] font-semibold">{t.booking.successRef}</span>
                  <span className="text-base font-extrabold text-[#173F47] font-mono" dir="ltr">
                    {activeRequest.referenceNumber}
                  </span>
                </div>
                <div>{getStatusBadge(activeRequest.status)}</div>
              </div>

              {/* Patient Info Grid */}
              <div className="grid grid-cols-2 gap-4 bg-[#F7F9F8] p-4 rounded-xl border border-[#E3ECEB]">
                <div>
                  <span className="text-[#647B80] block text-[11px]">{t.admin.colPatient}:</span>
                  <span className="font-bold text-[#173F47]">{activeRequest.patientName}</span>
                </div>

                <div>
                  <span className="text-[#647B80] block text-[11px]">{t.admin.colPhone}:</span>
                  <a
                    href={`tel:${activeRequest.phone}`}
                    className="font-bold text-[#267D88] hover:underline font-mono"
                    dir="ltr"
                  >
                    {activeRequest.phone}
                  </a>
                </div>

                <div>
                  <span className="text-[#647B80] block text-[11px]">{t.admin.colDept}:</span>
                  <span className="font-bold text-[#183B43]">
                    {language === 'ar'
                      ? VERIFIED_DEPARTMENTS.find((d) => d.slug === activeRequest.departmentSlug)?.nameAr
                      : VERIFIED_DEPARTMENTS.find((d) => d.slug === activeRequest.departmentSlug)?.nameEn}
                  </span>
                </div>

                <div>
                  <span className="text-[#647B80] block text-[11px]">{t.admin.colDoctor}:</span>
                  <span className="font-bold text-[#183B43]">
                    {activeRequest.doctorSlug
                      ? language === 'ar'
                        ? VERIFIED_DOCTORS.find((d) => d.slug === activeRequest.doctorSlug)?.nameAr
                        : VERIFIED_DOCTORS.find((d) => d.slug === activeRequest.doctorSlug)?.nameEn
                      : t.booking.anyDoctor}
                  </span>
                </div>

                <div>
                  <span className="text-[#647B80] block text-[11px]">{t.admin.colDate}:</span>
                  <span className="font-bold text-[#183B43]" dir="ltr">{activeRequest.preferredDate}</span>
                </div>

                <div>
                  <span className="text-[#647B80] block text-[11px]">{t.booking.timeSlotLabel.replace('*', '')}:</span>
                  <span className="font-bold text-[#183B43]">{activeRequest.timeSlot}</span>
                </div>
              </div>

              {/* Notes */}
              <div>
                <span className="text-[#647B80] block text-[11px] font-semibold mb-1">{t.admin.notesLabel}</span>
                <p className="p-3 rounded-xl bg-white border border-[#D1DFDE] text-[#183B43] text-xs leading-relaxed">
                  {activeRequest.notes || t.admin.noNotes}
                </p>
              </div>

              {/* Status Update Buttons */}
              <div className="space-y-2 pt-2 border-t border-[#EEF4F3]">
                <label className="block text-xs font-bold text-[#173F47]">
                  {t.admin.updateStatusLabel}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => handleStatusChange('pending')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${
                      activeRequest.status === 'pending'
                        ? 'bg-amber-600 text-white border-amber-600'
                        : 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
                    }`}
                  >
                    {t.admin.statusPending}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleStatusChange('confirmed')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${
                      activeRequest.status === 'confirmed'
                        ? 'bg-[#267D88] text-white border-[#267D88]'
                        : 'bg-teal-50 text-[#267D88] border-teal-200 hover:bg-teal-100'
                    }`}
                  >
                    {t.admin.statusConfirmed}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleStatusChange('completed')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${
                      activeRequest.status === 'completed'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100'
                    }`}
                  >
                    {t.admin.statusCompleted}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleStatusChange('cancelled')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${
                      activeRequest.status === 'cancelled'
                        ? 'bg-rose-600 text-white border-rose-600'
                        : 'bg-rose-50 text-rose-800 border-rose-200 hover:bg-rose-100'
                    }`}
                  >
                    {t.admin.statusCancelled}
                  </button>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#F7F9F8] border-t border-[#EEF4F3] flex justify-end">
              <button
                type="button"
                onClick={() => setActiveRequest(null)}
                className="clinic-btn-primary text-xs py-2 px-5"
              >
                {t.booking.closeBtn}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
