import React, {ChangeEvent, useState} from 'react';
import s from './Header.module.css'
import {Box, Button, TextField} from "@mui/material";
import logo from './../../../common/images/weather_logo.png'
import {useAppDispatch, useAppSelector} from "../../../common/hooks/hooks";
import {selectError, selectTheme, setError, setTheme} from "../../../app/appSlice";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {fetchCityThunk, fetchWeatherThunk} from "../Weather/weatherSlice";

export const Header = () => {
    const dispatch = useAppDispatch()
    const [city, setCity] = useState<string>('')
    const theme = useAppSelector(selectTheme)
    const errorTitle = useAppSelector(selectError)
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
        <div className={s.wrapper} color={'primary'}>
            <div className={s.container}>
                <div className={s.logoBlock}>
                    <img src={logo} alt="logo"/>
                    <div className={s.logo}>Weather</div>
                </div>
                {theme === 'light'
                    ? <DarkModeIcon color={'primary'} onClick={handleChangeTheme} className={s.themeButton}/>
                    : <LightModeIcon color={'primary'} onClick={handleChangeTheme} className={s.themeButton}/>}
                <TextField label={errorTitle} error={errorTitle !== ''} value={city} size={'small'} id="outlined-basic" variant="outlined" placeholder={'Type region'}
                           className={s.textField} onKeyPress={handleFetchCity} onChange={handleChangeSearchTitle}/>
                <div>
                    <Button variant="text" color={'secondary'} onClick={handleFetchWeatherOneDay}>1 Day</Button>
                    <Button variant="text">5 Days</Button>
                    <Button variant="text">10 Days</Button>
                </div>

            </div>
        </div>
    );
};
