import { createContext, useState } from "react";

import productsInfo from '../shop-data.json';

export const  ProductsContext = createContext({
    products: [],
});

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState(productsInfo);
    const value = {products, setProducts};

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
};
