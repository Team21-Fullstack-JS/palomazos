import { requestApi } from '../../../requests/httpClient.js';

export async function GetMovieById(movieId) {

    const auth = JSON.parse(window.localStorage.getItem("authPalomazos"));
    const token = 'Bearer ' + auth.token;

    const response = await requestApi(`/movies/${movieId}`, 'GET', null, token);
    return await response.json();

}