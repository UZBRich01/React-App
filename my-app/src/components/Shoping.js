import React from 'react'
import './Shoping.css'
import { BsFillTrashFill } from "react-icons/bs";
export const Shoping = ({id,name,price,quantity,deleteGood,inc,dec}) => {
  console.log(name);
  return (
     <div className='Font'>
      <h4 className='Shoped'>
        <p className='mobile'>{name} | {price} X {quantity}   : {price*quantity}$ </p>
        <span onClick={()=>inc(id)} className='btn mobile-size'>-</span>
        <span onClick={()=>dec(id)} className='btn mobile-size'>+</span>
      <BsFillTrashFill onClick={()=>{
        deleteGood(id)
      }} />
       </h4>

     </div>
 
  

             
  )
}
