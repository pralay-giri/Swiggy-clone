import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";

//creating the store
const appStore = configureStore({
    reducer: {
        cart: cartSlice,
        user: userSlice,
    },
});

export default appStore;
