'use client';

import { useEffect, useRef } from 'react';
import { MapPin, Smartphone, Globe, Clock, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface Transaction {
  name: string;
  amount: string;
  location: string;
  app: string;
  type: string;
  status: string;
  time: string;
  risk?: string | null;
}

interface TransactionDetailsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  transaction: Transaction | null;
}

export default function TransactionDetailsPopup({ isOpen, onClose, transaction }: TransactionDetailsPopupProps) {
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

  if (!isOpen || !transaction) return null;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'Suspicious':
      case 'pending':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'Blocked':
      case 'flagged':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'Suspicious':
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'Blocked':
      case 'flagged':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getAppIcon = (app: string) => {
    if (app.includes('Mobile')) return <Smartphone className="h-4 w-4" />;
    if (app.includes('Web')) return <Globe className="h-4 w-4" />;
    return <Globe className="h-4 w-4" />;
  };

  return (
    <div 
      ref={popupRef}
      className="fixed top-20 right-6 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
    >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Transaction Details</h3>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <span className="text-xl">×</span>
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          {/* User and Amount */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-lg font-medium text-gray-600">
                {transaction.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{transaction.name}</h4>
              <p className="text-2xl font-bold text-gray-900">{transaction.amount}</p>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-3">
            {getStatusIcon(transaction.status)}
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(transaction.status)}`}>
              {transaction.status}
            </span>
            {transaction.risk && (
              <span className="text-sm font-medium text-red-600">
                Risk: {transaction.risk}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700">Location:</span>
              <span className="font-medium text-gray-900">{transaction.location}</span>
            </div>
            
            <div className="flex items-center gap-3">
              {getAppIcon(transaction.app)}
              <span className="text-gray-700">Platform:</span>
              <span className="font-medium text-gray-900">{transaction.app}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700">Type:</span>
              <span className="font-medium text-gray-900">{transaction.type}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700">Time:</span>
              <span className="font-medium text-gray-900">{transaction.time}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 cursor-pointer">
              View Full Details
            </button>
            <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 cursor-pointer">
              Flag Transaction
            </button>
          </div>
        </div>
      </div>
  );
}