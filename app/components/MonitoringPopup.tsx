'use client';

import { useEffect, useRef } from 'react';
import { Activity, TrendingUp, Shield, AlertCircle } from 'lucide-react';

interface MonitoringPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MonitoringPopup({ isOpen, onClose }: MonitoringPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const stats = [
    {
      label: 'System Active',
      value: '254 TPS',
      icon: Activity,
      color: 'text-green-500',
    },
    {
      label: 'Total Processed',
      value: '16,283',
      icon: TrendingUp,
      color: 'text-blue-500',
    },
    {
      label: 'Secure',
      value: '16,283',
      icon: Shield,
      color: 'text-green-500',
    },
    {
      label: 'Flagged',
      value: '72',
      icon: AlertCircle,
      color: 'text-red-500',
    },
  ];

  return (
    <div 
      ref={popupRef}
      className="absolute top-12 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
    >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-500" />
              <h3 className="text-lg font-semibold text-gray-900">Real-Time Monitoring</h3>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <span className="text-xl">×</span>
            </button>
          </div>
        </div>
        
        <div className="p-4 space-y-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                  <span className="text-gray-700">{stat.label}</span>
                </div>
                <span className="font-semibold text-gray-900">{stat.value}</span>
              </div>
            );
          })}
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Success rate:</span>
              <span className="font-semibold text-green-600">99.93%</span>
            </div>
          </div>
        </div>
      </div>
  );
}