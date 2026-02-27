import React from 'react'
import Foodcard from './Foodcard'
import FoodData from '../data/FoodData'


const Fooditem=()=> {
  return (
    <div className='flex flex-wrap gap-6 justify-center  '>  
      {FoodData.map((food)=>{
        return(
         <Foodcard
          key={food.id}  
          id={food.id}
          name={food.name}
         price ={food.price}
          desc={food.desc}
          rating={food.rating}
          img={food.img}
          />
        
        )
      })}
    </div>
  )
}

export default Fooditem
