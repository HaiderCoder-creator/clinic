export type Language = 'ar' | 'en';

export interface Department {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  shortDescAr: string;
  shortDescEn: string;
  longDescAr: string;
  longDescEn: string;
  icon: string;
  servicesAr: string[];
  servicesEn: string[];
  isVerified: boolean;
  verifiedSource?: string;
}

export interface Doctor {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  titleAr: string;
  titleEn: string;
  specialtyAr: string;
  specialtyEn: string;
  departmentSlug: string;
  bioAr: string;
  bioEn: string;
  imageUrl: string;
  isVerified: boolean;
  sourceVerification: string;
}

export type AppointmentStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface AppointmentRequest {
  id: string;
  referenceNumber: string;
  patientName: string;
  phone: string;
  departmentSlug: string;
  doctorSlug?: string;
  preferredDate: string;
  timeSlot: string;
  notes?: string;
  status: AppointmentStatus;
  createdAt: string;
}

export interface TimeSlot {
  id: string;
  timeAr: string;
  timeEn: string;
  period: 'morning' | 'evening';
}
