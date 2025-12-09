tsx
import React, { useState } from 'react';
import LandingPage from './components/LandingPage.tsx';
import LoginPage from './components/LoginPage.tsx';
import Dashboard from './components/Dashboard.tsx';
import './styles/globals.css';

type Page = 'landing' | 'login' | 'signup' | 'dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email: string, password: string, name?: string) => {
    console.log('Login attempt:', { email, password, name });
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleDemoLogin = () => {
    console.log('Demo login');
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('landing');
  };

  if (currentPage === 'landing') {
    return (
      <LandingPage
        onGetStarted={() => setCurrentPage('signup')}
        onLogin={() => setCurrentPage('login')}
      />
    );
  }

  if (currentPage === 'login' || currentPage === 'signup') {
    return (
      <LoginPage
        mode={currentPage}
        onSubmit={handleLogin}
        onSwitchMode={() => setCurrentPage(currentPage === 'login' ? 'signup' : 'login')}
        onBack={() => setCurrentPage('landing')}
        onDemoLogin={handleDemoLogin}
      />
    );
  }

  if (currentPage === 'dashboard' && isAuthenticated) {
    return <Dashboard />;
  }

  return (
    <LandingPage
      onGetStarted={() => setCurrentPage('signup')}
      onLogin={() => setCurrentPage('login')}
    />
  );
}

export default App;
