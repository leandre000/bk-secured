'use client';

import { MapPin } from 'lucide-react';

export default function LocationActivity() {
  const locations = [
    { city: 'Kigali, Rwanda', transactions: '1247 txns', status: 'high' },
    { city: 'Kigali, Rwanda', transactions: '1247 txns', status: 'normal' },
    { city: 'Kigali, Rwanda', transactions: '1247 txns', status: 'normal' },
    { city: 'Kigali, Rwanda', transactions: '1247 txns', status: 'normal' },
    { city: 'Kigali, Rwanda', transactions: '1247 txns', status: 'normal' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'high':
        return 'bg-yellow-100 text-yellow-800';
      case 'normal':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <MapPin className="h-5 w-5 text-blue-500" />
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity by Location</h3>
      </div>
      
      <div className="space-y-4">
        {locations.map((location, index) => (
          <div key={index} className="flex cursor-pointer items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium text-gray-900">{location.city}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">{location.transactions}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(location.status)}`}>
                {location.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}