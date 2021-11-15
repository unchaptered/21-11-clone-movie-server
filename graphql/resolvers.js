import { getMovie, getMovies, getSuggestion } from "./realdata.js";

const resolvers = {
  Query: {
    movies: (_, { limit, page, quality, rating }) =>
      getMovies(limit, page, quality, rating),
    movie: (_, { id }) => getMovie(id),
    suggest: (_, { id }) => getSuggestion(id),
    /* ./graphql/fake 안에 있다. (fake DB)
    users: () => getUserData(),
    user: (_, { id }) => getUserOne(id),
    */
  },
};

export default resolvers;

console.log("resolvers.js");
