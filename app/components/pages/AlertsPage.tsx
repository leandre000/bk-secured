'use client';

import { AlertTriangle } from 'lucide-react';

export default function AlertsPage() {
  const alerts = [
    {
      title: 'Suspicious Login Pattern',
      description: 'Multiple failed login attempts from new device',
      account: 'Account: JD - 4567890',
      time: '2 minutes ago',
      severity: 'HIGH',
      status: 'Investigating',
      actions: ['Investigate', 'Dismiss'],
    },
    {
      title: 'Unusual Transaction Amount',
      description: 'Unusual Transaction Amount',
      account: 'Account: JD - 4567890',
      time: '5 minutes ago',
      severity: 'MEDIUM',
      status: 'Investigating',
      actions: ['Investigate', 'Dismiss'],
    },
    {
      title: 'Suspicious Login Pattern',
      description: 'Multiple failed login attempts from new device',
      account: 'Account: JD - 4567890',
      time: '8 minutes ago',
      severity: 'HIGH',
      status: 'Reviewing',
      actions: ['Investigate', 'Dismiss'],
    },
    {
      title: 'Geolocation Anomaly',
      description: 'Login from Nigeria - User typically in US',
      account: 'Account: JD - 4567890',
      time: '4 minutes ago',
      severity: 'HIGH',
      status: 'Blocked',
      actions: ['Investigate', 'Dismiss'],
    },
    {
      title: 'Unusual Transaction Amount',
      description: 'Unusual Transaction Amount',
      account: 'Account: JD - 4567890',
      time: '6 minutes ago',
      severity: 'MEDIUM',
      status: 'Investigating',
      actions: ['Investigate', 'Dismiss'],
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'HIGH':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'MEDIUM':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'LOW':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Investigating':
        return 'bg-blue-100 text-blue-800';
      case 'Reviewing':
        return 'bg-yellow-100 text-yellow-800';
      case 'Blocked':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          <h1 className="text-2xl font-semibold text-gray-900">Security Alerts</h1>
        </div>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {alerts.map((alert, index) => (
            <div key={index} className={`p-4 rounded-lg border-4 `}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <h3 className="font-semibold text-gray-900">{alert.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                      {alert.severity}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-2">{alert.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>{alert.account}</span>
                    <span>•</span>
                    <span>{alert.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {alert.actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        className={`px-3 py-1 rounded text-sm font-medium cursor-pointer ${
                          action === 'Investigate' 
                            ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="ml-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(alert.status)}`}>
                    {alert.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}