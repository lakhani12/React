import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Product from './Pages/Product'

import NavBar from './Layout/NavBar'


const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route>
        <Route path='/' element={<Home />} />
           <Route path='/product/:id' element={< Product/>} />
      </Route>
    </Routes>
     
    </>
  )
}

export default App
