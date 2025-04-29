import { createSlice } from "@reduxjs/toolkit";

const getWishlistFromLocalStorage = () => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
};

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlist: getWishlistFromLocalStorage(),
        wishlistCount: getWishlistFromLocalStorage().reduce((count, item) => count + item.quantity, 0),
    },
    reducers: {
        addToWishlist: (state, action) => {
            const product = action.payload;

            const existingProduct = state.wishlist.find((item) => item.id === product.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.wishlist.push({ ...product, quantity: 1 });
            }

            state.wishlistCount = state.wishlist.reduce((count, item) => count + item.quantity, 0);

            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);

            state.wishlistCount = state.wishlist.reduce((count, item) => count + item.quantity, 0);

            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
