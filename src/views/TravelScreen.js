import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router';
import { UsuarioContext } from '../context/UsuarioContext';

export const TravelScreen = () => {

    const {usuario, setUsuario} = useContext(UsuarioContext);
    const history = useHistory();

    useEffect(() => {

        console.log("Usuario Logeado?: ",usuario);

        if(!usuario){
            history.push('/login');
        }
        
    }, [usuario,history])

    return (
        <div>
            <h1>Bienvenido  a la patanlla de viajes CON CAMBIOS.</h1>
        </div>
    )
}
