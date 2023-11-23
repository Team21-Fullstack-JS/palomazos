import {createBrowserRouter, redirect} from "react-router-dom";
import {
    CONTACT,
    DASHBOARD,
    LANDING,
    LOGIN,
    MIS_PELICULAS,
    MOVIES, MOVIES_NOW_PLAYING, MOVIES_POPULAR, MOVIES_SEARCH, MOVIES_TOP_RATED, MOVIES_UPCOMING,
    SIGNUP,
    USUARIO_,
    USUARIOS
} from "./paths.js";
import {LandingPage} from "../../main/components/landingPage/LandingPage.jsx";
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
import {MoviesLanding} from "../../../Movies/pages/MoviesLanding.jsx";

const UPCOMING = '/movie/upcoming';
const TOP_RATED = '/movie/top_rated';
const NOW_PLAYING = '/movie/now_playing';
const POPULAR = '/movie/popular';

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
                element: <MoviesLanding />,
                children: [
                    {
                        index: true,
                        loader: () => redirect(MOVIES_POPULAR),
                    },
                    {
                        path: MOVIES_SEARCH,
                        exact: true,
                        element: <GridMovies section='search' />,
                    },
                    {
                        path: MOVIES_POPULAR,
                        loader: () => GetMoviesFromMovieDB(POPULAR, 'es-US', 1),
                        element: <GridMovies section={POPULAR} />,
                    },
                    {
                        path: MOVIES_TOP_RATED,
                        loader: () => GetMoviesFromMovieDB(TOP_RATED, 'es-US', 1),
                        element: <GridMovies section={TOP_RATED} />,
                    },
                    {
                        path: MOVIES_NOW_PLAYING,
                        loader: () => GetMoviesFromMovieDB(NOW_PLAYING, 'es-US', 1),
                        element: <GridMovies section={NOW_PLAYING} />,
                    },
                    {
                        path: MOVIES_UPCOMING,
                        loader: () => GetMoviesFromMovieDB(UPCOMING, 'es-US', 1),
                        element: <GridMovies section={UPCOMING} />,
                    },
                ]
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
                        loader: () => redirect(DASHBOARD),
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