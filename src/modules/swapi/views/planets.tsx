import * as React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const PLANETS_QUERY = gql`
  query allPlanets{
    planets {
      name
    }
  } 
`
const Planets = ({ data }) => {
  if (data.loading) {
    return <div>loading...</div>
  }
  if (data.error) {
    return <div>error</div>
  }
  return (
    <ul>
      {data.planets.map(planet => <li key={planet.name}>{planet.name}</li>)}
    </ul>
  )
}

export default graphql(PLANETS_QUERY)(Planets)
