import {createBrowserRouter} from "react-router-dom";
import {CONTACT, LANDING, MOVIES} from "./paths.js";
import {LandingPage} from "../../main/components/landingPage/LandingPage.jsx";
import {Movies} from "../../main/components/movies/Movies.jsx";
import {Contact} from "../../main/components/contact/Contact.jsx";
import App from "../../../App.jsx";

export const router = createBrowserRouter([
    {
        path: LANDING,
        element: <App />,
        errorElement: <div>404 Not Found</div>,
        children: [
            {
                path: LANDING,
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