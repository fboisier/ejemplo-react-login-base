// import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { UsuarioContext } from '../context/UsuarioContext';

export const Formulario = ({ esLogin }) => {

    const history = useHistory();
    const { setUsuario} = useContext(UsuarioContext);

    const initialData = {
        nombre: '',
        apellido: '',
        correo: '',
        password: '',
        confirmar: ''
    }

    const [valores, setValores] = useState(initialData)

    const { nombre, apellido, correo, password, confirmar } = valores;

    const handleChange = e => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    const reset = () => {
        setValores(initialData)
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (password !== confirmar && !esLogin) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Las contraseñas no coinciden'
            })
            return false;
        }

        // llamado a aexios a validar si las password es verdadera o no.
        if(password === "123"){
            const resNombre = "Francisco";
            setUsuario(resNombre);
            localStorage.setItem('usuario', resNombre);

            history.push('/');
            reset();
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Contraseña incorrecta'
            })
        }
        

        console.log(valores);
        
    }


    return (
        <div>

            <form onSubmit={handleSubmit}>
                {!esLogin &&
                    (<>
                        <div className="form-group">
                            <label>Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="nombre"
                                required
                                minLength="3"
                                value={nombre}
                                onChange={handleChange}
                            />
                        </div>



                        <div className="form-group">
                            <label>Apellido</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apellido"
                                required
                                minLength="3"
                                name="apellido"
                                value={apellido}
                                onChange={handleChange}
                            />
                        </div>

                    </>)
                }

                <div className="form-group">
                    <label>Correo</label>
                    <input
                        type="email"
                        required
                        className="form-control"
                        placeholder="Correo"
                        name="correo"
                        value={correo}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        required
                        value={password}
                        onChange={handleChange}
                    />
                </div>

                {!esLogin && (
                    <div className="form-group">
                        <label>Confirmar Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirmar Password"
                            name="confirmar"
                            value={confirmar}
                            onChange={handleChange}
                        />
                    </div>
                )}



                <button
                    type="submit"
                    className="btn btn-primary mt-3"
                // disabled={
                //     nombre.trim() === '' ||
                //     apellido.trim() === '' ||
                //     correo.trim() === '' ||
                //     password.trim() === '' ||
                //     confirmar.trim() === ''
                // }
                >
                    {esLogin ? 'Iniciar Sesión' : 'Registrarse'}
                </button>
            </form>
        </div>
    )
}
