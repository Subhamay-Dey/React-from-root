import React, { useState } from 'react'
import Props from './Props';
import { useCart } from '../contexts/product';

const Cart = () => {
  const cartItem = useCart();
  return (
    <>
      <div >
        {items.map(...items, product)}
      </div>
    </>
  )
}

export default Cart