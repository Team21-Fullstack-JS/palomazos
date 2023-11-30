import { requestApi } from '../../../requests/httpClient.js';

export async function CreateNewMovie(body) {

    const auth = JSON.parse(window.localStorage.getItem("authPalomazos"));
    const token = 'Bearer ' + auth.token;

    const response = await requestApi(`/movies`, 'POST', body, token);
    return await response.json();

}