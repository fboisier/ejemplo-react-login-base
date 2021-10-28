import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { NavBarMenu } from '../components/NavBarMenu';
import { UsuarioContext } from '../context/UsuarioContext';
import { LoginRegisterScreen } from '../views/LoginRegisterScreen';
import { MainScreen } from '../views/MainScreen';
import { TravelScreen } from '../views/TravelScreen';

export const AppRouter = () => {
    const { usuario, setUsuario } = useContext(UsuarioContext);

    return (
        <>

            <Router>
                {usuario && <NavBarMenu />}
                <Container>
                    <Switch>
                        <Route exact path="/login" component={LoginRegisterScreen} />
                        <Route exact path="/travels" component={TravelScreen} />
                        <Route exact path="/register" component={LoginRegisterScreen} />
                        <Route exact path="/" component={MainScreen} />
                    </Switch>
                </Container>
            </Router>

        </>
    )
}
