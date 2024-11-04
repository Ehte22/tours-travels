import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/auth.apis";
import authSlices from "./slices/auth.slices";
import { tourApi } from "./apis/tour.apis";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [tourApi.reducerPath]: tourApi.reducer,
        authSlices
    },
    middleware: def => [...def(), authApi.middleware, tourApi.middleware]
})

export default reduxStore