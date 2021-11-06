import React, { useState } from 'react'

import Swal from 'sweetalert2';

export const Formulario = ({ esLogin, ejecutaSubmit }) => {

    
    

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

        ejecutaSubmit(valores);

        
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
