import { useEffect } from "react";
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

const removeCartItem = (cartItems, productToRemove) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
    
    if(existingItem.quantity > 1){
        return cartItems.map((cartItem) => 
        cartItem.id === productToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity - 1} 
            : cartItem
        );
    };

    return [...cartItems].filter((cartItem) => cartItem.id !== productToRemove.id);

};

const clearCartItem = (cartItems, productToClear) => {
    
    return [...cartItems].filter((cartItem) => cartItem.id !== productToClear.id);

};


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    totalProducts: 0,
    setTotalProducts: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    totalPrice: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
        setTotalProducts(totalProducts + 1);
    };


    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
        setTotalProducts(totalProducts - 1);
    };

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear));
        setTotalProducts(totalProducts - 1);
    };

    useEffect(() => {
        const currentTotalPrice = cartItems.reduce(
            (total, cartItem) => total + (cartItem.price * cartItem.quantity), 0
        );
        setTotalPrice(currentTotalPrice)

    }, [cartItems]);



    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, totalProducts, removeItemFromCart, totalPrice, clearItemFromCart};


    return <CartContext.Provider value = {value}>{children}</CartContext.Provider>;
    
};