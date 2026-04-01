import { ArrowUpRight } from 'lucide-react'

const ProductCard = ({data}) => {
  return (
    <>
      <div className="card bg-white rounded-4xl p-4 w-full max-w-sm overflow-hidden shadow-2xl relative">
       <div className='absolute z-10 top-6 left-8'>
         <div className='flex items-center justify-between gap-50 '>
            <div className=' font-bold text-sm bg-white/35 rounded-full shadow-2xl'>{data.tag}</div>
            <img src={data.logo} alt="logo" className='rounded-full w-10 bg-white' />
        </div>
       </div>
        <img src={data.photo} alt="" className='w-full h-84 object-content rounded-4xl border-5 border-black' />
        <div className='contect px-6 py-3'>
            <h1 className='font-extrabold text-2xl'>{data.name}</h1>
            <p className='font-bold text-xl text-gray-500 mb-2'>{data.tagline}</p>
            <p className='text-gray-500 font-medium mb-2 text-md'>{data.details}</p>
            <div className='price flex items-centers justify-between mt-2'>
                <h1 className='rounded-full bg-gray-200 px-3 py-1 font-bold'>{data.price}</h1>
               <div className='flex items-center gap-2 text-white bg-black rounded-full px-3 py-1'>
                 <button >BUY NOW</button>
                <ArrowUpRight className='inline-block w-5 h-5 bg-white text-black rounded-full' strokeWidth='2.5'/></div>
            </div>
        </div>

          </div>
    </>
  )
}

export default ProductCard
