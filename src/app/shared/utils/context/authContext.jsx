/**
 * Función para manejar un contexto global de la aplicación
 */

import { createContext, useState, useCallback, useMemo } from "react";

export const AuthContext = createContext(); // --> Tiene el objeto Provider

export function AuthContextProvider( { children }) {

    const setAuthInLocalStorage = useCallback( function (usuario) {
        window.localStorage.setItem("UsuarioPalomazos", JSON.stringify(usuario));
    }, []);

    const getTokenInLocalStorage = useCallback( function () {
        return window.localStorage.getItem("UsuarioPalomazos");
    }, []);

    const [isAuthenticated, setIsAuthenticated] = useState(
        () => window.localStorage.getItem("UsuarioPalomazos")
    );

    const login = useCallback(function () {
        setIsAuthenticated(true);
    }, []);

    const logout = useCallback( function () {
        window.localStorage.removeItem("UsuarioPalomazos");
        setIsAuthenticated(false);
    }, []);

    const value = useMemo( ()=> (
        {
            login,
            logout,
            isAuthenticated,
            setAuthInLocalStorage,
            getTokenInLocalStorage
        }
    ), [isAuthenticated, login, logout, setAuthInLocalStorage, getTokenInLocalStorage]);

    return (
        <AuthContext.Provider value={ value }>
            { children }
        </AuthContext.Provider>
    );

}