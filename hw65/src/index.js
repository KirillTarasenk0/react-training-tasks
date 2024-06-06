import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ThemeContextProvider from "./contexts/ThemeContext";
import LanguageContextProvider from "./contexts/LanguageContext";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
        <LanguageContextProvider>
            <App/>
        </LanguageContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
