import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useLocation, useHistory } from "react-router-dom";
import { Formulario } from '../components/Formulario';
import { UsuarioContext } from '../context/UsuarioContext';

export const LoginRegisterScreen = () => {

    const [esLogin, setEsLogin] = useState(true);
    const location = useLocation();
    const history = useHistory();
    const {usuario} = useContext(UsuarioContext);

    useEffect(() => {

        if(usuario){
            history.push('/');
        }

        if (location.pathname !== '/login') {
            setEsLogin(false);
        }


        console.log(location.pathname);

    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const handleLogin = () => {
        
        setEsLogin(!esLogin);

        if (esLogin) {
            console.log("vamos al register",esLogin);
            history.push('/register');
        } else {
            history.push('/login');
        }
        
        
    }

    return (
        <div className="mt-4">
            {esLogin
                ?
                <h1>Login</h1>
                :
                <h1>Register</h1>
            }
            <Row>
                <Col md={6}>
                    <Formulario esLogin={esLogin} />
                </Col>
            </Row>

            <button className="mt-4" onClick={handleLogin}>Ir al {esLogin ? "ir al Registro" : "ir al Login"} </button>

        </div>
    )
}
