import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

//creating the store
const appStore = configureStore({
    reducer: {
        cart: cartSlice,
    },
});

export default appStore;
