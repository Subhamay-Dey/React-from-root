import React, {createContext, useContext} from "react";
import { useState } from "react";

export const useCart = () => {
    const cart = useContext(productContext);
    return cart;
};
export const productContext= createContext();

export const productProvider = (children)=> {
    <productContext.Provider value={useProduct()}>
        {children}
    </productContext.Provider>
};