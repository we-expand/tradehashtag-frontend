tsx
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
    <div className="p-6 rounded-2xl transition-all hover:scale-105" 
         style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{asset.icon}</span>
          <div>
            <h3 className="text-sm" style={{ color: 'var(--text-primary)' }}>{asset.name}</h3>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{asset.symbol}</p>
          </div>
        </div>
        {isPositive ? (
          <TrendingUp size={20} style={{ color: 'var(--success)' }} />
        ) : (
          <TrendingDown size={20} style={{ color: 'var(--danger)' }} />
        )}
      </div>

      {/* Price */}
      <div className="mb-3">
        <div className="text-2xl mb-1" style={{ color: 'var(--text-primary)' }}>
          ${data.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <div className="flex items-center gap-2">
          <span 
            className="text-sm px-2 py-1 rounded"
            style={{ 
              color: isPositive ? 'var(--success)' : 'var(--danger)',
              background: isPositive ? 'rgba(0, 255, 136, 0.1)' : 'rgba(255, 68, 68, 0.1)'
            }}
          >
            {isPositive ? '+' : ''}{data.change.toFixed(2)} ({data.changePercent.toFixed(2)}%)
          </span>
        </div>
      </div>

      {/* Volume & High/Low */}
      <div className="pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <p style={{ color: 'var(--text-secondary)' }}>24h High</p>
            <p style={{ color: 'var(--text-primary)' }}>${data.high.toLocaleString()}</p>
          </div>
          <div>
            <p style={{ color: 'var(--text-secondary)' }}>24h Low</p>
            <p style={{ color: 'var(--text-primary)' }}>${data.low.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
