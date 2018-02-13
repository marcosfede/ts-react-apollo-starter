import * as React from 'react'
import { graphql, QueryProps } from 'react-apollo'
import gql from 'graphql-tag'
import { allPeopleQuery } from 'api/types'

const PEOPLE_QUERY = gql`
  query allPeople {
    people {
      name
    }
  }
`
interface Props {
  data: allPeopleQuery & QueryProps
}

const People = (props: Props) => {
  if (props.data.loading) {
    return <div>loading...</div>
  }
  if (props.data.error) {
    return <div>error</div>
  }
  const people = props.data.people
  return (
    <ul>{people.map(person => <li key={person.name}>{person.name}</li>)}</ul>
  )
}

export default graphql<allPeopleQuery>(PEOPLE_QUERY)(People)
