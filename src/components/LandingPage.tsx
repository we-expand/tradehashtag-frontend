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

export default function LandingPage({ onGetStarted, onLogin }: { onGetStarted: () => void; onLogin: () => void }) {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden" style={{ background: '#0a0e1a' }}>
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Mesh */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(circle at 20% 50%, rgba(0, 255, 136, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 200, 255, 0.15) 0%, transparent 50%)',
            }}
          />
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)',
              backgroundSize: '100px 100px'
            }}
          />

          {/* Floating particles */}
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

        {/* Navigation */}
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

        {/* Hero Content */}
        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
          <div className="text-center">
            {/* Badge */}
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

            {/* Main Headline */}
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

            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto px-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Opere Bitcoin, Gold e S&P 500 com análise em tempo real, gestão de risco automática 
              e 3 modos de operação personalizados
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={onGetStarted}
                className="px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2 w-full sm:w-auto"
                style={{ 
                  background: 'linear-gradient(135deg, #00ff88, #00c8ff)',
                  color: 'white',
                  boxShadow: '0 8px 30px rgba(0, 255, 136, 0.3)'
                }}
              >
                Criar Conta Gratuita
                <ArrowRight size={20} />
              </button>

              <button
                onClick={() => {
                  document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2 w-full sm:w-auto"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Play size={20} />
                Ver Demonstração
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto pt-8 px-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl font-bold mb-2" style={{ color: '#00ff88' }}>
                  0ms
                </div>
                <div className="text-xs sm:text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Latência Real
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-4xl font-bold mb-2" style={{ color: '#00ff88' }}>
                  24/7
                </div>
                <div className="text-xs sm:text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Tempo Real
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-4xl font-bold mb-2" style={{ color: '#00ff88' }}>
                  100%
                </div>
                <div className="text-xs sm:text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Real-Time
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-white/50" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6" style={{ background: '#0f1420' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Tecnologia de Ponta
            </h2>
            <p className="text-lg sm:text-xl" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              Ferramentas profissionais para traders profissionais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: 'Hashtag AI',
                description: 'Robô inteligente com 3 modos de operação: Poucos, Médios e Muitos pontos',
                color: '#00ff88'
              },
              {
                icon: Activity,
                title: 'Tempo Real Total',
                description: 'Dados instantâneos em tempo real via WebSocket com 0ms de latência',
                color: '#00c8ff'
              },
              {
                icon: Shield,
                title: 'Gestão de Risco',
                description: 'Stop loss automático, take profit inteligente e proteção total do capital',
                color: '#a855f7'
              },
              {
                icon: BarChart3,
                title: 'Análise Técnica',
                description: 'Indicadores profissionais: RSI, MACD, Bollinger Bands e muito mais',
                color: '#f59e0b'
              },
              {
                icon: LineChart,
                title: 'Multi-Timeframe',
                description: '8 timeframes disponíveis: 1m, 5m, 15m, 30m, 1h, 4h, 1D, 1W',
                color: '#ec4899'
              },
              {
                icon: Lock,
                title: 'Segurança',
                description: 'Criptografia de ponta a ponta e autenticação robusta',
                color: '#ef4444'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl transition-all hover:scale-105 hover:-translate-y-2"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ 
                    background: `${feature.color}20`,
                    boxShadow: `0 0 20px ${feature.color}40`
                  }}
                >
                  <feature.icon size={32} style={{ color: feature.color }} />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>

                <p className="text-base" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-section" className="py-32 px-6" style={{ background: '#0a0e1a' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Veja o <span style={{ color: '#00ff88' }}>Hashtag AI</span> em Ação
            </h2>
            <p className="text-lg sm:text-xl" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              Descubra como nossa inteligência artificial opera no mercado
            </p>
          </div>

          <div 
            className="rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            <div className="relative aspect-video bg-black flex items-center justify-center">
              {!videoPlaying ? (
                <>
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 200, 255, 0.1))',
                    }}
                  />
                  <button
                    onClick={() => {
                      setVideoPlaying(true);
                      alert('Em breve você poderá assistir ao vídeo completo!');
                    }}
                    className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ 
                      background: 'linear-gradient(135deg, #00ff88, #00c8ff)',
                      boxShadow: '0 0 40px rgba(0, 255, 136, 0.5)'
                    }}
                  >
                    <Play size={36} color="white" />
                  </button>
                </>
              ) : (
                <div className="text-white text-center p-12">
                  <div className="text-2xl mb-4">🎬 Vídeo em Produção</div>
                  <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    Em breve você poderá assistir à demonstração completa
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 px-6" style={{ background: '#0f1420' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Por Que Escolher o Trade#?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle, text: 'Setup em minutos' },
              { icon: CheckCircle, text: 'Dados em tempo real' },
              { icon: CheckCircle, text: 'Suporte 24/7' },
              { icon: CheckCircle, text: 'Atualizações gratuitas' },
              { icon: CheckCircle, text: 'Interface intuitiva' },
              { icon: CheckCircle, text: 'Multi-dispositivos' },
              { icon: CheckCircle, text: 'Sem taxas ocultas' },
              { icon: CheckCircle, text: 'Comunidade ativa' }
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <CheckCircle size={24} style={{ color: '#00ff88' }} />
                <span className="text-white">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6" style={{ background: '#0a0e1a' }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            Pronto para Começar?
          </h2>

          <p className="text-lg sm:text-xl mb-12" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Junte-se a traders que já estão operando com inteligência artificial
          </p>

          <button
            onClick={onGetStarted}
            className="px-12 py-5 rounded-xl text-xl font-bold transition-all hover:scale-105 inline-flex items-center gap-3"
            style={{ 
              background: 'linear-gradient(135deg, #00ff88, #00c8ff)',
              color: 'white',
              boxShadow: '0 10px 40px rgba(0, 255, 136, 0.4)'
            }}
          >
            Criar Conta Gratuita
            <ArrowRight size={24} />
          </button>

          <p className="mt-8 text-sm" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
            Sem cartão de crédito necessário • Comece em minutos
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="py-12 px-6 text-center"
        style={{
          background: '#000',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <p style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
            © 2024 TradeHashtag.com - Todos os direitos reservados
          </p>
          <p className="mt-2 text-xs" style={{ color: 'rgba(255, 255, 255, 0.3)' }}>
            Trading envolve riscos. Opere apenas com capital que pode perder.
          </p>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}
