import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// CONTEXT PROVIDERS
import { ModeProvider } from './context/ModeContext'
import { NavProvider } from './context/NavContext';

ReactDOM.render(
  <React.StrictMode>
    <NavProvider>
      <ModeProvider>
        <App />
      </ModeProvider>
    </NavProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
