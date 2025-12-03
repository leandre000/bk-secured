'use client';

import { Shield, Check } from 'lucide-react';
import { CgTimer } from "react-icons/cg";


export default function RiskAssessment() {
  const riskLevel = 82;
  const assessments = [
    { name: 'Authentication', status: 'Active', icon: Check },
    { name: 'Behavior Analysis', status: 'Monitoring', icon: Check },
    { name: 'Device Fingerprinting', status: 'Enabled', icon: Check },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <CgTimer className="h-5 w-5 text-green-900" />
        <h3 className="text-lg font-semibold text-gray-900">Risk Assessment</h3>
      </div>
      
      {/* Risk Level Circle */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="8"
            />
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="8"
              strokeDasharray={`${(riskLevel / 100) * 314} 314`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-gray-900">{riskLevel}%</span>
          </div>
        </div>
        <p className="text-sm font-medium text-yellow-600 mt-2">Medium Risk</p>
        <p className="text-sm text-gray-600 text-center">
          Current threat level across all channels
        </p>
      </div>
      
      {/* Assessment Items */}
      <div className="space-y-3">
        {assessments.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm text-gray-700">{item.name}</span>
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-green-800" />
                <span className="text-sm text-green-900">{item.status}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}