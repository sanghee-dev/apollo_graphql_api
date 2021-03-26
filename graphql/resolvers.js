const Sanghee = {
  name: "sanghee",
  age: 18,
  gender: "female",
};

const resolvers = {
  Query: {
    person: () => Sanghee,
  },
};

export default resolvers;
