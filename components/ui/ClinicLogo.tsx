'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface ClinicLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function ClinicLogo({ variant = 'dark', size = 'md' }: ClinicLogoProps) {
  const { language } = useLanguage();
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-sm font-bold',
    md: 'text-base font-bold',
    lg: 'text-lg font-extrabold',
  };

  const subSizes = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-xs font-medium',
  };

  return (
    <Link href="/" className="inline-flex items-center gap-3 group transition-transform hover:opacity-95">
      {/* Medical Emblem */}
      <div
        className={`${iconSizes[size]} rounded-xl flex items-center justify-center shadow-sm relative overflow-hidden transition-all duration-300 group-hover:scale-105 ${
          isDark
            ? 'bg-gradient-to-br from-[#173F47] to-[#267D88] text-white shadow-teal-900/10'
            : 'bg-white/10 backdrop-blur-md text-white border border-white/20'
        }`}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/5 h-3/5"
        >
          {/* Stylized Modern Medical Cross & Crescent Leaf */}
          <path
            d="M20 6C12.268 6 6 12.268 6 20C6 27.732 12.268 34 20 34C27.732 34 34 27.732 34 20"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="opacity-40"
          />
          <path
            d="M20 11V29M11 20H29"
            stroke={isDark ? '#D8F287' : '#D8F287'}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="20" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <span
          className={`${titleSizes[size]} tracking-tight font-extrabold ${
            isDark ? 'text-[#173F47]' : 'text-white'
          }`}
        >
          {language === 'ar' ? 'مجمع ميلا نجد الطبي' : 'Mila Najd Medical'}
        </span>
        <span
          className={`${subSizes[size]} ${
            isDark ? 'text-[#647B80]' : 'text-teal-100/80'
          }`}
        >
          {language === 'ar'
            ? 'الرياض • حي العارض'
            : 'Complex • Riyadh, Al Aarid'}
        </span>
      </div>
    </Link>
  );
}
