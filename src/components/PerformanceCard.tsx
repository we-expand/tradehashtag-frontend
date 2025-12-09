import React from 'react';
import { DollarSign, TrendingUp, Activity } from 'lucide-react';

interface PerformanceCardProps {
  data: {
    todayProfit: number;
    winRate: number;
    totalTrades: number;
  };
}

export function PerformanceCard({ data }: PerformanceCardProps) {
  const isPositive = data.todayProfit >= 0;

  return (
    <div className="p-6 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <h3 className="text-lg font-bold text-white mb-4">Today&apos;s Performance</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <DollarSign size={16} style={{ color: '#00c8ff' }} />
            <span className="text-xs text-white/60">Profit</span>
          </div>
          <div 
            className="text-2xl font-bold"
            style={{ color: isPositive ? '#00ff88' : '#ef4444' }}
          >
            {isPositive ? '+' : ''}${data.todayProfit.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={16} style={{ color: '#00c8ff' }} />
            <span className="text-xs text-white/60">Win Rate</span>
          </div>
          <div className="text-2xl font-bold text-white">
            {data.winRate}%
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Activity size={16} style={{ color: '#00c8ff' }} />
            <span className="text-xs text-white/60">Trades</span>
          </div>
          <div className="text-2xl font-bold text-white">
            {data.totalTrades}
          </div>
        </div>
      </div>
    </div>
  );
}
