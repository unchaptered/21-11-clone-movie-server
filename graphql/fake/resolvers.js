import { getUserData, getUserOne } from "./data.js";

console.log("resolvers.js on");

const resolvers = {
  Query: {
    users: () => getUserData(),
    user: (_, { id }) => getUserOne(id),
    // data: (_, { id }) => getDataOne(id),
  },
};

export default resolvers;
