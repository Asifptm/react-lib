import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AlertProvider } from './context/AlertContext.jsx'; 
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AlertProvider>
      <App />
    </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>
);
