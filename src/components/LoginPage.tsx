import React, { useState } from 'react';
import { Lock, Mail, User, Eye, EyeOff, TrendingUp, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

interface LoginPageProps {
  mode: 'login' | 'signup';
  onSubmit: (email: string, password: string, name?: string) => void;
  onSwitchMode: () => void;
  onBack: () => void;
  onDemoLogin: () => void;
}

export default function LoginPage({ mode, onSubmit, onSwitchMode, onBack, onDemoLogin }: LoginPageProps) {
  const isLogin = mode === 'login';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password, isLogin ? undefined : name);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 relative" style={{ background: '#0a0e1a' }}>
      <button
        onClick={onBack}
        className="absolute top-6 left-6 p-3 rounded-xl transition-all hover:scale-105"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: 'white'
        }}
      >
        <ArrowLeft size={20} />
      </button>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ 
              background: 'linear-gradient(135deg, #00ff88, #00c8ff)',
              boxShadow: '0 0 30px rgba(0, 255, 136, 0.4)'
            }}
          >
            <TrendingUp size={32} color="white" strokeWidth={2.5} />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Trade<span style={{ 
              background: 'linear-gradient(135deg, #00ff88, #00c8ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>#</span>
          </h1>
          <div className="flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-cyan-400" />
            <span className="text-white/50 text-sm">AI-Powered Trading</span>
          </div>
        </div>

        <div 
          className="p-8 rounded-2xl backdrop-blur-xl"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <label className="text-sm text-white/70 mb-2 block">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-white"
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    outline: 'none'
                  }}
                  placeholder="John Doe"
                  required={!isLogin}
                />
              </div>
            )}

            <div>
              <label className="text-sm text-white/70 mb-2 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-white"
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  outline: 'none'
                }}
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="text-sm text-white/70 mb-2 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 rounded-xl text-white"
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    outline: 'none'
                  }}
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-white/40"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #00ff88, #00c8ff)',
                boxShadow: '0 10px 30px rgba(0, 255, 136, 0.3)'
              }}
            >
              <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
              <ArrowRight size={18} />
            </button>

            {isLogin && (
              <button
                type="button"
                onClick={onDemoLogin}
                className="w-full py-3 rounded-xl font-bold text-white"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <Sparkles size={16} className="inline mr-2" />
                Try Demo Mode
              </button>
            )}
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/50 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={onSwitchMode}
                className="ml-2 font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #00ff88, #00c8ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
