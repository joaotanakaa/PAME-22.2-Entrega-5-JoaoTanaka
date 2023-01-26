import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonRoutes } from './styles'

function ButtonRoute({link, name}) {
  return (
    <Link to = {link} style = {{textDecoration: 'none'}}>
        <ButtonRoutes>{name}</ButtonRoutes>
    </Link>
  )
}

export default ButtonRoute