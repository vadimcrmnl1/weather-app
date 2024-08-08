import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CityStateChild, WeatherFullState} from "./types";
import {RootState} from "../../../app/store";
import {getLocations, getWeather} from "../../../api/api";
import {setAlertError, setError, setIsLoading} from "../../../app/appSlice";

const initialState = {
    weather: {} as WeatherFullState,
    city: {} as CityStateChild
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        fetchWeather: (state, action: PayloadAction<WeatherFullState>) => {
            state.weather = action.payload
        },
        fetchCity: (state, action: PayloadAction<CityStateChild>) => {
            state.city = action.payload
        }
    }
})
export const {fetchWeather, fetchCity} = weatherSlice.actions
export const selectWeather = (state: RootState) => state.weather.weather
export const selectCity = (state: RootState) => state.weather.city
export const weatherReducer = weatherSlice.reducer

export const fetchWeatherThunk = createAsyncThunk(
    'weather/fetchWeather', async (region: number, thunkAPI) => {
        const {dispatch} = thunkAPI
        dispatch(setIsLoading(true))
        try {
            const response = await getWeather.oneDay(region)
            dispatch(fetchWeather(response.data))
        } catch (e) {
            console.error(e)
        } finally {
            dispatch(setIsLoading(false))

        }

    }
)
export const fetchCityThunk = createAsyncThunk(
    'weather/fetchCity', async (city: string, thunkAPI) => {
        const {dispatch} = thunkAPI
        dispatch(setIsLoading(true))
        try {
            const response = await getLocations.searchCity(city)
            if (response && response.data.length !== 0) {
                dispatch(fetchCity(response.data[0]))
                dispatch(fetchWeatherThunk(response.data[0].Key))
            } else {
                dispatch(setError('Check your entry is correct'))
                dispatch(fetchCity({} as CityStateChild))
            }
        } catch (e: any) {
            dispatch(setAlertError(e.response.statusText))
        } finally {
            dispatch(setIsLoading(false))
        }

    }
)