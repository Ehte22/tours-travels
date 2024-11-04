import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/auth.apis";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        user: JSON.parse(localStorage.getItem("user"))
    },
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.signIn.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })
        .addMatcher(authApi.endpoints.continueWithGoogle.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })
        .addMatcher(authApi.endpoints.signOut.matchFulfilled, (state) => {
            state.user = null
        })
})

export default authSlice.reducer