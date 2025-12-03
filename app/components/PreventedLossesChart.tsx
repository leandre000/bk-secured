'use client';

import { Shield } from 'lucide-react';


import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function PreventedLossesChart() {
  const data = [
    { month: 'Jan', amount: 45000 },
    { month: 'Feb', amount: 52000 },
    { month: 'Mar', amount: 78000 },
    { month: 'Apr', amount: 65000 },
    { month: 'May', amount: 89000 },
    { month: 'Jun', amount: 72000 },
    { month: 'Jul', amount: 95000 },
    { month: 'Aug', amount: 58000 },
    { month: 'Sep', amount: 82000 },
    { month: 'Oct', amount: 105000 },
    { month: 'Nov', amount: 118000 },
    { month: 'Dec', amount: 92000 },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-[#20582C]" />
          <h3 className="text-lg font-semibold text-gray-900">Prevented Losses</h3>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-[#20582C]">$2,847,592</p>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6A717D' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6A717D' }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Bar 
              dataKey="amount" 
              fill="#20582C" 
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}