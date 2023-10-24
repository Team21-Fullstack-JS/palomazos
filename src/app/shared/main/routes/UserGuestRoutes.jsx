/**
 * Componente que redirecciona al usuario invitado (cuando
 * no está autenticado): Login, Signup
 */

import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../utils/hooks/useAuthContext';
import { USUARIO_ } from '../../utils/router/paths.js';

export function UserGuestRoutes() {

    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ? <Navigate to={`${USUARIO_}/`}/> : <Outlet />;
}