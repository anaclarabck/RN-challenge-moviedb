export const movieDetailsApi = id => {
  const MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${id}?api_key=5e4dbaf48b58268cbff212cb6e5c98a0&language=en-US`;
  return fetch(MOVIE_DETAILS).then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json),
      ),
  );
};
