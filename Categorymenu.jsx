import React from 'react'

function Categorymenu() {
  return (
    <div className='ml-6'>
      <h2 className='font-semibold text-xl'>find best food </h2>
      <div className='  flex gap-3 py-3 px-3  overflow-x-scroll lg:overflow-x-hidden'>
        <button className=' py-3 px3 bg-gray-200 rounded-lg hover:bg-green-300 '>All</button>
        <button className=' py-3 px3 bg-gray-200 rounded-lg hover:bg-green-300'>Lunch</button>
        <button className=' py-3 px3 bg-gray-200 rounded-lg hover:bg-green-300'>Break fast</button>
        <button className=' py-3 px3 bg-gray-200 rounded-lg hover:bg-green-300'>Dinner</button>
      </div>
    </div>
  )
}

export default Categorymenu
