'use client';

import { ArrowUpRight, AlertTriangle, Shield, TrendingUp } from 'lucide-react';

export default function StatsCards() {
  const stats = [
    {
      title: 'Total Transactions',
      value: '2,847,592',
      icon: ArrowUpRight,
      iconColor: 'text-gray-800',
      bgColor: 'bg-gray-80',
      headingColor: 'text-gray-800',
    },
    {
      title: 'Fraud Detected',
      value: '1,247',
      icon: AlertTriangle,
      iconColor: 'text-red-500',
      bgColor: 'bg-red-50',
      headingColor: 'text-red-500',
    },
    {
      title: 'Prevented Losses',
      value: '$2,847,592',
      icon: Shield,
      iconColor: 'text-[#20582C]',
      bgColor: 'bg-green-50',
      headingColor: 'text-[#20582C]',
    },
    {
      title: 'Detection Rate',
      value: '99.7%',
      icon: TrendingUp,
      iconColor: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      headingColor: 'text-yellow-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <p className={`text-2xl font-bold ${stat.headingColor}`}>{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <Icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
