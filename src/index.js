import React from 'react';
import  { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';
import { AuthContextProvider } from './Context/AuthContext.js';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
   <App/>   
    </AuthContextProvider>
  </React.StrictMode>

);

