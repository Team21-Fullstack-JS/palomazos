import { requestApi } from '../../../requests/httpClient.js';

export async function GetUserReviews() {

    const auth = JSON.parse(window.localStorage.getItem("authPalomazos"));
    const token = 'Bearer ' + auth.token;

    const response = await requestApi('/users/me?reviews=true', 'GET', null, token);
    return await response.json();

}