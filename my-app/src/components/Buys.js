import React from 'react'
import { Shoping } from './Shoping';
import './Shoping.css'

export const Buys = ({Buy,order,deleteGood,inc,dec}) => {
  const Order=order.reduce((sum,el)=>
     sum+el.quantity*el.price
  ,0)
  return (
    <div className='Opasity'>
      <div className='Opacity'>
      
        {order.map((item)=>(
          <Shoping key={item.id} {...item} deleteGood={deleteGood} inc={inc} dec={dec}/>

        ))}
        <h1 className='btn'> TotalPrice: {Order}$</h1>
    </div>
    </div>
  )
  
}
 // <div >

    //   {/* <div className='ShopUz'> */}
    //   <div className='CartParent' onClick={Buy}>
    //     <h4 className='Topic'>Your Buys</h4>
    //     <div class="collection">
    //       {order.map(item=>(
    //           <Shoping key={item.id} {...item} />
    //       ))}
    //      </div>
    //   </div>
    // </div>
    // </div>
