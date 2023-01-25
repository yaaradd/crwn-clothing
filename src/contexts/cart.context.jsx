import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    
    if(existingItem){
        return cartItems.map((cartItem) => 
        cartItem.id === productToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem
        );
    }

    return [...cartItems, {...productToAdd, quantity: 1}];

};


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    totalProducts: 0,
    setTotalProducts: () => {}
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
        setTotalProducts(totalProducts + 1);
    };

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, totalProducts};


    return <CartContext.Provider value = {value}>{children}</CartContext.Provider>;
    
};