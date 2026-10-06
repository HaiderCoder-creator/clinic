'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { FAQ_ITEMS } from '@/lib/data';

export default function FaqSection() {
  const { t, language } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F7F9F8]">
      <div className="clinic-container max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="clinic-badge bg-[#EEF6F6] text-[#267D88] border border-[#CDE1E0]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faq.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#173F47] tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-sm sm:text-base text-[#647B80]">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 text-start">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const question = language === 'ar' ? item.questionAr : item.questionEn;
            const answer = language === 'ar' ? item.answerAr : item.answerEn;

            return (
              <div
                key={item.id}
                className={`clinic-card transition-all duration-200 overflow-hidden bg-white ${
                  isOpen ? 'border-[#267D88]/40 shadow-xs' : 'border-[#E3ECEB]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-start font-bold text-sm sm:text-base text-[#173F47] hover:text-[#267D88] transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#EEF6F6] text-[#267D88] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#267D88] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#647B80] leading-relaxed border-t border-[#F0F5F5] pt-3 animate-in fade-in-50 duration-200"
                  >
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
