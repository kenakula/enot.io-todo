import { App } from 'app/app';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonts/AbhayaLibre-SemiBold.woff2';
import './assets/fonts/Actor-Regular.woff2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
