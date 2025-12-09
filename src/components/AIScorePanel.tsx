tsx
import React from 'react';
import { TrendingUp, Brain, Zap } from 'lucide-react';

interface AIScore {
  score: number;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  confidence: number;
  signals: {
    technical: number;
    fundamental: number;
    sentiment: number;
  };
}

interface AIScorePanelProps {
  aiScore: AIScore;
}

export function AIScorePanel({ aiScore }: AIScorePanelProps) {
  const getScoreColor = (score: number) => {
    if (score >= 75) return 'var(--success)';
    if (score >= 50) return 'var(--warning)';
    return 'var(--danger)';
  };

  const getSentimentColor = (sentiment: string) => {
    if (sentiment === 'bullish') return 'var(--success)';
    if (sentiment === 'bearish') return 'var(--danger)';
    return 'var(--warning)';
  };

  return (
    <div className="p-6 rounded-2xl" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" 
               style={{ background: 'var(--accent)', opacity: 0.1 }}>
            <Brain size={20} style={{ color: 'var(--accent)' }} />
          </div>
          <div>
            <h3 className="text-lg" style={{ color: 'var(--text-primary)' }}>AI Score</h3>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Real-time analysis</p>
          </div>
        </div>
        <Zap size={16} style={{ color: 'var(--accent)' }} className="animate-pulse" />
      </div>

      {/* Score Circle */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-40 h-40">
          <svg className="transform -rotate-90 w-40 h-40">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="var(--border)"
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
            <span className="text-4xl" style={{ color: getScoreColor(aiScore.score) }}>
              {aiScore.score}
            </span>
            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>/ 100</span>
          </div>
        </div>
      </div>

      {/* Sentiment */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
             style={{ background: getSentimentColor(aiScore.sentiment), opacity: 0.1 }}>
          <TrendingUp size={16} style={{ color: getSentimentColor(aiScore.sentiment) }} />
          <span className="text-sm capitalize" style={{ color: getSentimentColor(aiScore.sentiment) }}>
            {aiScore.sentiment}
          </span>
        </div>
        <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>
          Confidence: {aiScore.confidence}%
        </p>
      </div>

      {/* Signals Breakdown */}
      <div className="space-y-3">
        <div>
          <div className="flex items-center justify-between text-sm mb-1">
            <span style={{ color: 'var(--text-secondary)' }}>Technical</span>
            <span style={{ color: 'var(--text-primary)' }}>{aiScore.signals.technical}%</span>
          </div>
          <div className="h-2 rounded-full" style={{ background: 'var(--border)' }}>
            <div 
              className="h-full rounded-full transition-all duration-500"
              style={{ 
                width: `${aiScore.signals.technical}%`,
                background: getScoreColor(aiScore.signals.technical)
              }}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-sm mb-1">
            <span style={{ color: 'var(--text-secondary)' }}>Fundamental</span>
            <span style={{ color: 'var(--text-primary)' }}>{aiScore.signals.fundamental}%</span>
          </div>
          <div className="h-2 rounded-full" style={{ background: 'var(--border)' }}>
            <div 
              className="h-full rounded-full transition-all duration-500"
              style={{ 
                width: `${aiScore.signals.fundamental}%`,
                background: getScoreColor(aiScore.signals.fundamental)
              }}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-sm mb-1">
            <span style={{ color: 'var(--text-secondary)' }}>Sentiment</span>
            <span style={{ color: 'var(--text-primary)' }}>{aiScore.signals.sentiment}%</span>
          </div>
          <div className="h-2 rounded-full" style={{ background: 'var(--border)' }}>
            <div 
              className="h-full rounded-full transition-all duration-500"
              style={{ 
                width: `${aiScore.signals.sentiment}%`,
                background: getScoreColor(aiScore.signals.sentiment)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
