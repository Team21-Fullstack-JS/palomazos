export const BASE = '/palomazos/';

//MENÚ PRINCIPAL: LOS 4
export const LANDING = BASE;
export const MOVIES  = BASE + "movies";
export const MOVIES_SEARCH  = MOVIES + "/search";
export const MOVIES_POPULAR  = MOVIES + "/popular";
export const MOVIES_UPCOMING  = MOVIES + "/upcoming";
export const MOVIES_NOW_PLAYING  = MOVIES + "/now-playing";
export const MOVIES_TOP_RATED  = MOVIES + "/top-rated";
export const CONTACT = BASE + 'contact';

//USUARIOS NO REGISTRADOS
export const USUARIOS = BASE + 'usuarios';
export const SIGNUP = 'signup';
export const LOGIN = 'login';

//USUARIOS REGISTRADOS
export const USUARIO_ = BASE + 'usuario';
export const USUARIO = ':id';
export const DASHBOARD = 'dashboard';
export const MIS_PELICULAS = 'mis-peliculas';
export const LOGOUT = 'logout';

export const linkOption = (stringOption) => {
    const stringWithoutSpaces = stringOption.replace(/\s/g, '');
    return options[stringWithoutSpaces]();
}

const options = {
    'Inicio': () => LANDING,
    'Peliculas': () => MOVIES,
    'Contacto': () => CONTACT,
    'Ingresar': () => USUARIOS + '/' + LOGIN,
    'Registro': () => USUARIOS + '/' + SIGNUP,
    'Micuenta': () => USUARIO_ + '/' + DASHBOARD,
    'Mispeliculas': () => USUARIO_ + '/' + MIS_PELICULAS,
    'Salir': () => USUARIO_ + '/' + LOGOUT,
}