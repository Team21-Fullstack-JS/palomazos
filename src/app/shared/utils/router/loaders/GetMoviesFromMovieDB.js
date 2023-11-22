import { getMovies } from '../../../requests/httpClientMoviesDB.js';

const POPULAR = '/movie/popular';

export async function GetMoviesFromMovieDB(req, path = POPULAR, lang = 'es-US', page = 1) {

    return await getMovies(path, lang, page);

}