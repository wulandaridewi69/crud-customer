import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from './pages/App';

import RouteApp from '../src/routes/Route'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteApp />
  </React.StrictMode>
);
