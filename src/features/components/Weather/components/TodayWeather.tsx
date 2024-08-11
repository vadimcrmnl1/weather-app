import * as React from 'react';
import s from './TodayWeather.module.css'
import {useAppSelector} from "../../../../common/hooks/hooks";
import {selectWeather} from "../weatherSlice";
import {WeatherFullState} from "../types";
import {FC} from "react";
import {weatherIcons} from "../../../../common/images/weather_icons";

type TodayWeatherPropsType = {
    weather: WeatherFullState
}
export const TodayWeather: FC<TodayWeatherPropsType> = ({weather}) => {
    const date = new Date()
    return (
        <div className={s.wrapper}>
            <div className={s.headerWrapper}>
                <div className={s.headerBlock}>
                    <div className={s.title}>today's weather</div>
                    <div className={s.date}>{date.toDateString().slice(0, 10)}</div>
                </div>
            </div>
            <div className={s.bodyWrapper}>
                <div className={s.bodyBlock}>
                    <div className={s.temperatureBlock}>
                        <div className={s.weather}>{weather.DailyForecasts[0].Day.LongPhrase}</div>
                        <div
                            className={s.tempValue}>Hi: {Math.round((weather.DailyForecasts[0].RealFeelTemperature.Maximum.Value - 32) / 1.8)}°
                        </div>
                    </div>
                    <div className={s.temperatureBlock}>
                        <div className={s.weather}>Tonight: {weather.DailyForecasts[0].Night.ShortPhrase}</div>
                        <div
                            className={s.tempValue}>Lo: {Math.round((weather.DailyForecasts[0].Temperature.Minimum.Value - 32) / 1.8)}°
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
