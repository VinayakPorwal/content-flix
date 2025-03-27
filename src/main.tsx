
import { createRoot } from 'react-dom/client';
import { lazy, Suspense } from 'react';
 

// Inline critical CSS
const injectCriticalCss = () => {
  const criticalCss = `
    html, body { margin: 0; padding: 0; }
    .initial-loading { 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      height: 100vh; 
      width: 100vw; 
      background: white; 
    }
    .initial-loading-spinner { 
      width: 50px; 
      height: 50px; 
      border: 5px solid rgba(249, 115, 22, 0.2); 
      border-top-color: rgba(249, 115, 22, 1); 
      border-radius: 50%; 
      animation: spin 1s linear infinite; 
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  `;
  
  const style = document.createElement('style');
  style.textContent = criticalCss;
  document.head.appendChild(style);
};

// Lazy load the main App component
const App = lazy(() => import('./App.tsx'));

// Add initial loading spinner
const LoadingSpinner = () => (
  <div className="initial-loading">
    <div className="initial-loading-spinner"></div>
  </div>
);

// Inject critical CSS first
injectCriticalCss();

// Load CSS asynchronously
import('./index.css').then(() => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    createRoot(rootElement).render(
      <Suspense fallback={<LoadingSpinner />}>
     
          <App />
 
      </Suspense>
    );
  }
});
