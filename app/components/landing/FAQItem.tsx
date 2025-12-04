/**
 * FAQ Accordion Item Component
 * Reusable component for FAQ section
 */

'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-200 hover:border-primary-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-slate-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-primary-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-400" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50">
          {answer}
        </div>
      </div>
    </div>
  );
}

