import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
const NavLinks = styled.ul`
  font-size: large;
  display: flex;
  flex-direction: column;
`

export default () => {
  return (
    <Root>
      <Header>
        <Welcome>welcome</Welcome>
      </Header>
      <NavLinks>
        <Link to="/planets">Planets</Link>
        <Link to="/films">Films</Link>
        <Link to="/people">People</Link>
        <Link to="/species">Species</Link>
        <Link to="/vehicles">Vehicles</Link>
        <Link to="/starships">Starships</Link>
      </NavLinks>
    </Root>
  )
}
