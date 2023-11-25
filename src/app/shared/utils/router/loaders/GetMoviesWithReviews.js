import { requestApi } from '../../../requests/httpClient.js';

export async function GetMoviesWithReviews() {

    const auth = JSON.parse(window.localStorage.getItem("authPalomazos"));
    const token = 'Bearer ' + auth.token;

    const response = await requestApi('/movies?reviews=true', 'GET', null, token);
    return await response.json();

}