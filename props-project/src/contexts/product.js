import React, {createContext} from "react";
import { useState } from "react";

export const productContext= createContext();

export const productProvider = (children)=> {
    <productContext>
        {children}
    </productContext>
};

