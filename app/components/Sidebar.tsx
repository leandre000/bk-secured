'use client';

import { BarChart3, AlertTriangle, FileText, Settings, LogOut, Eye } from 'lucide-react';
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { LuBadgeDollarSign } from "react-icons/lu";
import { TbSchoolBell } from "react-icons/tb";


interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: AiOutlineAppstoreAdd},
    { id: 'transactions', label: 'Transactions', icon: LuBadgeDollarSign },
    { id: 'alerts', label: 'Alerts', icon: TbSchoolBell },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-slate-800 text-white flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold">Fraud Detection</h1>
      </div>
      
      <nav className="flex-1 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full cursor-pointer flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                isActive 
                  ? 'bg-[#0BC8BC] text-white' 
                  : 'text-gray-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-slate-700">
        <button 
          onClick={() => {
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('userEmail');
            window.location.href = '/auth/signin';
          }}
          className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-white rounded-lg transition-colors cursor-pointer"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}