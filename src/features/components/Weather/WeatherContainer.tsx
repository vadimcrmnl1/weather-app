import React from 'react';
import {TodayWeather} from "./components/TodayWeather";
import {CurrentWeather} from "./components/CurrentWeather";
import {useAppSelector} from "../../../common/hooks/hooks";
import {selectWeather} from "./weatherSlice";
import s from './components/TodayWeather.module.css'

export const WeatherContainer = () => {
    const weather = useAppSelector(selectWeather)

    return (
        <div className={s.containerWrapper}>
            <TodayWeather weather={weather}/>
            <CurrentWeather weather={weather}/>
        </div>
    );
};

