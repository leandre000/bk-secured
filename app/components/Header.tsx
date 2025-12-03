'use client';

import { useState } from 'react';
import { Search, Bell, User } from 'lucide-react';
import NotificationPopup from './NotificationPopup';
import MonitoringPopup from './MonitoringPopup';

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMonitoring, setShowMonitoring] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-slate-200 px-6 py-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">Welcome Back</h1>
            <p className="text-base lg:text-lg text-slate-500 mt-2">Manage your accounts and transactions securely</p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search transactions, accounts..."
                className="pl-11 pr-4 py-3 w-64 border border-slate-200 text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 bg-slate-50 text-base"
              />
            </div>
            
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg relative transition-colors"
              >
                <Bell size={20} />
                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              
              {showNotifications && (
                <NotificationPopup 
                  isOpen={showNotifications} 
                  onClose={() => setShowNotifications(false)} 
                />
              )}
            </div>
            
            {/* Profile */}
            <div className="relative">
              <button 
                onClick={() => setShowMonitoring(!showMonitoring)}
                className="flex items-center gap-3 p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-md">
                  <User size={18} className="text-white" />
                </div>
              </button>
              
              {showMonitoring && (
                <MonitoringPopup 
                  isOpen={showMonitoring} 
                  onClose={() => setShowMonitoring(false)} 
                />
              )}
            </div>
          </div>
        </div>
      </header>


    </>
  );
}