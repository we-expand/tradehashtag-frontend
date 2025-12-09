tsx
/**
🚀 LANDING PAGE - TRADEHASHTAG.COM
Design moderno, limpo e tecnológico
 */

import React, { useState } from 'react';
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  Target, 
  Rocket,
  CheckCircle,
  ArrowRight,
  Play,
  Bot,
  LineChart,
  Lock,
  Users,
  Sparkles,
  Activity
} from 'lucide-react';

export function LandingPage({ onGetStarted, onLogin }: { onGetStarted: () => void; onLogin: () => void }) {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden" style={{ background: '#0a0e1a' }}>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(circle at 20% 50%, rgba(0, 255, 136, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 200, 255, 0.15) 0%, transparent 50%)',
            }}
          />
          
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)',
              backgroundSize: '100px 100px'
            }}
          />

          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: 'rgba(0, 255, 136, 0.3)',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>

        <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ 
                  background: 'linear-gradient(135deg, #00ff88, #00c8ff)',
                  boxShadow: '0 0 30px rgba(0, 255, 136, 0.3)'
                }}
              >
                <TrendingUp size={24} color="white" />
              </div>
              <span className="text-2xl font-bold text-white">
                Trade<span style={{ color: '#00ff88' }}>#</span>
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={onLogin}
                className="px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                Login
              </button>
              <button
                onClick={onGetStarted}
                className="px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #00ff88, #00c8ff)',
                  color: 'white',
                  boxShadow: '0 4px 20px rgba(0, 255, 136, 0.3)'
                }}
              >
                Começar Agora
              </button>
            </div>
          </div>
        </nav>

        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
          <div className="text-center">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: 'rgba(0, 255, 136, 0.1)',
                border: '1px solid rgba(0, 255, 136, 0.3)'
              }}
            >
              <Sparkles size={16} style={{ color: '#00ff88' }} />
              <span style={{ color: '#00ff88' }}>Powered by Artificial Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight px-4">
              Day Trading com
              <br />
              <span 
                className="bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, #00ff88, #00c8ff)',
                }}
              >
                Inteligência Artificial
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto px-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Opere Bitcoin, Gold e S&P 500 com análise em tempo real, gestão de risco automática 
              e 3 modos de operação personalizados
            </p>
