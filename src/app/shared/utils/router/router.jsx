import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {CONTACT, LANDING, LOGIN, MOVIES, SIGNUP, USUARIOS} from "./paths.js";
import {LandingPage} from "../../main/components/landingPage/LandingPage.jsx";
import {Movies} from "../../main/components/movies/Movies.jsx";
import {Contact} from "../../main/components/contact/Contact.jsx";
import App from "../../../App.jsx";
import {NotFound} from "../../errors/NotFound.jsx";
import {Login} from "../../../users/components/login/Login.jsx";
import {SignUp} from "../../../users/components/signup/SignUp.jsx";
import {UserGuestRoutes} from "../../main/routes/UserGuestRoutes.jsx";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path={LANDING} element={<App />} errorElement={<NotFound />}>
      <Route index element={<LandingPage />}/>
      <Route path={MOVIES} element={<Movies />}/>
      <Route path={CONTACT} element={<Contact />}/>
      <Route path={USUARIOS} element={<UserGuestRoutes />}>
        <Route index element={<Login />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={SIGNUP} element={<SignUp />} />
      </Route>
    </Route>
));
