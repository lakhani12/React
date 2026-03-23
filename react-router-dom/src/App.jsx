import { Route, Routes } from 'react-router-dom'
import Footer from './Layout/Footer'
import Navbar from './Layout/Navbar'
import About from './Pages/About'
import Contect from './Pages/Contect'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Collection from './Pages/Collection'
import NotFound from './Pages/NotFound'


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Product' element={<Product/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contect' element={<Contect/>}></Route>
        <Route path='/product/collection' element={<Collection/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
