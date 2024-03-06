import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const {cart} = useSelector((state)=>state)
  return (
    <div className=' fixed w-full top-0 z-10 bg-slate-900'>
         <div className='flex flex-row justify-between w-[65%] h-16 items-center mx-auto'>
          
            <NavLink to='/'>
               <div> 
                <img src='/logo.png' alt="" className='h-14'  />
                </div>
           </NavLink>
         
         <div className='flex items-center font-medium text-slate-100 me-5 gap-x-6'>
         <NavLink to='/'>
              <p>Home</p>
            </NavLink>

           <NavLink to='/cart'>
                <div className='relative'>
                    <FaShoppingCart className='text-2xl'/>
                    {
                        cart.length>0 &&
                        <span 
                        className='absolute -top-1 -right-2 bg-green-600 rounded-full w-5 h-5 items-center justify-center flex animate-bounce'
                        >{cart.length}</span>
                    }
                
                </div>
           </NavLink>
         </div>
         
         </div>
    </div>
  )
}

export default Navbar
