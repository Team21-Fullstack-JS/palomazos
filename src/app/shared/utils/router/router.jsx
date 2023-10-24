import {createBrowserRouter} from "react-router-dom";
import {CONTACT, LANDING, LOGIN, MOVIES, SIGNUP, USUARIOS} from "./paths.js";
import {LandingPage} from "../../main/components/landingPage/LandingPage.jsx";
import {Movies} from "../../main/components/movies/Movies.jsx";
import {Contact} from "../../main/components/contact/Contact.jsx";
import App from "../../../App.jsx";
import {NotFound} from "../../errors/NotFound.jsx";
import {Login} from "../../../users/components/login/Login.jsx";
import {SignUp} from "../../../users/components/signup/SignUp.jsx";
import {UserGuestRoutes} from "../../main/routes/UserGuestRoutes.jsx";

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
                element: <Movies />,
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
                        element: <Login />,
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
            }
        ]
    }

]);