import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { LoginRegisterScreen } from '../views/LoginRegisterScreen';
import { MainScreen } from '../views/MainScreen';
import { TravelScreen } from '../views/TravelScreen';

export const AppRouter = () => {
    return (
        <>

            <Router>
                <Switch>
                    <Route exact path="/login" component={LoginRegisterScreen} />
                    <Route exact path="/travels" component={TravelScreen} />
                    <Route exact path="/register" component={LoginRegisterScreen} />
                    <Route exact path="/" component={MainScreen} />
                </Switch>
            </Router>

        </>
    )
}
