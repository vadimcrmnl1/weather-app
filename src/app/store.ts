import {configureStore} from "@reduxjs/toolkit";
import {appReducer} from "./appSlice";
import {weatherReducer} from "../features/components/Weather/weatherSlice";

export const store = configureStore({
    reducer: {
        app: appReducer,
        weather: weatherReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch