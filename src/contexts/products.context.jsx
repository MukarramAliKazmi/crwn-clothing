import { createContext, useState } from "react";

import PRODUCTS from '../shop-data.json';

// as the actural value you wnat to access
export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products, setCurrentProducts] = useState(PRODUCTS);
    const value = { products };

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};