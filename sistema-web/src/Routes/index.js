import React from 'react'
import { Routes, Route } from 'react-router-dom'
import WebPage from '../Pages/WebPage'
import EntradaSaida from '../Pages/EntradaSaida'

function Rotas() {
  return (
    <Routes>
        <Route path='/' element = {<WebPage/>}/>
        <Route path='EntradaSaida' element = {<EntradaSaida/>}/>
    </Routes>
  )
}

export default Rotas