import { createSlice } from "@reduxjs/toolkit";

// creating a slice
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeItem: (state, action) => {
            console.log(action);
            const filtered = state.cartItems.filter(
                (item) => action.payload !== item.card.info.id
            );
            console.log(filtered);
            state.cartItems = filtered;
        },
        clearCart: (state, action) => {
            state.cartItems.length = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
