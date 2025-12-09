tsx
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
    <div className="p-6 rounded-2xl" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
      <h3 className="text-lg mb-4" style={{ color: 'var(--text-primary)' }}>Today's Performance</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profit */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <DollarSign size={16} style={{ color: 'var(--accent)' }} />
            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>Profit</span>
          </div>
          <div 
            className="text-2xl"
            style={{ color: isPositive ? 'var(--success)' : 'var(--danger)' }}
          >
            {isPositive ? '+' : ''}${data.todayProfit.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
        </div>

        {/* Win Rate */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={16} style={{ color: 'var(--accent)' }} />
            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>Win Rate</span>
          </div>
          <div className="text-2xl" style={{ color: 'var(--text-primary)' }}>
            {data.winRate}%
          </div>
        </div>

        {/* Total Trades */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Activity size={16} style={{ color: 'var(--accent)' }} />
            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>Trades</span>
          </div>
          <div className="text-2xl" style={{ color: 'var(--text-primary)' }}>
            {data.totalTrades}
          </div>
        </div>
      </div>
    </div>
  );
}
```

Commit: `feat: adicionar PerformanceCard component`

---

📄 4. CRIAR `src/services/marketData.ts`

IMPORTANTE: Criar dentro de `src/services/` (você precisa criar a pasta `services` primeiro!)

Passos:
No GitHub, vá em `src/`
Clique em "Add file" → "Create new file"
Nome: `services/marketData.ts` (vai criar a pasta automaticamente)

```typescript
export interface MarketData {
  price: number;
  change: number;
  changePercent: number;
  high: number;
  low: number;
  volume: number;
  timestamp: number;
}

export interface AIScore {
  score: number;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  confidence: number;
  signals: {
    technical: number;
    fundamental: number;
    sentiment: number;
  };
}

// Mock data generation
const generateMockPrice = (base: number, volatility: number = 0.02): number => {
  const change = (Math.random() - 0.5) * base * volatility;
  return base + change;
};

export const fetchGoldData = async (): Promise<MarketData> => {
  const basePrice = 2050;
  const price = generateMockPrice(basePrice, 0.01);
  const change = price - basePrice;
  
  return {
    price,
    change,
    changePercent: (change / basePrice) * 100,
    high: price * 1.005,
    low: price * 0.995,
    volume: Math.random() * 1000000,
    timestamp: Date.now()
  };
};

export const fetchSP500Data = async (): Promise<MarketData> => {
  const basePrice = 4750;
  const price = generateMockPrice(basePrice, 0.015);
  const change = price - basePrice;
  
  return {
    price,
    change,
    changePercent: (change / basePrice) * 100,
    high: price * 1.008,
    low: price * 0.992,
    volume: Math.random() * 5000000,
    timestamp: Date.now()
  };
};

export const fetchBitcoinData = async (): Promise<MarketData> => {
  const basePrice = 42000;
  const price = generateMockPrice(basePrice, 0.03);
  const change = price - basePrice;
  
  return {
    price,
    change,
    changePercent: (change / basePrice) * 100,
    high: price * 1.02,
    low: price * 0.98,
    volume: Math.random() * 10000000,
    timestamp: Date.now()
  };
};

export const calculateAIScore = async (): Promise<AIScore> => {
  const technical = Math.floor(Math.random() * 40) + 60;
  const fundamental = Math.floor(Math.random() * 40) + 50;
  const sentiment = Math.floor(Math.random() * 40) + 55;
  
  const score = Math.floor((technical + fundamental + sentiment) / 3);
  
  return {
    score,
    sentiment: score >= 60 ? 'bullish' : score >= 40 ? 'neutral' : 'bearish',
    confidence: Math.floor(Math.random() * 20) + 75,
    signals: {
      technical,
      fundamental,
      sentiment
    }
  };
};

export const subscribeToMarketData = (callback: (data: MarketData[]) => void) => {
  const interval = setInterval(async () => {
    const [gold, sp500, btc] = await Promise.all([
      fetchGoldData(),
      fetchSP500Data(),
      fetchBitcoinData()
    ]);
    callback([gold, sp500, btc]);
  }, 3000); // Update every 3 seconds

  return () => clearInterval(interval);
};
