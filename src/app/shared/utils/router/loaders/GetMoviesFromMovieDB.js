import { getMovies } from '../../../requests/httpClientMoviesDB.js';

export async function GetMoviesFromMovieDB(path, lang, page) {

    return await getMovies(path, lang, page);

}