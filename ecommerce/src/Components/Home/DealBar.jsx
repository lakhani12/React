import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';
import DealCard from '../../ui/DealCard';

const DealBar = () => {
    const [Deal, setDeal] = useState([])
    useEffect(() => {
        const fetchDeal = async() => {
            try {
                let response =await  axios.get('https://dummyjson.com/products?limit=10&skip=5')
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
    <section className='overflow-x-auto w-[80%] mx-autopx-6'>
     <div className='flex gap-6'>
           {Deal.map((data) => (
            <Link to={`/product/${data.id}`} key={data.id}>
            < DealCard productData={data}/>
            </Link>
        ))}
     </div>
    </section>
    </>
  )
}

export default DealBar;