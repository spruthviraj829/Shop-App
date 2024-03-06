import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slices/CartSlice';

const Product = ({post}) => {

    const [selected , setSelected] = useState(false)
    // const {cart} =  useSelector((state)=>state)
    // onClick={()=>{setSelected(!selected)}}
    const {cart} = useSelector((state)=>state)
   const dispatch = useDispatch();
  function addToCart() {
    dispatch(add(post))
  }
  function removeFromCart(){
  dispatch(remove(post.id))
  }

  return (
    <div className='flex flex-col justify-center text-center items-center
     hover:scale-110 shadow-md transition-all duration-200  p-5 mt-10 gap-3 rounded-xl '>
           <div>
            <p className='text-gray-700 font-semibold text-lg truncate w-40 text-left mt-1'>{post.title}</p>
           </div>
           <div>
            <p className='text-gray-400 font-normal text-[12px] w-full text-left'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
           </div>

           <div className='h-[180px] w-40'>
             <img src={post.image} alt=""  className='h-full w-full' />
           </div>
   
           <div className='flex  items-center justify-between w-full mt-4'>

              <div>
                <p className='text-green-600 font-semibold'>${post.price}</p>
              </div>
                    
             <div>
                 {
                    cart.some((p)=> p.id == post.id) ?
                     <button 
                     className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold
                      text-[12px] p-1 px-3 hover:bg-gray-700
                      hover:text-white
                      transition-all duration-200'
                     onClick={removeFromCart}>Remove Item</button> :
                    <button
                    className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold
                      text-[12px] p-1 px-3 hover:bg-gray-700
                      hover:text-white
                      transition-all duration-200'
                    onClick={addToCart}>Add to Cart</button>
                 }
             </div>
           </div>
       
    </div>
  )
}

export default Product
