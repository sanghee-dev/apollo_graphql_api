import fetch from "node-fetch";

const API_URL = "https://yts.mx/api/v2/list_movies.json";

export const getMovies = (limit, rating) =>
  fetch(`${API_URL}?limit=${limit}&minimum_rating=${rating}`)
    .then((res) => res.json())
    .then((json) => json.data.movies);

export const addMovie = () => {};

export const deleteMovie = () => {};
