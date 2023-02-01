import React, { useEffect, useReducer, useState } from 'react'
import './Shop.css'
import { TiShoppingCart, TiTimes }  from "react-icons/ti";
import { Loader } from './Loader';
import { Public } from './Public';
import { Buys } from './Buys';
import { Shoping } from './Shoping';
import { toast } from 'react-toastify';

 const Shop = () => {
  const api_key='e7ac8aa7-779f6436-8b7bafc6-d8840aec'
  const [goods,setGoods]=useState([])
  const [loading,setLoading]=useState(true)
  const [order,setOrder]=useState([])
  const [buys,setBuys]=useState(false)
  const Buy=()=>{
    if(order.length !==0){
        setBuys(!buys)
    }
  }
  const deleteGood =(id)=>{
    const newGoods = order.filter(item=> item.id !== id)
     setOrder(newGoods)
     toast.error('delete')
  }
 
  
  const AddGood=(id,name,price)=>{
    const indexItem=order.findIndex((index)=>index.id==id)
    if(indexItem<0){
      const newItem = {
        id,
        name,
        price,
        quantity:1
      }
       
    setOrder([...order,newItem])
    }
    else{
      const FindItem=order.map(item=>{
        if(item.id===id){
          return {
            ...item,
            quantity: item.quantity+1
          }
        }
        else{
          return item
        }
      })
      setOrder(FindItem)
      // const NewGood={
      //   id,
      //   name,
      //   price,
      //   quantity:1
      // }
    }
  toast.success(`${name} added buy`)
  }

  const dec =(id)=>{
   
      const FindItem=order.map(item=>{
        if(item.id===id){
          return {
            ...item,
            quantity: item.quantity+1
          }
        }
        else{
          return item
        }
      })
  setOrder(FindItem)
  }
  const inc =(id)=>{
      const FindItem=order.map(item=>{
        if(item.id===id){
          return {
            ...item,
            quantity: item.quantity>1 ? item.quantity-1 :1
          }
        }
        else{
          return item
        }
      })
   setOrder(FindItem)
  }
       useEffect(()=>{
           fetch('https://fortniteapi.io/v1/shop?lang=en',{
               headers:({
                     Authorization: api_key
                   })
})
.then(res=>res.json())
.then(data=>{
 data.featured && setGoods(data.featured)
    setLoading(false)
    console.log(data);
})
},[])

return(
   <div className='Cards'> <TiShoppingCart className='Shop' onClick={Buy}/>
  
    {  buys && order.length !==0 ? <Buys Buy={Buy} order={order} deleteGood={deleteGood} inc={inc} dec={dec}  /> : null }
    {/* {buys ? <Shoping Buy={Buy} /> : null} */}
    {order.length!==0 ? <span id='card_number'>{order.length}</span> : null}
    {loading ? <Loader/> : <Public goods={goods}  AddGood={AddGood} className='goods'/>}
   </div>
  
)

}
export default Shop

// {!data.length ? (<Loader/>):(setGoods(data.featured))} 