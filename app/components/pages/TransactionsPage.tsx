'use client';

import { useState } from 'react';
import { Activity } from 'lucide-react';
import TransactionDetailsPopup from '../TransactionDetailsPopup';

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

export default function TransactionsPage() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [showTransactionDetails, setShowTransactionDetails] = useState(false);
  const transactions = [
    {
      name: 'John Doe',
      amount: '$25,000.0',
      location: 'Kigali, Rwanda',
      app: 'via Mobile App',
      type: 'Transfer',
      status: 'Approved',
      time: 'now',
      risk: null,
    },
    {
      name: 'John Doe',
      amount: '$25,000.0',
      location: 'Kigali, Rwanda',
      app: 'via Web App',
      type: 'Transfer',
      status: 'Suspicious',
      time: '10 min ago',
      risk: '89%',
    },
    {
      name: 'John Doe',
      amount: '$25,000.0',
      location: 'Kigali, Rwanda',
      app: 'via ATM',
      type: 'Payment',
      status: 'Blocked',
      time: '15 min ago',
      risk: '93%',
    },
    {
      name: 'John Doe',
      amount: '$25,000.0',
      location: 'Kigali, Rwanda',
      app: 'via Web App',
      type: 'Withdrawal',
      status: 'Suspicious',
      time: '18 min ago',
      risk: '73%',
    },
    {
      name: 'John Doe',
      amount: '$25,000.0',
      location: 'Kigali, Rwanda',
      app: 'via Mobile App',
      type: 'Transfer',
      status: 'Approved',
      time: 'now',
      risk: null,
    },
    {
      name: 'John Doe',
      amount: '$25,000.0',
      location: 'Kigali, Rwanda',
      app: 'via Web App',
      type: 'Transfer',
      status: 'Suspicious',
      time: '18 min ago',
      risk: '3%',
    },
    {
      name: 'John Doe',
      amount: '$25,000.0',
      location: 'Kigali, Rwanda',
      app: 'via ATM',
      type: 'Payment',
      status: 'Blocked',
      time: '19 min ago',
      risk: '93%',
    },
    {
      name: 'John Doe',
      amount: '$25,000.0',
      location: 'Kigali, Rwanda',
      app: 'via Web App',
      type: 'Transfer',
      status: 'Suspicious',
      time: '19 min ago',
      risk: '23%',
    },
    {
      name: 'John Doe',
      amount: '$25,000.0',
      location: 'Kigali, Rwanda',
      app: 'via Mobile App',
      type: 'Transfer',
      status: 'Approved',
      time: 'now',
      risk: null,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Suspicious':
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
          <Activity className="h-5 w-5 text-green-500" />
          <h1 className="text-2xl font-semibold text-gray-900">Real-Time Transaction Feed</h1>
        </div>
      </div>
      
      <div className="p-6">
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
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(transaction.status)}`}>
                  {transaction.status}
                </span>
                <span className="text-sm text-gray-500">{transaction.time}</span>
                {transaction.risk && (
                  <span className="text-sm font-medium text-red-600">
                    Risk: {transaction.risk}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <TransactionDetailsPopup 
        isOpen={showTransactionDetails}
        onClose={() => setShowTransactionDetails(false)}
        transaction={selectedTransaction}
      />
    </div>
  );
}