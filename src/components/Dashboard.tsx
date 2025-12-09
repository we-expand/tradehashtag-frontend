import React, { useState, useEffect } from 'react';
import { AIScorePanel } from './AIScorePanel';
import { AssetCard } from './AssetCard';
import { PerformanceCard } from './PerformanceCard';
import { 
  MarketData, 
  AIScore, 
  fetchGoldData, 
  fetchSP500Data, 
  fetchBitcoinData,
  calculateAIScore
} from '../services/marketData';

export default function Dashboard() {
  const [goldData, setGoldData] = useState<MarketData | null>(null);
  const [sp500Data, setSp500Data] = useState<MarketData | null>(null);
  const [btcData, setBtcData] = useState<MarketData | null>(null);
  const [aiScore, setAiScore] = useState<AIScore | null>(null);
  const [loading, setLoading] = useState(true);

  const performanceData = {
    todayProfit: 1250.00,
    winRate: 73,
    totalTrades: 11
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const [gold, sp500, btc, score] = await Promise.all([
          fetchGoldData(),
          fetchSP500Data(),
          fetchBitcoinData(),
          calculateAIScore()
        ]);

        setGoldData(gold);
        setSp500Data(sp500);
        setBtcData(btc);
        setAiScore(score);
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };

    loadData();

    const interval = setInterval(loadData, 3000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !aiScore) {
    return (
      <div className="flex items-center justify-center h-screen" style={{ background: '#0a0e1a' }}>
        <div className="text-center">
          <div 
            className="w-16 h-16 border-4 rounded-full animate-pulse mx-auto mb-4"
            style={{ borderColor: '#00c8ff', borderTopColor: 'transparent' }}
          />
          <p className="text-white/70">Loading market data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6" style={{ background: '#0a0e1a', minHeight: '100vh' }}>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-white/60">Real-time market analysis powered by AI</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <AIScorePanel aiScore={aiScore} />
        </div>

        <div className="lg:col-span-2 space-y-6">
          <PerformanceCard data={performanceData} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goldData && <AssetCard data={goldData} assetName="gold" />}
            {sp500Data && <AssetCard data={sp500Data} assetName="sp500" />}
            {btcData && <AssetCard data={btcData} assetName="bitcoin" />}
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full"
           style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00ff88' }} />
        <span className="text-xs text-white/60">Live Updates Active</span>
      </div>
    </div>
  );
}
