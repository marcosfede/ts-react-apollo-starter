import gql from 'graphql-tag'
export default gql`
  type Person {
    name: String
    height: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
    homeworld: Planet
  }

  type Planet {
    name: String
    rotation_period: String
    orbital_period: String
    diameter: String
    climate: String
    gravity: String
    terrain: String
    surface_water: String
    population: String
    residents: [Person]
  }

  type Query {
    people: [Person]
    person(id: Int!): Person
    planets: [Planet]
    planet(id: Int!): Planet
  }

  schema {
    query: Query
  }
`
