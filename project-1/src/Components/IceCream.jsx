import React from 'react'

const IceCream = () => {
  return (
    <>
      <div className="card bg-green-100 rounded-4xl p-4 w-full max-w-sm overflow-hidden shadow-2xl relative">
        <div>
            <img src="https://i.pinimg.com/736x/75/cf/f1/75cff18ab9650cd1ad3e0167df09b70a.jpg" alt="image" className='w-96 h-full rounded-[10%] object-cover' />
            <span className='py-1'>Get befor it Melt And Greab 10% discount Above 1000$ Order</span>
            <div>
                <h1 className='text-bold-black text-3xl'>Black Forest</h1>
                <div>
                    <span>Cherry</span>
                    <span>milk</span>
                    <span>Choclet Chips</span>
                </div>
            </div>
            <div>
                <h2>$10</h2>
                <p>+2$delivery</p>
                <button>Add to Cart</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default IceCream
