/**
 * Feature Card Component
 * Reusable component for feature display
 */

import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <div 
      className="p-8 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 animate-fade-in-up" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6 hover:scale-110 hover:bg-primary-50 transition-all duration-300">
        <Icon className="h-8 w-8 text-gray-800" />
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-lg lg:text-xl">
        {description}
      </p>
    </div>
  );
}

