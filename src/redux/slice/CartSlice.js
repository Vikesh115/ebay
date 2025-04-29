import { createSlice } from "@reduxjs/toolkit";

const getCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: getCartFromLocalStorage(),
        cartCount: getCartFromLocalStorage().reduce((count, item) => count + item.quantity, 0),
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            state.cartCount = state.cart.reduce((count, item) => count + item.quantity, 0);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
            state.cartCount = state.cart.reduce((count, item) => count + item.quantity, 0);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((i) => i.id === action.payload);
            if (item) {
                item.quantity += 1;
                state.cartCount += 1;
                localStorage.setItem("cart", JSON.stringify(state.cart));
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((i) => i.id === action.payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    state.cartCount -= 1;
                } else {
                    state.cart = state.cart.filter((i) => i.id !== action.payload);
                    state.cartCount -= 1;
                }
                localStorage.setItem("cart", JSON.stringify(state.cart));
            }
        },
    },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
