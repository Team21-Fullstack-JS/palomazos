//REALIZA UN FETCH A LA API DE MOVIESDB PARA TRAER PELICULAS

/**Params:
 * section: peliculas que se desean traer (/movie/popular, /movie/top_rated, /movie/upcoming)
 * lang: idioma en el que se desean traer las peliculas (es-US, etc)
 * page: pagina de la API que se desea traer
 * */

export function getMovies(section, lang, page) {
    const URL = `${import.meta.env.VITE_API_MOVIES_DB}${section}?language=${lang}&page=${page}`;

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