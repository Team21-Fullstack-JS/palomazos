//REALIZA UN FETCH A LA API DE MOVIESDB PARA TRAER PELICULAS

/**Params:
 * section: peliculas que se desean traer (/movie/popular, /movie/top_rated, /movie/upcoming)
 * lang: idioma en el que se desean traer las peliculas (es-US, etc)
 * page: pagina de la API que se desea traer
 * */

export function getMovies(section, lang, page) {
    const API_MOVIES_DB = 'https://api.themoviedb.org/3';

    const URL = `${API_MOVIES_DB}${section}?language=${lang}&page=${page}`;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_MOVIES_DB_TOKEN}`
        }
    };

    return fetch(URL, options)
        .then(response => response.json())
        .then(data => data.results )
        .catch(error => console.log(error));
}

export const IMG_URL_ORIGINAL = 'https://image.tmdb.org/t/p/original';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';