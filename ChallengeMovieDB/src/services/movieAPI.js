const MOVIEDB_URL =
  'https://api.themoviedb.org/3/trending/movie/day?api_key=5e4dbaf48b58268cbff212cb6e5c98a0';

export const movieApi = () => {
  return fetch(MOVIEDB_URL).then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json),
      ),
  );
};
