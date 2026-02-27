import React from 'react'
import Categorymenu from '../componanents/Categorymenu'
import Fooditem from '../componanents/Fooditem'
import Navbar from '../componanents/Navbar'

function Home() {
  return (
    <div>
      <Navbar/>
      <Categorymenu/>
      <Fooditem/>
    </div>
  )
}

export default Home
