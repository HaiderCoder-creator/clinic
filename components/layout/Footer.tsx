'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, ExternalLink, ShieldCheck, ChevronRight, CheckCircle2, Building2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CLINIC_INFO, VERIFIED_DEPARTMENTS } from '@/lib/data';
import ClinicLogo from '../ui/ClinicLogo';

export default function Footer() {
  const { t, language, isRTL } = useLanguage();

  return (
    <footer className="bg-[#173F47] text-white pt-16 pb-12 border-t border-teal-900/40">
      <div className="clinic-container">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-teal-800/50">
          
          {/* Col 1: About & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <ClinicLogo variant="light" size="lg" />
            <p className="text-teal-100/80 text-sm leading-relaxed max-w-sm pt-2">
              {t.footer.aboutSummary}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-900/60 border border-teal-700/50 text-xs text-teal-200">
                <ShieldCheck className="w-4 h-4 text-[#D8F287] shrink-0" />
                <span>{t.footer.verifiedSourceNote}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Verified Departments (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D8F287]"></span>
              <span>{t.footer.deptsTitle}</span>
            </h3>
            <ul className="space-y-2 text-sm text-teal-100/80">
              {VERIFIED_DEPARTMENTS.map((dept) => (
                <li key={dept.id}>
                  <Link
                    href={`/departments/${dept.slug}`}
                    className="hover:text-[#D8F287] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-xs text-teal-400 opacity-60 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{language === 'ar' ? dept.nameAr : dept.nameEn}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D8F287]"></span>
              <span>{t.footer.quickLinks}</span>
            </h3>
            <ul className="space-y-2 text-sm text-teal-100/80">
              <li>
                <Link href="/" className="hover:text-[#D8F287] transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/departments" className="hover:text-[#D8F287] transition-colors">
                  {t.nav.departments}
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-[#D8F287] transition-colors">
                  {t.nav.doctors}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D8F287] transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D8F287] transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link href="/demo-admin" className="text-[#D8F287] font-semibold hover:underline">
                  {t.nav.demoAdmin}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Directions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D8F287]"></span>
              <span>{t.footer.contactTitle}</span>
            </h3>
            <div className="space-y-3 text-sm text-teal-100/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D8F287] shrink-0 mt-0.5" />
                <span>{language === 'ar' ? CLINIC_INFO.fullAddressAr : CLINIC_INFO.fullAddressEn}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D8F287] shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.phoneClean}`}
                  className="font-bold text-white hover:text-[#D8F287] transition-colors"
                  dir="ltr"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-teal-800/80 hover:bg-teal-700 text-white text-xs font-semibold transition-colors border border-teal-600/30"
                >
                  <Building2 className="w-3.5 h-3.5 text-[#D8F287]" />
                  <span>{t.topStrip.directions}</span>
                  <ExternalLink className="w-3 h-3 text-teal-300" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Presentation Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-teal-200/70">
          <p className="max-w-2xl text-center md:text-start leading-relaxed">
            {t.footer.disclaimer}
          </p>
          <div className="text-center md:text-end shrink-0">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
