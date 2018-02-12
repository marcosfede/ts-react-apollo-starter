import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import { PLANET_QUERY } from './queries'

const Root = styled.div`
  text-align: center;
`
const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`
const Welcome = styled.h1`
  font-size: 1.5em;
`
const Intro = styled.p`
  font-size: large;
`
type Planet = {
  name: string
}
type Response = {
  planet: Planet
}

const withPlanet = graphql<Response>(PLANET_QUERY)

export default withPlanet(({data}) => {
  return data.loading || !data.planet ? null : (
    <Root>
      <Header>
        <Welcome>welcome {data.planet.name}</Welcome>
      </Header>
      <Intro>
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </Intro>
    </Root>
  )
})
