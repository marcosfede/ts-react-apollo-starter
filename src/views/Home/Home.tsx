import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavLinks = styled.ul`
  font-size: large;
  display: flex;
  flex-direction: column;
`

export default () => {
  return (
    <NavLinks>
      <Link to="/planets">Planets</Link>
      <Link to="/people">People</Link>
      {/* <Link to="/films" disabled={true} >Films</Link>
      <Link to="/species" disabled={true} >Species</Link>
      <Link to="/vehicles" disabled={true} >Vehicles</Link>
      <Link to="/starships" disabled={true} >Starships</Link> */}
    </NavLinks>
  )
}
