/**
 * Componente que redirecciona al usuario autenticado (dado de alta y logueado)
 * a sus respectivas rutas: Mi Cuenta, Mis Peliculas, Administracion (si es admin)
 * y Logout.
 */

import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../utils/hooks/useAuthContext';
import { USUARIOS } from '../../utils/router/paths.js';

export function UserPrivateRoutes() {

    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ? <Outlet /> : <Navigate to={`${USUARIOS}`}/>;
}