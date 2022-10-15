import React from 'react';
import ReactDOM from 'react-dom/client';
import { SearchContextProvider } from './contexts/SearchContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import Router from './Router';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <SearchContextProvider>
        <Router />
      </SearchContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
)
