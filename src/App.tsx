tsx
import React, { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import LoginPage from '@/components/LoginPage';
import Dashboard from '@/components/Dashboard';
import '@/styles/globals.css';

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
```

3. ATUALIZE o `tsconfig.json`:

Adicione o `paths` para reconhecer o alias `@`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/": ["./src/"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
