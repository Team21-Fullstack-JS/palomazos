import { requestApi } from '../../../requests/httpClient.js';

export async function CreateMoviesReviews(idReview, body) {

    const auth = JSON.parse(window.localStorage.getItem("authPalomazos"));
    const token = 'Bearer ' + auth.token;

    const response = await requestApi(`/movies/${idReview}/reviews`, 'POST', body, token);
    return await response.json();

}