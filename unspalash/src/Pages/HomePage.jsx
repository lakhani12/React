import React from 'react'
import SideBar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'

const HomePage = () => {
  return (
    <>
    <section className='w-full h-screen flex'>
        <div className='w-16 h-screen border-r border-r-gray-300'>
          <SideBar/>
        </div>
        <div className='w-full h-screen px-4 py-2'>
            <Navbar/>
        </div>
    </section>
    </>
  )
}

export default HomePage