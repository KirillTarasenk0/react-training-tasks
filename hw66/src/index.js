import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserContext from "./contexts/User";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext>
        <App/>
    </UserContext>
  </React.StrictMode>
);