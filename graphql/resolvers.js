import { getMovies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, year }) => addMovie(name, year),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
