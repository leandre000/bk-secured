'use client';

import StatsCards from '../StatsCards';
import TransactionFeed from '../TransactionFeed';
import LocationActivity from '../LocationActivity';
import RiskAssessment from '../RiskAssessment';
import PreventedLossesChart from '../PreventedLossesChart';

export default function OverviewPage() {
  return (
    <>
      {/* Stats Cards with Blue Border */}
      <div className="rounded-lg p-4 bg-white">
        <StatsCards />
      </div>
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Risk Assessment */}
        <RiskAssessment />
        
        {/* Prevented Losses Chart */}
        <PreventedLossesChart />
        
        {/* Transaction Feed */}
        <TransactionFeed />
        
        {/* Location Activity */}
        <LocationActivity />
      </div>
    </>
  );
}