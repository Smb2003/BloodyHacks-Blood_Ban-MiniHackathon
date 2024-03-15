import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : false,
}

const userData = createSlice({
    name : "user_data",
    initialState,
    reducers: {
        set_auth_users : (state, actions) => {
            console.log(actions.payload);
            state.isLoggedIn = actions.payload;
        }
    }
})
export default userData.reducer;
export const {set_auth_users} = userData.actions;