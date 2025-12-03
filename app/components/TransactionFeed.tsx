'use client';

import { useState } from 'react';
import { Activity } from 'lucide-react';
import TransactionDetailsPopup from './TransactionDetailsPopup';

interface Transaction {
  name: string;
  amount: string;
  location: string;
  app: string;
  type: string;
  status: string;
  time: string;
}

export default function TransactionFeed() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [showTransactionDetails, setShowTransactionDetails] = useState(false);
  const transactions = [
    {
      name: 'John Doe',
      amount: '$25,000.0',
      location: 'Kigali, Rwanda',
      app: 'via Mobile App',
      type: 'Transfer',
      status: 'pending',
      time: '2m',
    },
    {
      name: 'John Doe',
      amount: '$25,000.0',
      location: 'Kigali, Rwanda',
      app: 'via Web App',
      type: 'Withdrawal',
      status: 'completed',
      time: '5m',
    },
    {
      name: 'John Doe',
      amount: '$25,000.0',
      location: 'Kigali, Rwanda',
      app: 'via Web App',
      type: 'Transfer',
      status: 'flagged',
      time: '8m',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'flagged':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <Activity className="h-5 w-5 text-green-500" />
        <h3 className="text-lg font-semibold text-gray-900">Real-Time Transaction Feed</h3>
      </div>
      
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <div 
            key={index} 
            onClick={() => {
              setSelectedTransaction(transaction);
              setShowTransactionDetails(true);
            }}
            className="flex cursor-pointer items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">
                  {transaction.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">{transaction.name}</span>
                  <span className="font-bold text-gray-900">{transaction.amount}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>{transaction.location}</span>
                  <span>•</span>
                  <span>{transaction.app}</span>
                  <span>•</span>
                  <span>{transaction.type}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                {transaction.status}
              </span>
              <span className="text-sm text-gray-500">{transaction.time}</span>
            </div>
          </div>
        ))}
      </div>
      
      <TransactionDetailsPopup 
        isOpen={showTransactionDetails}
        onClose={() => setShowTransactionDetails(false)}
        transaction={selectedTransaction}
      />
    </div>
  );
}