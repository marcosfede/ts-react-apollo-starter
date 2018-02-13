import * as React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const PEOPLE_QUERY = gql`
  query allPeople{
    people {
      name
    }
  }
`
const People = ({data}) => {
  if (data.loading) {
    return <div>loading...</div>
  }
  if (data.error) {
    return <div>error</div>
  }
  if (data.people) {
    return (
      <ul>
        {data.people.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
    )
  }
  return null
}

export default graphql(PEOPLE_QUERY)(People)
