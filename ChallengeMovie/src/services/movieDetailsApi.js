import {moviedbKey} from './moviedbKey';
export const movieDetailsApi = id => {
  const MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${id}?api_key=${moviedbKey}&language=en-US`;
  return fetch(MOVIE_DETAILS).then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json),
      ),
  );
};