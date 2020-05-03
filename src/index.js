import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './pages/app';
import '@fortawesome/fontawesome-free/css/all.css';

import "./styles/Global.css";

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
