import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = (props) => { 

    const [usuario, setUsuario] = useState(localStorage.getItem("usuario"));
    
    return (
        <UsuarioContext.Provider value={{usuario, setUsuario}}>
            {props.children}
        </UsuarioContext.Provider>
    );

}