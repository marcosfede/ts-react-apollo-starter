import * as React from 'react'
import { Route } from 'react-router-dom'
import { Home } from '..'
import { Layout } from '..'
import Planets from '@modules/swapi/views/planets'
import People from '@modules/swapi/views/people'

export default () => {
  return (
    <Layout>
      <Route exact={true} path="/" component={Home} />
      <Route path="/planets" component={Planets} />
      <Route path="/people" component={People} />
      <Route path="/films" component={Home} />
      <Route path="/species" component={Home} />
      <Route path="/vehicles" component={Home} />
      <Route path="/starships" component={Home} />
    </Layout>
  )
}
