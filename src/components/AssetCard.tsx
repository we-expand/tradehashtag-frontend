import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { MarketData } from '../services/marketData';

interface AssetCardProps {
  data: MarketData;
  assetName: 'gold' | 'sp500' | 'bitcoin';
}

export function AssetCard({ data, assetName }: AssetCardProps) {
  const isPositive = data.change >= 0;
  
  const getAssetInfo = () => {
    switch (assetName) {
      case 'gold':
        return { name: 'Gold', symbol: 'XAU/USD', icon: '🥇' };
      case 'sp500':
        return { name: 'S&P 500', symbol: 'ES', icon: '📈' };
      case 'bitcoin':
        return { name: 'Bitcoin', symbol: 'BTC/USD', icon: '₿' };
    }
  };

  const asset = getAssetInfo();

  return (
    <div 
      className="p-6 rounded-2xl transition-all hover:scale-105" 
      style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{asset.icon}</span>
          <div>
            <h3 className="text-sm font-bold text-white">{asset.name}</h3>
            <p className="text-xs text-white/50">{asset.symbol}</p>
          </div>
        </div>
        {isPositive ? (
          <TrendingUp size={20} style={{ color: '#00ff88' }} />
        ) : (
          <TrendingDown size={20} style={{ color: '#ef4444' }} />
        )}
      </div>

      <div className="mb-3">
        <div className="text-2xl font-bold text-white mb-1">
          ${data.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <div className="flex items-center gap-2">
          <span 
            className="text-sm px-2 py-1 rounded font-semibold"
            style={{ 
              color: isPositive ? '#00ff88' : '#ef4444',
              background: isPositive ? 'rgba(0, 255, 136, 0.1)' : 'rgba(239, 68, 68, 0.1)'
            }}
          >
            {isPositive ? '+' : ''}{data.change.toFixed(2)} ({data.changePercent.toFixed(2)}%)
          </span>
        </div>
      </div>

      <div className="pt-3" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <p className="text-white/50">24h High</p>
            <p className="text-white font-semibold">${data.high.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-white/50">24h Low</p>
            <p className="text-white font-semibold">${data.low.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
