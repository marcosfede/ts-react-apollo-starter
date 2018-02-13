import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import schema from './api'
import { SchemaLink } from 'apollo-link-schema'

// import { createHttpLink } from 'apollo-link-http'

// const httpLink = createHttpLink({
//   uri: 'https://mpjk0plp9.lp.gql.zone/graphql',
// })

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new SchemaLink({ schema }),
  // connectToDevTools: true
  // link: httpLink
})
