
import { Route, Routes } from 'react-router-dom'
import Product from './Pages/Product'
import NavBar from './Layout/NavBar'
import Home from './Pages/Home'


const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route>
        <Route path='/' element={<Home/>} />
           <Route path='/product/:id' element={< Product/>} />
      </Route>
    </Routes>
     
    </>
  )
}

export default App
