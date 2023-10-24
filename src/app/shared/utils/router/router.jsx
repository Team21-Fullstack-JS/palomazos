import {createBrowserRouter} from "react-router-dom";
import {CONTACT, LANDING, MOVIES} from "./paths.js";
import {LandingPage} from "../../main/components/landingPage/LandingPage.jsx";
import {Movies} from "../../main/components/movies/Movies.jsx";
import {Contact} from "../../main/components/contact/Contact.jsx";
import App from "../../../App.jsx";
import {NotFound} from "../../errors/NotFound.jsx";

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
            }
        ]
    },

]);