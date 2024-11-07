import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome here
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap if you're using it
import './index.css'; // Your custom CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
