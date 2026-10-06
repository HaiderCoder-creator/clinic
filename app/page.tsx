import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ClinicFeatures from '@/components/home/ClinicFeatures';
import DepartmentHighlights from '@/components/home/DepartmentHighlights';
import DoctorHighlights from '@/components/home/DoctorHighlights';
import AppointmentFlowPreview from '@/components/home/AppointmentFlowPreview';
import LocationMapSection from '@/components/home/LocationMapSection';
import FaqSection from '@/components/home/FaqSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClinicFeatures />
      <DepartmentHighlights />
      <DoctorHighlights />
      <AppointmentFlowPreview />
      <LocationMapSection />
      <FaqSection />
    </>
  );
}
