import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { UsuarioContext } from '../context/UsuarioContext';
import { axiosConToken } from '../helpers/axios';

export const TravelScreen = () => {

    const {usuario} = useContext(UsuarioContext);
    const history = useHistory();

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        console.log("Usuario Logeado?: ",usuario);

        if(!usuario){
            history.push('/login');
        }
        
    }, [usuario,history])


    useEffect(() => {

        axiosConToken('usuarios').then(res => {
            console.log(res.data);
            setUsuarios(res.data);
        }).catch(err => {
            console.log(err);
        });

    }, []);

    return (
        <div>
            <h1>Bienvenido  a la patanlla de viajes CON CAMBIOS.</h1>

            <hr />
            {usuarios?.map(usuario => (
                <div key={usuario._id}>
                    <p>{usuario.nombre}</p>
                    <p>{usuario.apellido}</p>
                    <p>{usuario.email}</p>
                </div>
            ))}
        </div>
    )
}
