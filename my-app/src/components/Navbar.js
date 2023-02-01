import React from 'react'
import './Navbar.css'
import { SlDiamond } from "react-icons/sl";




export const Navbar = () => {

 
  return (
   <div >
<nav className='Navbar'>
  <div className="nav-wrapper">
  <SlDiamond className='Diamont'/>
    <a href="#!" className="brand-logo">toy magazine</a>
    <ul className="right hide-on-med-and-down">
    <div className='Add_card'>
   

    </div>
    </ul>
  </div>
</nav>

   </div>
  )
}
