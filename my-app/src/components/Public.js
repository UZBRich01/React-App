import React from 'react'
import { Card } from './Card';


export const Public = ({goods = [],AddGood}) => {
  if(!goods.length){
    return <h1>Not Found !</h1>
  }
  return(
    goods.map((item)=>(
    
      <Card key={item.id} {...item} AddGood={AddGood}/>
    ))
  )
  // return (
    
  // )
}
