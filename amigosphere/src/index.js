import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />);
