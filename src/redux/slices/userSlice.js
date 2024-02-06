import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        userData: null,
        signInBtnToogle: false,
    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        removeUser: (state) => {
            state.userData = null;
        },
        toogleSignContainer: (state) => {
            state.signInBtnToogle = !state.signInBtnToogle;
        },
    },
});

export const { setUserData, removeUser, toogleSignContainer } =
    userSlice.actions;
export default userSlice.reducer;
