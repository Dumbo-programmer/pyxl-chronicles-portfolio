import React from 'react';
// IMPORTANT: Use 'react-dom/client' for React 18
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Your global styles
import App from './App';

// Create a root for the application. This is the new React 18 way.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your App component into the root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

