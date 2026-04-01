import React from 'react'
import { Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  
    </>
  )
}

export default App
