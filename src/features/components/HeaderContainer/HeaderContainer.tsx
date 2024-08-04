import React, {ChangeEvent, useState} from 'react';
import {Header} from "./Header/Header";
import {useAppDispatch, useAppSelector} from "../../../common/hooks/hooks";
import {selectError, selectTheme, setError, setTheme} from "../../../app/appSlice";
import {fetchCityThunk, fetchWeatherThunk, selectCity, selectWeather} from "../Weather/weatherSlice";
import {useNavigate} from "react-router-dom";

export const HeaderContainer = () => {
    const dispatch = useAppDispatch()
    const [city, setCity] = useState<string>('')
    const theme = useAppSelector(selectTheme)
    const cityState = useAppSelector(selectCity)
    const weather = useAppSelector(selectWeather)
    const errorTitle = useAppSelector(selectError)
    const navigate = useNavigate()
    const handleChangeRoute = (path: string) => {
        navigate(`/weather/${path}`)
    }
    const handleChangeTheme = () => {
        if (theme === 'light') {
            dispatch(setTheme('dark'))
        } else dispatch(setTheme('light'))
    }
    const handleFetchWeatherOneDay = () => {
        dispatch(fetchWeatherThunk(29677))
    }

    const handleChangeSearchTitle = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCity(e.target.value)
        dispatch(setError(''))
    }
    const handleFetchCity = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            dispatch(fetchCityThunk(city))
        }
    }
    return (
        <div>
            <Header weather={weather} cityState={cityState} theme={theme} city={city} errorTitle={errorTitle}
                    changeSearchTitle={handleChangeSearchTitle} changeTheme={handleChangeTheme}
                    fetchCity={handleFetchCity} fetchWeather={handleFetchWeatherOneDay}
                    changeRoute={handleChangeRoute}/>
        </div>
    );
};

