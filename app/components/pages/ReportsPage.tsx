'use client';

import { FileText, Download, Trash2 } from 'lucide-react';

export default function ReportsPage() {
  const reports = [
    {
      name: 'Weekly Fraud Summary',
      date: '2024-05-15',
      format: 'PDF',
      size: '2.4 MB',
    },
    {
      name: 'Alert Investigation Report',
      date: '2024-05-15',
      format: 'PDF',
      size: '2.8 MB',
    },
    {
      name: 'Transaction Risk Analysis',
      date: '2024-05-15',
      format: 'Excel',
      size: '3.2 MB',
    },
  ];

  const timeFilters = ['24 Hours', '7 Days', '30 Days', '90 Days'];
  const reportTabs = ['Fraud Overview', 'Prevention Analysis', 'Alert Summary'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Fraud Prevention Reports</h1>
          <p className="text-gray-600">Comprehensive analytics and insights</p>
        </div>
        
        <div className="flex items-center gap-3">
          {timeFilters.map((filter, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                filter === '7 Days'
                  ? 'bg-[#20582C] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
          <button className="px-4 py-2 bg-[#20582C] text-white rounded-lg text-sm font-medium hover:bg-green-700 flex items-center gap-2">
            Export Report
          </button>
        </div>
      </div>

      {/* Report Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <div className="flex">
            {reportTabs.map((tab, index) => (
              <button
                key={index}
                className={`px-6 py-4 text-sm font-medium border-b-2 cursor-pointer ${
                  tab === 'Prevention Analysis'
                    ? 'border-[#20582C] text-[#20582C] bg-green-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Generated Reports Section */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="h-5 w-5 text-gray-500" />
            <h3 className="text-lg font-semibold text-gray-900">Generated Reports</h3>
          </div>
          
          <div className="space-y-4 mb-6">
            {reports.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-[#20582C]" />
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900">{report.name}</h4>
                    <p className="text-sm text-gray-500">
                      {report.date} • {report.format} • {report.size}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-400 hover:text-green-600">
                    <Download size={16} className='cursor-pointer'/>
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600">
                    <Trash2 size={16} className='cursor-pointer'/>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Generate New Reports Button */}
          <button className="w-full py-3 bg-[#20582C] text-white rounded-lg font-medium hover:bg-green-800 cursor-pointer flex items-center justify-center gap-2">
            <FileText size={16} />
            Generate New Reports
          </button>
        </div>
      </div>
    </div>
  );
}