tsx
/**
📊 DASHBOARD - TRADEHASHTAG
Dashboard placeholder para demonstração
 */

import React from 'react';
import { TrendingUp, LogOut, User, Activity, DollarSign, TrendingDown } from 'lucide-react';

interface DashboardProps {
  user: {
    email: string;
    name: string;
  };
  onLogout: () => void;
}

export function Dashboard({ user, onLogout }: DashboardProps) {
  return (
    <div className="min-h-screen w-full" style={{ background: '#0a0e1a' }}>
      {/* Header */}
      <header 
        className="border-b px-6 py-4"
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          borderColor: 'rgba(255, 255, 255, 0.05)'
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ 
                background: 'linear-gradient(135deg, #00ff88, #00c8ff)',
                boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)'
              }}
            >
              <TrendingUp size={20} color="white" />
            </div>
            <span className="text-xl font-bold text-white">
              Trade<span style={{ color: '#00ff88' }}>#</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
              <User size={18} style={{ color: '#00ff88' }} />
              <div>
                <div className="text-white text-sm font-semibold">{user.name}</div>
                <div className="text-white/50 text-xs">{user.email}</div>
              </div>
            </div>

            <button
              onClick={onLogout}
              className="px-4 py-2 rounded-xl transition-all hover:scale-105 flex items-center gap-2"
              style={{ 
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#ef4444'
              }}
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome back, <span style={{ color: '#00ff88' }}>{user.name.split(' ')[0]}</span>!
          </h1>
          <p className="text-white/60">
            Your AI-powered trading dashboard
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              icon: Activity,
              label: 'Market Status',
              value: 'Online',
              change: '+0.0%',
              positive: true,
              color: '#00ff88'
            },
            {
              icon: DollarSign,
              label: 'Portfolio Value',
              value: '$0.00',
              change: '+0.00%',
              positive: true,
              color: '#00c8ff'
            },
            {
              icon: TrendingUp,
              label: 'Today P&L',
              value: '$0.00',
              change: '0.00%',
              positive: true,
              color: '#a855f7'
            }
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ 
                    background: `${stat.color}20`,
                    boxShadow: `0 0 20px ${stat.color}40`
                  }}
                >
                  <stat.icon size={24} style={{ color: stat.color }} />
                </div>
                <span 
                  className="text-sm font-semibold px-2 py-1 rounded"
                  style={{
                    background: stat.positive ? 'rgba(0, 255, 136, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    color: stat.positive ? '#00ff88' : '#ef4444'
                  }}
                >
                  {stat.change}
                </span>
              </div>
              <div className="text-white/50 text-sm mb-1">{stat.label}</div>
              <div className="text-white text-2xl font-bold">{stat.value}</div>
            </div>
          ))}
        </div>
