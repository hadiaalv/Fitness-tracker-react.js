// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the new import
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
