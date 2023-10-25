/**
 * Función para manejar un contexto global de la aplicación
 */

import { createContext, useState, useCallback, useMemo } from "react";

export const AuthContext = createContext(); // --> Tiene el objeto Provider

export function AuthContextProvider( { children }) {

    const setAuthInLocalStorage = useCallback( function (auth) {
        window.localStorage.setItem("authPalomazos", JSON.stringify(auth));
    }, []);

    const getTokenInLocalStorage = useCallback( function () {
        return window.localStorage.getItem("authPalomazos");
    }, []);

    const setUserInLocalStorage = useCallback( function (usuario) {
        window.localStorage.setItem("userPalomazos", JSON.stringify(usuario));
    }, []);

    const getUserInLocalStorage = useCallback( function () {
        return window.localStorage.getItem("userPalomazos");
    }, []);

    const [isAuthenticated, setIsAuthenticated] = useState(
        () => window.localStorage.getItem("authPalomazos")
    );

    const login = useCallback(function () {
        setIsAuthenticated(true);
    }, []);

    const logout = useCallback( function () {
        window.localStorage.removeItem("authPalomazos");
        window.localStorage.removeItem("userPalomazos");
        setIsAuthenticated(false);
    }, []);

    const value = useMemo( ()=> (
        {
            login,
            logout,
            isAuthenticated,
            setAuthInLocalStorage,
            getTokenInLocalStorage,
            setUserInLocalStorage,
            getUserInLocalStorage
        }
    ), [
        isAuthenticated,
        login,
        logout,
        setAuthInLocalStorage,
        getTokenInLocalStorage,
        setUserInLocalStorage,
        getUserInLocalStorage
    ]);

    return (
        <AuthContext.Provider value={ value }>
            { children }
        </AuthContext.Provider>
    );

}