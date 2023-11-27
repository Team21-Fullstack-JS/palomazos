import { requestApi } from '../../../requests/httpClient.js';

export async function GetMoviesWithReviews() {

    const response = await requestApi('/movies?reviews=true', 'GET', null, null);
    return await response.json();

}