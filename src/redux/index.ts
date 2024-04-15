import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./MovieReducer";
export const store = configureStore({
    reducer: {
        cart: MovieReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
