const endpoint = 'https://swapi.co/api/'
const toJSON = (res: any) => res.json()

const people = () =>
  fetch(`${endpoint}people`)
    .then((data: any) => data.results)
    .then(toJSON)
    .catch(console.error)
const person = (root: any, { id }: { id: number }) =>
  fetch(`${endpoint}people/${id}`)
    .then(toJSON)
    .catch(console.error)
const planets = () =>
  fetch(`${endpoint}planets`)
    .then((data: any) => data.results)
    .then(toJSON)
    .catch(console.error)
const planet = (root: any, { id }: { id: number }) =>
  fetch(`${endpoint}planets/${id}`)
    .then(toJSON)
    .catch(console.error)

const resolvers = {
  Query: {
    people,
    person,
    planets,
    planet,
  },
  Planet: {
    residents: ({ residents }: { residents: any }) =>
      residents.map((url: any) => fetch(url).then(toJSON)),
  },
  Person: {
    homeworld: ({ homeworld }: { homeworld: any }) =>
      fetch(homeworld).then(toJSON),
  },
}
export default resolvers
