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
const Planets = ({data}: {data: any}) => {
  if (data.loading) {
    return <div>loading...</div>
  }
  if (data.error) {
    return <div>error</div>
  }
  if (data.planets) {
    return (
      <ul>
        {data.planets.map((planet: any) => <li key={planet.name}>{planet.name}</li>)}
      </ul>
    )
  }
  return null
}

export default graphql(PLANETS_QUERY)(Planets)
