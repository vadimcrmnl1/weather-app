import React, {FC} from 'react';
import {WeatherFullState} from "../types";
import s from './TodayWeather.module.css'

type CurrentWeatherPropsType = {
    weather: WeatherFullState
}
export const CurrentWeather: FC<CurrentWeatherPropsType> = ({weather}) => {
    const date = new Date()
    return (
        <div className={s.wrapper}>
            <div className={s.headerWrapper}>
                <div className={s.headerBlock}>
                    <div className={s.title}>current weather</div>
                    <div className={s.date}>{date.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}</div>
                </div>
            </div>
            <div className={s.currentBodyWrapper}>
                <div className={s.valueBlock}></div>
                <div className={s.descBlock}>
                    <div className={s.description}>
                        <div className={s.name}>RealFeel Shade</div>
                        <div className={s.value}>{Math.round((weather.DailyForecasts[0].RealFeelTemperatureShade.Maximum.Value - 32) / 1.8)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

