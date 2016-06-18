'use strict';

import { h, render } from 'preact';
/** @jsx h */
import Router from 'preact-router';

import { store } from './data';
import { Home } from './views';

const App = () => (
    <Router>
        <Home path="/"/>
    </Router>
);

render(
    <App />,
    document.getElementById('main')
);
