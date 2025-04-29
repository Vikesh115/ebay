import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../slice/ProductSlice';
import cartReducer from '../slice/CartSlice';
import wishlistReducer from '../slice/WishlistSlice';
import authReducer from '../slice/AuthSlice';

export const store = configureStore({
    reducer:{
        product: productReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
        auth: authReducer,
    }
})

console.log(store.getState());