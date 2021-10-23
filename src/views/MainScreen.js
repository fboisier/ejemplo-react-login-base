import React, { useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { UsuarioContext } from '../context/UsuarioContext'

export const MainScreen = () => {

    const {usuario, setUsuario} = useContext(UsuarioContext);
    const history = useHistory();

    useEffect(() => {

        console.log("Usuario Logeado?: ",usuario);

        if(!usuario){
            history.push('/login');
        }
        
    }, [usuario,history])

    const handleLogOut = () => {
        setUsuario(null);
        localStorage.clear();
    }

    return (
        <div>
            <h1>Pantalla que debe ver el usuario SOLO cuando esta "LOGEADO"</h1>
            <h1>Hola {usuario}</h1>
            <Button variant="primary" onClick={handleLogOut}>CERRAR SESION</Button>
        </div>
    )
}

