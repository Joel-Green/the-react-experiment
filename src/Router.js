import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import NotFound404 from './pages/NotFound404';

export default function RouterComponent() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true}>
                    <Home></Home>
                </Route>
                <Route path="/about">
                    <About></About>
                </Route>
                <Route path="*">
                    <NotFound404></NotFound404>
                </Route>
            </Switch>

        </Router>
    )
}
