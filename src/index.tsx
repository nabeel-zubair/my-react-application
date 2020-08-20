import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom'
import App from './components/App';

/* Styles imports */
import 'fontsource-roboto';
import './index.scss';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <App />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
