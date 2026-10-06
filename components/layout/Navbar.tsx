'use client';

import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, CalendarPlus, Globe, Shield, UserCog } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAppointments } from '@/context/AppointmentContext';
import TopHeaderStrip from './TopHeaderStrip';
import ClinicLogo from '../ui/ClinicLogo';

export default function Navbar() {
  const pathname = usePathname();
  const { t, language, toggleLanguage, isRTL } = useLanguage();
  const { openBookingModal } = useAppointments();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/departments', label: t.nav.departments },
    { href: '/doctors', label: t.nav.doctors },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      <TopHeaderStrip />

      <nav
        aria-label="Main Navigation"
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E3ECEB] py-3'
            : 'bg-white border-b border-[#E3ECEB]/80 py-3.5'
        }`}
      >
        <div className="clinic-container flex items-center justify-between gap-4">
          {/* Clinic Brand */}
          <div className="flex items-center gap-6">
            <ClinicLogo size="md" variant="dark" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <NextLink
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                    active
                      ? 'text-[#267D88] bg-[#EEF6F6] font-bold'
                      : 'text-[#183B43] hover:text-[#267D88] hover:bg-[#F7F9F8]'
                  }`}
                >
                  {link.label}
                </NextLink>
              );
            })}

            {/* Demo Admin Shortcut link */}
            <NextLink
              href="/demo-admin"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ml-1 mr-1 ${
                pathname === '/demo-admin'
                  ? 'bg-[#173F47] text-[#D8F287]'
                  : 'bg-[#F0F5F5] text-[#173F47] hover:bg-[#E2ECEB]'
              }`}
            >
              <UserCog className="w-3.5 h-3.5 text-[#267D88]" />
              <span>{t.nav.demoAdmin}</span>
            </NextLink>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#173F47] hover:text-[#267D88] bg-[#F7F9F8] hover:bg-[#EEF4F3] rounded-lg border border-[#E3ECEB] transition-colors"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#267D88]" />
              <span>{t.nav.switchLang}</span>
            </button>

            {/* Request Appointment Button */}
            <button
              onClick={() => openBookingModal()}
              type="button"
              className="clinic-btn-primary text-sm py-2.5 px-4 shadow-sm"
            >
              <CalendarPlus className="w-4 h-4" />
              <span>{t.nav.bookAppointment}</span>
            </button>
          </div>

          {/* Mobile Menu & Quick Book Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => openBookingModal()}
              type="button"
              className="bg-[#267D88] text-white p-2 rounded-lg text-xs font-semibold flex items-center gap-1"
              aria-label={t.nav.bookAppointment}
            >
              <CalendarPlus className="w-4 h-4" />
            </button>

            <button
              onClick={toggleLanguage}
              type="button"
              className="p-2 text-xs font-bold text-[#173F47] bg-[#F7F9F8] rounded-lg border border-[#E3ECEB]"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 text-[#267D88]" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 text-[#173F47] hover:bg-[#F7F9F8] rounded-lg border border-[#E3ECEB]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E3ECEB] bg-white px-4 py-4 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <NextLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    active
                      ? 'text-[#267D88] bg-[#EEF6F6] font-bold'
                      : 'text-[#183B43] hover:bg-[#F7F9F8]'
                  }`}
                >
                  {link.label}
                </NextLink>
              );
            })}

            <NextLink
              href="/demo-admin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-bold bg-[#173F47] text-white"
            >
              <div className="flex items-center gap-2">
                <UserCog className="w-4 h-4 text-[#D8F287]" />
                <span>{t.nav.demoAdmin}</span>
              </div>
              <span className="text-[10px] bg-[#D8F287] text-[#173F47] font-extrabold px-2 py-0.5 rounded">DEMO</span>
            </NextLink>

            <div className="pt-2 border-t border-[#E3ECEB] flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openBookingModal();
                }}
                type="button"
                className="w-full clinic-btn-primary text-sm py-3 justify-center"
              >
                <CalendarPlus className="w-4 h-4" />
                <span>{t.nav.bookAppointment}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
