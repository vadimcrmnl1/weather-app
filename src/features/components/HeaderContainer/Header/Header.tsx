import React, {ChangeEvent, FC} from 'react';
import s from './Header.module.css'
import {TextField} from "@mui/material";
import logo from '../../../../common/images/weather_logo.png'
import {ThemeType} from "../../../../app/appSlice";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {CityStateChild, WeatherFullState} from "../../Weather/types";
import {NavLink} from "react-router-dom";
import {NavLinkComponent} from "../../../../common/components/Navlink/Navlink";

type HeaderPropsType = {
    weather: WeatherFullState
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
                    <NavLink to={'/'}><img src={logo} alt="logo"/></NavLink>
                    <div className={s.logo}>Weather</div>
                </div>
                {Object.keys(cityState).length !== 0 && <div className={s.regionBlock}>
                    {Object.keys(cityState).length !== 0 ? <div>{cityState.Country.ID},</div> : ''}
                    {Object.keys(cityState).length !== 0 ? <div>{cityState.AdministrativeArea.EnglishName},</div> : ''}
                    {Object.keys(cityState).length !== 0 ? <div>{cityState.LocalizedName},</div> : ''}
                    {Object.keys(weather).length !== 0 && Object.keys(cityState).length !== 0 ?
                        <div>{Math.round((weather.DailyForecasts[0].Temperature.Maximum.Value - 32) / 1.8)}°</div> : ''}
                </div>}
                <TextField sx={{width: '25%'}} label={errorTitle} error={errorTitle !== ''} value={city} size={'small'} id="outlined-basic"
                           variant="outlined" placeholder={'Type region'}
                           className={s.textField} onKeyPress={fetchCity} onChange={changeSearchTitle}/>
                <div className={s.navlinkBlock}>
                    <NavLinkComponent path={'/weather/1day'} title={'1 day'}/>
                    <NavLinkComponent path={'/weather/5day'} title={'5 days'}/>
                    <NavLinkComponent path={'/weather/10day'} title={'10 days'}/>
                    {/*<Button disabled={Object.keys(cityState).length == 0} variant="text" color={'primary'} onClick={()=>changeRoute('1day')}>1 Day</Button>*/}
                    {/*<Button disabled={Object.keys(cityState).length == 0} variant="text" color={'primary'} onClick={()=>changeRoute('5day')}>5 Days</Button>*/}
                    {/*<Button disabled={Object.keys(cityState).length == 0} variant="text" color={'primary'} onClick={()=>changeRoute('10day')}>10 Days</Button>*/}
                </div>
                {theme === 'light'
                    ? <DarkModeIcon color={'primary'} onClick={changeTheme} className={s.themeButton}/>
                    : <LightModeIcon color={'primary'} onClick={changeTheme} className={s.themeButton}/>}
            </div>
        </div>
    );
};
