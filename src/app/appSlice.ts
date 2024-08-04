import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

export type AppStateType = {
    isLoading: boolean
    error: string
    alertError: string
    theme: ThemeType
}
export type ThemeType = 'dark' | 'light'
const initialState: AppStateType = {
    isLoading: false,
    error: '',
    alertError: '',
    theme: 'light'
}
export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setTheme: (state, action: PayloadAction<ThemeType>) => {
            state.theme = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setAlertError: (state, action: PayloadAction<string>) => {
            state.alertError = action.payload
        }
    }
})
export const {setIsLoading, setTheme, setError, setAlertError} = appSlice.actions
export const selectIsLoading = (state: RootState) => state.app.isLoading
export const selectTheme = (state: RootState) => state.app.theme
export const selectError = (state: RootState) => state.app.error
export const selectAlertError = (state: RootState) => state.app.alertError

export const appReducer = appSlice.reducer