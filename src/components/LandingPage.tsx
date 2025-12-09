tsx
import React from 'react';

interface LandingPageProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export default function LandingPage({ onGetStarted, onLogin }: LandingPageProps) {
  return (
    <div style={{ padding: '50px', textAlign: 'center', background: '#0a0e1a', minHeight: '100vh', color: 'white' }}>
      <h1>Trade# - TESTE DE DEPLOY</h1>
      <p style={{ fontSize: '20px', marginTop: '30px' }}>✅ Se você está vendo isso, o import FUNCIONOU!</p>
      <div style={{ marginTop: '50px' }}>
        <button 
          onClick={onGetStarted}
          style={{ 
            padding: '15px 40px', 
            margin: '10px', 
            background: '#00ff88', 
            border: 'none', 
            borderRadius: '10px', 
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Get Started (TESTE)
        </button>
        <button 
          onClick={onLogin}
          style={{ 
            padding: '15px 40px', 
            margin: '10px', 
            background: '#00c8ff', 
            border: 'none', 
            borderRadius: '10px', 
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Login (TESTE)
        </button>
      </div>
    </div>
  );
}
