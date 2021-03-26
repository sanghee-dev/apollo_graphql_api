export const people = [
  {
    id: "0",
    name: "apple",
    age: 18,
    gender: "female",
  },
  {
    id: "1",
    name: "orange",
    age: 19,
    gender: "male",
  },
  {
    id: "2",
    name: "kiwi",
    age: 22,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
