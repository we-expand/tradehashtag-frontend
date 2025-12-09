import React from 'react';
import { TrendingUp, Sparkles, ArrowRight, Brain, Zap, Shield } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export default function LandingPage({ onGetStarted, onLogin }: LandingPageProps) {
  return (
    <div className="min-h-screen w-full relative overflow-hidden" style={{ background: '#0a0e1a' }}>
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'linear-gradient(135deg, #00ff88, #00c8ff)',
            top: '-10%',
            left: '-5%',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{
            background: 'linear-gradient(135deg, #00c8ff, #8b5cf6)',
            bottom: '-10%',
            right: '-5%',
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div 
          className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8"
          style={{ 
            background: 'linear-gradient(135deg, #00ff88, #00c8ff)',
            boxShadow: '0 0 40px rgba(0, 255, 136, 0.4)'
          }}
        >
          <TrendingUp size={40} color="white" strokeWidth={2.5} />
        </div>

        <h1 className="text-6xl font-extrabold text-white mb-4 text-center">
          Trade<span style={{ 
            background: 'linear-gradient(135deg, #00ff88, #00c8ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>#</span>
        </h1>

        <div className="flex items-center gap-2 mb-6">
          <Sparkles size={20} className="text-cyan-400" />
          <p className="text-xl text-white/70">AI-Powered Day Trading Platform</p>
        </div>

        <p className="text-white/50 text-center max-w-2xl mb-12 leading-relaxed">
          Professional trading platform with artificial intelligence for Gold, S&P 500 Futures, and Bitcoin.
          Real-time market analysis with 0ms latency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl">
          <div className="p-6 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <Brain size={32} className="mb-3" style={{ color: '#00ff88' }} />
            <h3 className="text-lg font-bold text-white mb-2">AI Score</h3>
            <p className="text-sm text-white/60">Real-time AI analysis for each asset</p>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <Zap size={32} className="mb-3" style={{ color: '#00c8ff' }} />
            <h3 className="text-lg font-bold text-white mb-2">Zero Latency</h3>
            <p className="text-sm text-white/60">Real-time data with 0ms delay</p>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <Shield size={32} className="mb-3" style={{ color: '#8b5cf6' }} />
            <h3 className="text-lg font-bold text-white mb-2">Risk Control</h3>
            <p className="text-sm text-white/60">5 levels of risk classification</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onGetStarted}
            className="px-8 py-4 rounded-xl font-bold text-white flex items-center gap-2 transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #00ff88, #00c8ff)',
              boxShadow: '0 10px 40px rgba(0, 255, 136, 0.3)'
            }}
          >
            <span>Get Started</span>
            <ArrowRight size={20} />
          </button>

          <button
            onClick={onLogin}
            className="px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            Sign In
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -30px); }
          66% { transform: translate(-20px, 20px); }
        }
      `}</style>
    </div>
  );
}
