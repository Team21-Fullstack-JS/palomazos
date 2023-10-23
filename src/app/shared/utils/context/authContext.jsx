/**
 * Función para manejar un contexto global de la aplicación
 */

import { createContext, useState, useCallback, useMemo } from "react";

export const AuthContext = createContext(); // --> Tiene el objeto Provider

export function AuthContextProvider( { children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(
        () => window.localStorage.getItem("usuarioLogueadoPalomazos")
    );
    /*const [usuario, setUsuario] = useState(window.localStorage.getItem("UsuarioPalomazos"));

    const login = useCallback(function () {
        setIsAuthenticated(true);
    }, []);

    const logout = useCallback( function () {
        window.localStorage.removeItem("usuarioLogueadoPalomazos", true);
        window.localStorage.removeItem("UsuarioPalomazos", true);
        setIsAuthenticated(false);
        setUsuario(null);
    }, []);*/

    const value = useMemo( ()=> (
        {
            // login,
            // logout,
            isAuthenticated,
            // usuario,
            // setUsuario
        }
    ), [isAuthenticated]);//, login, logout, usuario, setUsuario]);

    return (
        <AuthContext.Provider value={ value }>
            { children }
        </AuthContext.Provider>
    );

}