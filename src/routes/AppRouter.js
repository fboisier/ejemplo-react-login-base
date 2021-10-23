import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { LoginRegisterScreen } from '../views/LoginRegisterScreen';
import { MainScreen } from '../views/MainScreen';

export const AppRouter = () => {
    return (
        <>

            <Router>
                <Switch>
                    <Route exact path="/login" component={LoginRegisterScreen} />
                    <Route exact path="/register" component={LoginRegisterScreen} />
                    <Route exact path="/" component={MainScreen} />
                </Switch>
            </Router>

        </>
    )
}
