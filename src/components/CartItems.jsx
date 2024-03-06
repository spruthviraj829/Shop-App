import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
const CartItems = ({item}) => {

    const dispatch = useDispatch()
    function removeFromCart(){
        dispatch(remove(item.id))
        }

  return (

    <div>
        <div className='flex w-full gap-10 p-3 '>
              
              <div className=' min-w-40 max-w-44 h-[180px]'>
                <img src={item.image} alt="" className='w-full h-full' />
              </div>
              <div>
                <h1 className='text-gray-700 font-semibold text-lg   text-left mt-1'>{item.title}</h1>
                <h1 className='text-gray-400  text-sm font-semibold w-full text-left mt-2'>{item.description.split(" ").slice(0 ,15).join(" ")+"..."}</h1>
                <div className='flex justify-between text-center p-2 mt-6 mr-4'>
                    <p className='text-green-600 font-bold'>${item.price}</p>
                    <div 
                    className='bg-red-300 rounded-full relative flex h-7 w-7 justify-center text-center'
                    onClick={removeFromCart}>
                     <MdDelete className='text-red-500 top-1 cursor-pointer absolute' /> 
                    </div>
                </div>
              </div>
            
        </div>
        <div className='w-full h-[1px] bg-gray-600 mb-3'></div>
    </div>
  )
}

export default CartItems
