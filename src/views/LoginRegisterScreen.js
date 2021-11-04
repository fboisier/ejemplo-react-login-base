import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useLocation, useHistory } from "react-router-dom";
import { Formulario } from '../components/Formulario';
import { UsuarioContext } from '../context/UsuarioContext';
import axios from 'axios';
import Swal from 'sweetalert2';

export const LoginRegisterScreen = () => {

    const [esLogin, setEsLogin] = useState(true);
    const location = useLocation();
    const history = useHistory();
    const { usuario, setUsuario } = useContext(UsuarioContext);

    useEffect(() => {

        if (usuario) {
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
            console.log("vamos al register", esLogin);
            history.push('/register');
        } else {
            history.push('/login');
        }


    }



    const ejecutaLogin = (valores) => {
        console.log("LOGIN", valores);
        // vamor a llamar a AXIOS a la API BACKEND y pasarle los valores. LOGIN USUARIO
        axios.post('http://localhost:8000/api/auth/login', valores).then(res => {
            console.log(res);
            Swal.fire(
                'Exito en logear',
                'bienvenido',
                'success'
            );
            // que se logee.
            setUsuario({id: res.data._id, nombre: res.data.nombre });
            localStorage.setItem('usuario', JSON.stringify({id: res.data._id, nombre: res.data.nombre, token: res.data.token }) );
            history.push('/');
        }).catch(err => {
            console.log(err);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario o contraseña incorrectos',
            });
        });


    }

    const ejecutaRegister = (valores) => {
        console.log("REGISTRO", valores);
        axios.post('http://localhost:8000/api/auth/register', valores).then(res => {

            console.log(res.data);
            Swal.fire(
                'Registro exitoso',
                'Ahora puedes iniciar sesión',
                'success'
            );
            // que se logee.
            setUsuario({id: res.data._id, nombre: res.data.nombre });
            localStorage.setItem('usuario', JSON.stringify({id: res.data._id, nombre: res.data.nombre, token: res.data.token }) );
            history.push('/');

        }).catch(err => {
            console.log(err.response.data.message);
            Swal.fire(
                'Error',
                err.response.data.message,
                'error'
            );
        })
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
                <Formulario esLogin={esLogin} ejecutaSubmit={esLogin ? ejecutaLogin : ejecutaRegister} />
            </Col>
        </Row>
        <div className="mt-4">
            <a className="text-decoration-underline text-primary" onClick={handleLogin}><i>Ir al {esLogin ? "ir al Registro" : "ir al Login"} </i></a>
        </div>

    </div>
)
}
