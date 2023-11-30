/**
 * Función para manejar un contexto global de la aplicación
 */

import { createContext, useState, useCallback, useMemo } from "react";
import { useLocation } from 'react-router-dom';
import { BASE, MOVIES, CONTACT } from "../router/paths.js";
import {GetUser} from "../router/loaders/GetUser.js";

export const AuthContext = createContext(); // --> Tiene el objeto Provider

export function AuthContextProvider( { children }) {

    let location = useLocation();

    const [movieFull, setMovieFull] = useState(null);

    const [selectedUserOption, setSelectedUserOption] = useState(null);
    const [selectedGeneralOption, setSelectedGeneralOption] = useState(
        () => location.pathname === BASE ? 0 :
            location.pathname === MOVIES ? 1 :
            location.pathname === CONTACT ? 2 : null);

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
        const data = async () => await GetUser();
        data()
            .then( data => data.json())
            .then( res => {
                if( res.error ) {
                    console.log(res.message);
                    return;
                }

                setUserInLocalStorage(res.data);
            })
            .catch( err => console.log(err) );

        setIsAuthenticated(true);
    }, [setUserInLocalStorage]);

    const logout = useCallback( function () {
        window.localStorage.removeItem("authPalomazos");
        window.localStorage.removeItem("userPalomazos");
        setIsAuthenticated(false);
        setCurrentLocation(null);
    }, []);

    const [arrayMovies, setArrayMovies] = useState(null);

    const [currentLocation, setCurrentLocation] = useState(null);

    const value = useMemo( ()=> (
        {
            login,
            logout,
            isAuthenticated,
            setAuthInLocalStorage,
            getTokenInLocalStorage,
            setUserInLocalStorage,
            getUserInLocalStorage,
            selectedUserOption,
            setSelectedUserOption,
            selectedGeneralOption,
            setSelectedGeneralOption,
            arrayMovies,
            setArrayMovies,
            movieFull,
            setMovieFull,
            currentLocation,
            setCurrentLocation
        }
    ), [
        isAuthenticated,
        login,
        logout,
        setAuthInLocalStorage,
        getTokenInLocalStorage,
        setUserInLocalStorage,
        getUserInLocalStorage,
        selectedUserOption,
        setSelectedUserOption,
        selectedGeneralOption,
        setSelectedGeneralOption,
        arrayMovies,
        setArrayMovies,
        movieFull,
        setMovieFull,
        currentLocation,
        setCurrentLocation
    ]);

    return (
        <AuthContext.Provider value={ value }>
            { children }
        </AuthContext.Provider>
    );

}