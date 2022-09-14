import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import Counter2 from './Counter2.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Counter2 />
  </React.StrictMode>
);