import gql from 'graphql-tag'

export const PLANET_QUERY = gql`
  query planet {
    planet(id: 1) {
      name
      rotation_period
      orbital_period
      diameter
      climate
      gravity
      terrain
      surface_water
      population
      residents {
        name
      }
    }
  }
`
