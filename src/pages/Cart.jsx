import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItems from '../components/CartItems';

const Cart = () => {
    const { cart } = useSelector(state => state);

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const amount = cart.reduce((acc, cur) => acc + parseFloat(cur.price), 0); // parseFloat to convert price strings to numbers
        setTotalAmount(amount);
    }, [cart]);

    return (
        <div className='mt-20 w-[65%] mx-auto  mb-12 relative '>
            {cart.length > 0 ? (
                <div className='flex sm:flex-col flex-col mx-auto  xs:flex-col lg:flex-row gap-10 '>

                <div className='flex gap-5 w-[60%] flex-col  '>
                    {cart.map(item => (
                        <CartItems item={item} key={item.id} />
                    ))}
                </div>

             <div className='flex flex-col  text-left mt-10 w-[40%] gap-10 xs: lg:fixed -right-1 '>
             <div>
                    <div className='text-green-600 uppercase font-bold'>Your Cart</div>
                    <div className='text-green-600 uppercase font-bold text-3xl'>Summary</div>
                    <p className='mt-3'>
                        <span className='font-semibold '>Total Items : {cart.length}</span>
                    </p>
                </div>

                <div>
                    <p className='font-semibold'>Total Amount: <span className='font-bold'> ${totalAmount}</span></p>
                    <button className='bg-green-800 rounded-md text-white w-[50%] p-1 mt-2'>Checkout Now</button>
                </div>
            </div>

            </div>
            ) : (
                <div className=' w-full  h-[500px] gap-5 flex justify-center text-center flex-col overflow-y-hidden '>
                    <h1 className='font-semibold text-2xl'> Cart is Empty</h1>
                    <Link to='/'>
                        <button className='border bg-green-600 rounded-md p-1 px-3 text-white'>Shop Now</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
