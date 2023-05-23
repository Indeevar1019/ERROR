import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
    <App/>
 );
// ReactDOM.render(<React.StrictMode>
//     <App/>
// </React.StrictMode>,document.getElementById('root'));

