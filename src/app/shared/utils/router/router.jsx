import {createBrowserRouter} from "react-router-dom";
import {
    CONTACT,
    DASHBOARD,
    LANDING,
    LOGIN,
    MIS_PELICULAS,
    MOVIES,
    SIGNUP,
    USUARIO_,
    USUARIOS
} from "./paths.js";
import {LandingPage} from "../../main/components/landingPage/LandingPage.jsx";
import {Movies} from "../../main/components/movies/Movies.jsx";
import {Contact} from "../../main/components/contact/Contact.jsx";
import App from "../../../App.jsx";
import {NotFound} from "../../errors/NotFound.jsx";
import {Login} from "../../../users/components/login/Login.jsx";
import {SignUp} from "../../../users/components/signup/SignUp.jsx";
import {UserGuestRoutes} from "../../main/routes/UserGuestRoutes.jsx";
import {UserPrivateRoutes} from "../../main/routes/UserPrivateRoutes.jsx";
import {MiCuenta} from "../../../users/components/miCuenta/MiCuenta.jsx";
import {MisPeliculas} from "../../../users/components/misPeliculas/MisPeliculas.jsx";
import { GetUser } from "./loaders/GetUser.js";
import { GetUserReviews } from "./loaders/GetUserReviews.js";
import {GetMoviesFromMovieDB} from "./loaders/GetMoviesFromMovieDB.js";
import {GridMovies} from "../../../Movies/pages/GridMovies.jsx";

export const router = createBrowserRouter([
    {
        path: LANDING,
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <LandingPage />,
            },
            {
                path: MOVIES,
                loader: GetMoviesFromMovieDB,
                element: <GridMovies />,
            },
            {
                path: CONTACT,
                element: <Contact />,
            },
            {
                path: USUARIOS,
                element: <UserGuestRoutes />,
                children: [
                    {
                        index: true,
                        element: <LandingPage />,
                    },
                    {
                        path: LOGIN,
                        element: <Login />,
                    },
                    {
                        path: SIGNUP,
                        element: <SignUp />,
                    }
                ]
            },
            {
                path: USUARIO_,
                element: <UserPrivateRoutes />,
                children: [
                    {
                        index: true,
                        loader: GetUser,
                        element: <MiCuenta />,
                    },
                    {
                        path: DASHBOARD,
                        loader: GetUser,
                        element: <MiCuenta />,
                    },
                    {
                        path: MIS_PELICULAS,
                        loader: GetUserReviews,
                        element: <MisPeliculas />,
                    }
                ]
            }
        ]
    }

]);