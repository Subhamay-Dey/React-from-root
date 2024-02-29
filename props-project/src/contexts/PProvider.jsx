import React, {useState} from 'react';
import UseProduct from './UseProduct';

const PProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        setCart(prevCart => {
            const updatedCart = [...prevCart, item]
            console.log("carr:" , updatedCart);
            return updatedCart;
        })
    }

  return (
    <UseProduct.Provider value={{cart, handleClick}}>
        {children}
    </UseProduct.Provider>
  )
}

export default PProvider