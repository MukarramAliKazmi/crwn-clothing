import { createAction } from "../../utils/reducer/reducer.utils";

import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (bool) =>
    createAction( CART_ACTION_TYPES.SET_IS_CART_OPEN, bool );

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeCartItem = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
    }

    return cartItems.map(cartItem => 
        cartItem.id === itemToRemove.id && itemToRemove.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    );
};

const clearCartItem = (cartItems, itemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== itemToClear.id);
};

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const newCartItems = removeCartItem(cartItems, itemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, itemToClear) => {
    const newCartItems = clearCartItem(cartItems, itemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};