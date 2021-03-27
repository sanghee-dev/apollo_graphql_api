let movies = [
  {
    id: "0",
    name: "Howl's moving castle",
    year: 2004,
  },
  {
    id: "1",
    name: "Soul",
    year: 2021,
  },
  {
    id: "2",
    name: "Inside Out",
    year: 2015,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === String(id));
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== String(id));
  if (cleanedMovies) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
