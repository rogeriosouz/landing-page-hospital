import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App.tsx';
import { Footer } from './components/Footer/index.tsx';
import { Header } from './components/Header/Header.tsx';
import { GlobalStyles } from './styles/GlobalStyles.ts';
import { THEME } from './styles/theme.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <Header />
      <App />
      <GlobalStyles />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
