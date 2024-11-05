import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import bootstrap from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import reportWebVitals from './reportWebVitals';
import { ApiProvider } from './contexts/ApiContext';
import { KosarProvider } from './contexts/KosarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider>
      <KosarProvider>
        <App />
      </KosarProvider>
    </ApiProvider>
  </React.StrictMode>
);

reportWebVitals();
