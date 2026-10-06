'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppointmentRequest, AppointmentStatus } from '@/types/clinic';
import { SEEDED_DEMO_APPOINTMENTS } from '@/lib/data';

interface AppointmentContextType {
  appointments: AppointmentRequest[];
  isBookingModalOpen: boolean;
  preselectedDeptSlug?: string;
  preselectedDoctorSlug?: string;
  openBookingModal: (deptSlug?: string, doctorSlug?: string) => void;
  closeBookingModal: () => void;
  addAppointment: (data: Omit<AppointmentRequest, 'id' | 'referenceNumber' | 'status' | 'createdAt'>) => AppointmentRequest;
  updateStatus: (id: string, status: AppointmentStatus) => void;
  resetDemoData: () => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

const STORAGE_KEY = 'milanajd_appointments_v1';

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [appointments, setAppointments] = useState<AppointmentRequest[]>(SEEDED_DEMO_APPOINTMENTS);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedDeptSlug, setPreselectedDeptSlug] = useState<string | undefined>();
  const [preselectedDoctorSlug, setPreselectedDoctorSlug] = useState<string | undefined>();

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setAppointments(parsed);
        }
      }
    } catch {
      // Fallback to default seeded
    }
  }, []);

  const saveToStorage = (items: AppointmentRequest[]) => {
    setAppointments(items);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore storage error in private/restricted browsing
    }
  };

  const openBookingModal = (deptSlug?: string, doctorSlug?: string) => {
    setPreselectedDeptSlug(deptSlug);
    setPreselectedDoctorSlug(doctorSlug);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setPreselectedDeptSlug(undefined);
    setPreselectedDoctorSlug(undefined);
  };

  const addAppointment = (data: Omit<AppointmentRequest, 'id' | 'referenceNumber' | 'status' | 'createdAt'>): AppointmentRequest => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newRecord: AppointmentRequest = {
      ...data,
      id: `req-${Date.now()}`,
      referenceNumber: `MN-${randomSuffix}`,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    const updated = [newRecord, ...appointments];
    saveToStorage(updated);
    return newRecord;
  };

  const updateStatus = (id: string, status: AppointmentStatus) => {
    const updated = appointments.map(item => item.id === id ? { ...item, status } : item);
    saveToStorage(updated);
  };

  const resetDemoData = () => {
    saveToStorage(SEEDED_DEMO_APPOINTMENTS);
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        isBookingModalOpen,
        preselectedDeptSlug,
        preselectedDoctorSlug,
        openBookingModal,
        closeBookingModal,
        addAppointment,
        updateStatus,
        resetDemoData,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointments() {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointments must be used within an AppointmentProvider');
  }
  return context;
}
