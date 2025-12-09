import React from 'react';
import { Brain, TrendingUp, Zap } from 'lucide-react';
import { AIScore } from '../services/marketData';

interface AIScorePanelProps {
  aiScore: AIScore;
}

export function AIScorePanel({ aiScore }: AIScorePanelProps) {
  const getScoreColor = (score: number) => {
    if (score >= 75) return '#00ff88';
    if (score >= 50) return '#fbbf24';
    return '#ef4444';
  };

  const getSentimentColor = (sentiment: string) => {
    if (sentiment === 'bullish') return '#00ff88';
    if (sentiment === 'bearish') return '#ef4444';
    return '#fbbf24';
  };

  return (
    <div className="p-6 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" 
               style={{ background: 'rgba(0, 200, 255, 0.1)' }}>
            <Brain size={20} style={{ color: '#00c8ff' }} />
          </div>
          <div>
            <h3 className="text-lg text-white font-bold">AI Score</h3>
            <p className="text-xs text-white/50">Real-time analysis</p>
          </div>
        </div>
        <Zap size={16} style={{ color: '#00c8ff' }} className="animate-pulse" />
      </div>

      <div className="flex items-center justify-center mb-6">
        <div className="relative w-40 h-40">
          <svg className="transform -rotate-90 w-40 h-40">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke={getScoreColor(aiScore.score)}
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 70}`}
              strokeDashoffset={`${2 * Math.PI * 70 * (1 - aiScore.score / 100)}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-4xl font-bold" style={{ color: getScoreColor(aiScore.score) }}>
              {aiScore.score}
            </span>
            <span className="text-xs text-white/50">/ 100</span>
          </div>
        </div>
      </div>

      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
             style={{ background: getSentimentColor(aiScore.sentiment) + '20' }}>
          <TrendingUp size={16} style={{ color: getSentimentColor(aiScore.sentiment) }} />
          <span className="text-sm capitalize font-semibold" style={{ color: getSentimentColor(aiScore.sentiment) }}>
            {aiScore.sentiment}
          </span>
        </div>
        <p className="text-xs mt-2 text-white/50">
          Confidence: {aiScore.confidence}%
        </p>
      </div>

      <div className="space-y-3">
        {Object.entries(aiScore.signals).map(([key, value]) => (
          <div key={key}>
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-white/60 capitalize">{key}</span>
              <span className="text-white font-semibold">{value}%</span>
            </div>
            <div className="h-2 rounded-full" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
              <div 
                className="h-full rounded-full transition-all duration-500"
                style={{ 
                  width: `${value}%`,
                  background: getScoreColor(value)
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
