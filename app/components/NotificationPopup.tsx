'use client';

import { useEffect, useRef } from 'react';
import { AlertTriangle, Activity, TrendingUp } from 'lucide-react';

interface NotificationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationPopup({ isOpen, onClose }: NotificationPopupProps) {
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

  const notifications = [
    {
      title: 'Suspicious Login Pattern',
      description: 'Multiple failed login attempts from new device',
      account: 'Account: JD - ****1234',
      time: '2 minutes ago',
      status: 'Investigating',
      icon: AlertTriangle,
      iconColor: 'text-yellow-500',
    },
    {
      title: 'Unusual Transaction Amount',
      description: 'Unusual Transaction Amount',
      account: 'Account: JD - ****1234',
      time: '5 minutes ago',
      status: 'Reviewing',
      icon: Activity,
      iconColor: 'text-yellow-500',
    },
    {
      title: 'Geolocation Anomaly',
      description: 'Login from Nigeria - User typically in US',
      account: 'Account: JD - ****1234',
      time: '8 minutes ago',
      status: 'Blocked',
      icon: AlertTriangle,
      iconColor: 'text-red-500',
    },
  ];

  return (
    <div 
      ref={popupRef}
      className="absolute top-12 right-0 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-hidden"
    >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              <h3 className="text-lg font-semibold text-gray-900">Security Alerts</h3>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <span className="text-xl">×</span>
            </button>
          </div>
        </div>
        
        <div className="max-h-80 overflow-y-auto">
          {notifications.map((notification, index) => {
            const Icon = notification.icon;
            return (
              <div key={index} className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-start gap-3">
                  <Icon className={`h-5 w-5 mt-1 ${notification.iconColor}`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-900">{notification.title}</h4>
                      <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                        {notification.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{notification.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{notification.account}</span>
                      <span>{notification.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <button className="w-full text-center text-teal-600 hover:text-teal-700 font-medium cursor-pointer">
            View All Alerts
          </button>
        </div>
      </div>
  );
}