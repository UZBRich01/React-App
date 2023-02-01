import React from 'react'
import './Card.css'




export const Card = ({id,name,full_background,price,AddGood}) => {
  const btn ='btn align'
  return (

        <div className='Card'>
            <img src={full_background} className='Image'/>
            <div className='auto'>
            <h5 id={id}>{price}</h5>
            <h4 className='H4'>{name}</h4>
            
            <button className={btn} onClick={()=>{
              AddGood(id,name,price)
            }}>Buy</button>
            </div>
           
        </div>
  )
 
}
