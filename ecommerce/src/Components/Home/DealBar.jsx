import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';
import DealCard from '../../ui/DealCard';

const DealBar = () => {
    const [Deal, setDeal] = useState([])
    useEffect(() => {
        const fetchDeal = async() => {
            try {
                let response =await  axios.get('https://dummyjson.com/products?limit=10&skip=10')
                console.log(response.data)
                setDeal(response.data.products)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchDeal()
      }, []);
  return (
    <>
    <section className='flex w-full pl-10 overflow-x-auto items-center justify-center gap-6 py-10 px-6'>
        {Deal.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id}>
            < DealCard/>
            </Link>
        ))}
    </section>
    </>
  )
}

export default DealBar;