import React from 'react';
import { Link, Route } from 'react-router-dom';
import Routes from '../routes';
import Navbar from './Navbar';

const App = () => {
    return (
        <div className="App">
            <h1>Heading</h1>
            <Navbar />
            {Routes.map((route, index) =>
                <Route exact={route.exact}
                    key={index}
                    path={route.path}
                    component={route.component}
                />)}
        </div>
    )
}

export default App
