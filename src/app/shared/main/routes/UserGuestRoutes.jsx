/**
 * Componente que redirecciona al usuario invitado (cuando
 * no está autenticado): Login, Signup
 */

import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../utils/hooks/useAuthContext';
import { USUARIO_ } from '../../utils/router/paths.js';

export function UserGuestRoutes() {

    const userToken = JSON.parse(window.localStorage.getItem("usuarioLogueadoPalomazos"));
    console.log("userToken: ", userToken);

    const { isAuthenticated } = useAuthContext();
    console.log("isAuthenticated: ", isAuthenticated);

    return isAuthenticated ? <Navigate to={`/${USUARIO_}/${userToken.id}/`}/> : <Outlet />;
}