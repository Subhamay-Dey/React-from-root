import React, { useState, useContext } from 'react';
import Props from './Props';
import arr from './product';
import UseProduct from '../contexts/UseProduct';

const Cart = () => {

  const {cart, setCart} = useContext(UseProduct);

  const totalPrice = cart.reduce((accumulator, item) => accumulator + item.price, 0);

  if(cart.length === 0)
    {
      return (
        <div className='bg-slate-700 h-screen w-full flex justify-center items-center flex-wrap gap-5 p-6'>
          <div className='h-[120px] w-[80%] text-xl text-center px-6 py-4 bg-gray-400 rounded-xl flex justify-center items-center'><h1>Your cart is empty!</h1></div>
        </div>
      )
    }

  return (
    <>
      <div className="container mx-auto py-8">
    <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>

    {/* Cart items */}
    <div className="grid grid-cols-1 gap-4">
      {cart.map(item => (
        <div
          key={item.id}
          className="bg-white p-4 shadow rounded-md flex items-center justify-between"
        >
          <div className="flex items-center">
            <img
              src={item.src}
              alt={item.title}
              className="w-16 h-16 object-cover mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600">{`Price:₹${item.price}`}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-sm text-gray-600">{item.category}</p>
            </div>
          </div>
          {/* <button className="text-red-700 hover:text-red-700 bg-red-400 p-3 rounded-xl"
          onClick={() => removeItem(item.id)}
          >Remove</button> */}
        </div>
      ))}
    </div>

    {/* Total price */}
    <div className="mt-8">
      <p className="text-xl font-semibold">Total Price: ₹{totalPrice}</p>
    </div>

    {/* Checkout button */}
    <div className="mt-8">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Back to Home
      </button>
    </div>
  </div>
    </>
  )
}

export default Cart;