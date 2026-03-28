
import { Route, Routes } from 'react-router-dom'
import Product from './Pages/Product'
import NavBar from './Layout/NavBar'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Footer from './Layout/Footer'
import Collection from './Pages/Collection'


const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/product/:id' element={< Product/>} />
      </Route>
    </Routes>
    <Footer/>
     
    </>
  )
}

export default App
