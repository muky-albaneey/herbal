import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// import i18n from './component/utills/i18.js';
import   './utills/i18'
import './index.css'


// import './css/satoshi.css';
// import 'jsvectormap/dist/css/jsvectormap.css';
// import 'flatpickr/dist/flatpickr.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
