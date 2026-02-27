import React from 'react'

function Navbar() {
  return (
    <nav  className='flex flex-col lg:flex-row justify-between mx-10 mb-10' > 
      <div>
        <h3 className='text-xl font-bold text-green-600'>{ new Date().toUTCString().slice(0,16)}</h3>
        <h2 className='text-xl font-bold'>Food Hub</h2>
      </div>
      <div>
       <input type="search "
        name='searh'
         placeholder='search here'
          autoComplete='off'
          className='p-3 border border-gray-400 text-sm  rounded-lg outline-none w-full lg:w-[25vw]'
            />
      </div>
    </nav>
  )
}

export default Navbar;
