import { requestApi } from '../../../requests/httpClient.js';

export async function UpdateUserReviews(idReview, body) {

    const auth = JSON.parse(window.localStorage.getItem("authPalomazos"));
    const token = 'Bearer ' + auth.token;

    const response = await requestApi(`/reviews/${idReview}`, 'PUT', body, token);
    return await response.json();

}