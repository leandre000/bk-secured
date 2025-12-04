/**
 * Statistics Card Component
 * Reusable component for displaying statistics
 */

import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
  delay?: number;
}

export default function StatCard({ icon: Icon, value, label, color, delay = 0 }: StatCardProps) {
  return (
    <div className="text-center animate-fade-in-up" style={{ animationDelay: `${delay}s` }}>
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-xl mb-4 shadow-sm hover:scale-110 hover:shadow-md transition-all duration-300">
        <Icon className={`h-8 w-8 ${color}`} />
      </div>
      <div className="text-5xl lg:text-6xl font-bold text-slate-900 mb-2">{value}</div>
      <div className="text-lg lg:text-xl font-semibold text-slate-600">{label}</div>
    </div>
  );
}

