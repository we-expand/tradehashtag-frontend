typescript
   import { useState, useEffect } from 'react';
   import Dashboard from './components/Dashboard';
   import LandingPage from './components/LandingPage';
   import LoginPage from './components/LoginPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'login' | 'signup' | 'dashboard'>('landing');
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);

  // Verificar se usuário está logado ao carregar
  useEffect(() => {
    const storedUser = localStorage.getItem('trade#_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setCurrentPage('dashboard');
    }
  }, []);

  // Login
  const handleLogin = (email: string, password: string) => {
    // Simular login - aceita qualquer email/senha
    const userData = { email, name: email.split('@')[0] };
    localStorage.setItem('trade#_user', JSON.stringify(userData));
    setUser(userData);
    setCurrentPage('dashboard');
  };

  // Signup
  const handleSignup = (email: string, password: string, name: string) => {
    // Simular signup
    const userData = { email, name };
    localStorage.setItem('trade#_user', JSON.stringify(userData));
    setUser(userData);
    setCurrentPage('dashboard');
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem('trade#_user');
    setUser(null);
    setCurrentPage('landing');
  };

  // Demo login
  const handleDemoLogin = () => {
    const demoUser = { email: 'demo@trade#.com', name: 'Demo User' };
    localStorage.setItem('trade#_user', JSON.stringify(demoUser));
    setUser(demoUser);
    setCurrentPage('dashboard');
  };

  return (
    <>
      {currentPage === 'landing' && (
        <LandingPage 
          onGetStarted={() => setCurrentPage('signup')}
          onLogin={() => setCurrentPage('login')}
        />
      )}

      {currentPage === 'login' && (
        <LoginPage
          mode="login"
          onSubmit={handleLogin}
          onSwitchMode={() => setCurrentPage('signup')}
          onBack={() => setCurrentPage('landing')}
          onDemoLogin={handleDemoLogin}
        />
      )}

      {currentPage === 'signup' && (
        <LoginPage
          mode="signup"
          onSubmit={handleSignup}
          onSwitchMode={() => setCurrentPage('login')}
          onBack={() => setCurrentPage('landing')}
          onDemoLogin={handleDemoLogin}
        />
      )}

      {currentPage === 'dashboard' && user && (
        <Dashboard 
          user={user}
          onLogout={handleLogout}
        />
      )}
    </>
  );
}
