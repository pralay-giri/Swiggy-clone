import { createSlice } from "@reduxjs/toolkit";

// creating a slice
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        // [{card, count: total number of card}]
    },
    reducers: {
        addItem: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeItem: (state, action) => {
            const filtered = state.cartItems.filter(
                (item) => action.payload !== item.card.card.info.id
            );
            state.cartItems = filtered;
        },
        clearCart: (state, action) => {
            state.cartItems.length = 0;
        },
        incressNumberOfItem: (state, action) => {
            state.cartItems.map((item) => {
                if (item.card.card.info.id === action.payload) {
                    item.count += 1;
                    return;
                }
            });
        },
        decressNumberOfItem: (state, action) => {
            state.cartItems.map((item) => {
                if (item.card.card.info.id === action.payload) {
                    item.count -= 1;
                    return;
                }
            });
        },
    },
});

export const {
    addItem,
    removeItem,
    clearCart,
    incressNumberOfItem,
    decressNumberOfItem,
} = cartSlice.actions;

export default cartSlice.reducer;
