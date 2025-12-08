tsx
/**
🔐 LOGIN PAGE - ULTRA MODERN DESIGN (SEM SUPABASE)
Design premium com animações, glassmorphism e gradientes neon
 */

import React, { useState } from 'react';
import { Lock, Mail, User, Eye, EyeOff, TrendingUp, Sparkles, ArrowRight, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';

interface LoginPageProps {
  mode: 'login' | 'signup';
  onSubmit: (email: string, password: string, name?: string) => void;
  onSwitchMode: () => void;
  onBack: () => void;
  onDemoLogin: () => void;
}

export function LoginPage({ mode, onSubmit, onSwitchMode, onBack, onDemoLogin }: LoginPageProps) {
  const isLogin = mode === 'login';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        onSubmit(email, password);
      } else {
        if (name.trim().length < 2) {
          setError('Nome deve ter pelo menos 2 caracteres');
          setLoading(false);
          return;
        }
        onSubmit(email, password, name);
      }
    } catch (err) {
      setError('Erro inesperado. Tente novamente.');
      setLoading(false);
    }
  };

  const handleDemoClick = () => {
    setLoading(true);
    onDemoLogin();
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 relative overflow-hidden" style={{ background: '#0a0e1a' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background: 'linear-gradient(135deg, #00ff88, #00c8ff)',
            top: '-10%',
            left: '-5%',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{
            background: 'linear-gradient(135deg, #00c8ff, #8b5cf6)',
            bottom: '-10%',
            right: '-5%',
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}
        />

        {/* Animated Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 p-3 rounded-xl transition-all hover:scale-105 z-50"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: 'white'
        }}
      >
        <ArrowLeft size={20} />
      </button>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[480px]">
        {/* Logo & Branding */}
        <div className="text-center mb-12 animate-fadeIn">
          <div 
            className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 relative group"
            style={{ 
              background: 'linear-gradient(135deg, #00ff88, #00c8ff)',
              boxShadow: '0 0 40px rgba(0, 255, 136, 0.4), 0 0 80px rgba(0, 200, 255, 0.2)',
              animation: 'glow 3s ease-in-out infinite'
            }}
          >
            <TrendingUp size={40} color="white" strokeWidth={2.5} />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/20 to-cyan-400/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
          </div>
          
          <h1 className="text-5xl font-extrabold text-white mb-3 tracking-tight">
            Trade<span style={{ 
              background: 'linear-gradient(135deg, #00ff88, #00c8ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>#</span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
            <Sparkles size={16} className="text-cyan-400" />
            <span>Powered by Artificial Intelligence</span>
          </div>
        </div>

        {/* Login Card */}
        <div 
          className="rounded-3xl p-10 backdrop-blur-xl relative overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Card Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
          
          {/* Header */}
          <div className="mb-8 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{
                background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 200, 255, 0.1))',
                border: '1px solid rgba(0, 255, 136, 0.2)'
              }}>
                {isLogin ? <Lock size={20} className="text-cyan-400" /> : <User size={20} className="text-green-400" />}
              </div>
              <h2 className="text-3xl font-bold text-white">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              {isLogin 
                ? 'Enter your credentials to access your trading dashboard' 
                : 'Join thousands of traders using AI-powered strategies'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Name Field (Register Only) */}
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/80 flex items-center gap-2">
                  <User size={14} />
                  Full Name
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl text-white placeholder-white/30 transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      outline: 'none'
                    }}
                    placeholder="John Doe"
                    required={!isLogin}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00ff88';
                      e.target.style.boxShadow = '0 0 0 3px rgba(0, 255, 136, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-white/80 flex items-center gap-2">
                <Mail size={14} />
                Email Address
              </label>
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl text-white placeholder-white/30 transition-all duration-300 focus:scale-[1.02]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    outline: 'none'
                  }}
                  placeholder="you@example.com"
                  required
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00ff88';
                    e.target.style.boxShadow = '0 0 0 3px rgba(0, 255, 136, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-white/80 flex items-center gap-2">
                <Lock size={14} />
                Password
              </label>
              <div className="relative group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-5 py-4 pr-14 rounded-xl text-white placeholder-white/30 transition-all duration-300 focus:scale-[1.02]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    outline: 'none'
                  }}
                  placeholder="••••••••••"
                  required
                  minLength={6}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00ff88';
                    e.target.style.boxShadow = '0 0 0 3px rgba(0, 255, 136, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-white/5 transition-all"
                >
                  {showPassword ? (
                    <EyeOff size={18} className="text-white/40" />
                  ) : (
                    <Eye size={18} className="text-white/40" />
                  )}
                </button>
              </div>
              {!isLogin && (
                <p className="text-xs text-white/40 flex items-center gap-1.5 mt-2">
                  <AlertCircle size={12} />
                  Minimum 6 characters required
                </p>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div 
                className="p-4 rounded-xl text-sm flex items-start gap-3 animate-shake"
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)'
                }}
              >
                <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-red-300">{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
              style={{
                background: loading 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'linear-gradient(135deg, #00ff88, #00c8ff)',
                color: 'white',
                opacity: loading ? 0.6 : 1,
                cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow: loading ? 'none' : '0 10px 40px rgba(0, 255, 136, 0.3)',
                transform: loading ? 'scale(1)' : 'scale(1)',
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(0, 255, 136, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 255, 136, 0.3)';
                }
              }}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
              
              {/* Button Shine Effect */}
              {!loading && (
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  style={{ width: '50%' }}
                />
              )}
            </button>

            {/* Demo Button */}
            {isLogin && (
              <button
                type="button"
                onClick={handleDemoClick}
                disabled={loading}
                className="w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  opacity: loading ? 0.5 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer'
                }}
              >
                <Sparkles size={18} />
                <span>Try Demo Mode</span>
              </button>
            )}
          </form>

          {/* Toggle Login/Register */}
          <div className="mt-8 text-center relative z-10">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
            <p className="text-white/50 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => {
                  onSwitchMode();
                  setError('');
                }}
                className="ml-2 font-semibold hover:underline transition-all"
                style={{
                  background: 'linear-gradient(135deg, #00ff88, #00c8ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-white/30 text-xs">
          <p>Secure authentication • End-to-end encryption</p>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 40px rgba(0, 255, 136, 0.4), 0 0 80px rgba(0, 200, 255, 0.2); }
          50% { box-shadow: 0 0 60px rgba(0, 255, 136, 0.6), 0 0 120px rgba(0, 200, 255, 0.3); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }

        .animate-slideDown {
          animation: slideDown 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
