import React, {ChangeEvent, FC} from 'react';
import s from './Header.module.css'
import {Button, TextField} from "@mui/material";
import logo from '../../../../common/images/weather_logo.png'
import {ThemeType} from "../../../../app/appSlice";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {CityStateChild, WeatherStateType} from "../../Weather/types";

type HeaderPropsType = {
    weather: WeatherStateType
    cityState: CityStateChild
    city: string
    theme: ThemeType
    errorTitle: string
    changeTheme: () => void
    fetchWeather: () => void
    changeSearchTitle: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    fetchCity: (e: React.KeyboardEvent<HTMLDivElement>) => void
    changeRoute: (path: string) => void
}
export const Header: FC<HeaderPropsType> = ({
                                                city,
                                                fetchCity,
                                                fetchWeather,
                                                changeSearchTitle,
                                                errorTitle,
                                                changeTheme,
                                                theme, cityState, weather, changeRoute
                                            }) => {

    return (
        <div className={s.wrapper} color={'primary'}>
            <div className={s.container}>
                <div className={s.logoBlock}>
                    <img src={logo} alt="logo"/>
                    <div className={s.logo}>Weather</div>
                </div>
                {Object.keys(cityState).length !== 0 && <div className={s.regionBlock}>
                    {Object.keys(cityState).length !== 0 ? <div>{cityState.Country.ID},</div> : ''}
                    {Object.keys(cityState).length !== 0 ? <div>{cityState.AdministrativeArea.EnglishName},</div> : ''}
                    {Object.keys(cityState).length !== 0 ? <div>{cityState.LocalizedName},</div> : ''}
                    {Object.keys(weather).length !== 0 && Object.keys(cityState).length !== 0 ?
                        <div>{Math.round((weather.DailyForecasts[0].Temperature.Maximum.Value - 32) / 1.8)}°</div> : ''}
                </div>}
                <TextField sx={{width: '25%', color: '#ffffff' }} label={errorTitle} error={errorTitle !== ''} value={city} size={'small'} id="outlined-basic"
                           variant="outlined" placeholder={'Type region'}
                           className={s.textField} onKeyPress={fetchCity} onChange={changeSearchTitle}/>
                <div>
                    <Button disabled={Object.keys(cityState).length == 0} variant="text" color={'primary'} onClick={()=>changeRoute('1day')}>1 Day</Button>
                    <Button disabled={Object.keys(cityState).length == 0} variant="text" color={'primary'} onClick={()=>changeRoute('5day')}>5 Days</Button>
                    <Button disabled={Object.keys(cityState).length == 0} variant="text" color={'primary'} onClick={()=>changeRoute('10day')}>10 Days</Button>
                </div>
                {theme === 'light'
                    ? <DarkModeIcon color={'primary'} onClick={changeTheme} className={s.themeButton}/>
                    : <LightModeIcon color={'primary'} onClick={changeTheme} className={s.themeButton}/>}
            </div>
        </div>
    );
};
