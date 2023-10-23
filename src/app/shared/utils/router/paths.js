const BASE = '/palomazos/';

//MENÚ PRINCIPAL: LOS 4
export const LANDING = BASE;
export const MOVIES  = BASE + "movies";
export const CONTACT = BASE + 'contact';

/*//USUARIOS NO REGISTRADOS
export const USUARIOS = '/usuarios/';
export const SIGNUP = 'signup';
export const LOGIN = 'login';

//USUARIOS REGISTRADOS
export const USUARIO_ = 'usuario';
export const USUARIO = '/usuario/:id';
export const DASHBOARD = 'dashboard';
export const MIS_PELICULAS = 'mis-Películas';
export const LOGOUT = 'logout';*/

export const linkOption = {
    'Inicio': () => LANDING,
    'Peliculas': () => MOVIES,
    'Contacto': () => CONTACT,
}