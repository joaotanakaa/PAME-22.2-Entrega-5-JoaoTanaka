import React from 'react'
import ButtonRoute from '../Button'
import { Foot } from './styles'

function Footer() {
    const buts = [{name: 'Checklist', link: '/'},{name: 'Entrada/Saida', link: '/EntradaSaida'}]
    return (
    <Foot> 
        {buts.map((item, index)=>(<ButtonRoute key = {index} name = {item.name} link = {item.link}></ButtonRoute>))}    
    </Foot>
  )
}

export default Footer