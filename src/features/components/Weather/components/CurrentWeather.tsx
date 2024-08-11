import React, {FC} from 'react';
import {WeatherFullState} from "../types";
import s from './TodayWeather.module.css'
import * as images from './../../../../common/images/weather_icons/index'
import {weatherIcons} from "./../../../../common/images/weather_icons/index";

type CurrentWeatherPropsType = {
    weather: WeatherFullState
}
export const CurrentWeather: FC<CurrentWeatherPropsType> = ({weather}) => {
    const date = new Date()
    const weatherLogo = weatherIcons.filter(el => el.id === weather.DailyForecasts[0].Day.Icon)

    return (
        <div className={s.wrapper}>
            <div className={s.headerWrapper}>
                <div className={s.headerBlock}>
                    <div className={s.title}>current weather</div>
                    <div className={s.date}>{date.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}</div>
                </div>
            </div>
            <div className={s.currentBodyWrapper}>
                <div className={s.valueBlock}>
                    <div className={s.valueLogo}>
                        <img src={weatherLogo[0].value} alt={'weather icon'}/>
                    </div>
                    <div className={s.valueDesc}>
                        <div className={s.valueDescTemp}>
                            <div className={s.temp}>{Math.round((weather.DailyForecasts[0].RealFeelTemperatureShade.Maximum.Value - 32) / 1.8)}°</div>
                            <div className={s.type}>C</div>
                        </div>
                        <div className={s.realFeel}>
                           RealFeel {Math.round((weather.DailyForecasts[0].RealFeelTemperature.Maximum.Value - 32) / 1.8)}°
                        </div>
                    </div>
                </div>
                <div className={s.descBlock}>
                    <div className={s.description}>
                        <div className={s.name}>RealFeel Shade</div>
                        <div
                            className={s.value}>{Math.round((weather.DailyForecasts[0].RealFeelTemperature.Maximum.Value - 32) / 1.8)}°
                        </div>
                    </div>
                    <div className={s.description}>
                        <div className={s.name}>Wind</div>
                        <div
                            className={s.value}>{weather.DailyForecasts[0].Day.Wind.Direction.English} {Math.round((weather.DailyForecasts[0].Day.Wind.Speed.Value * 1.609))} km/h
                        </div>
                    </div>
                    <div className={s.description}>
                        <div className={s.name}>Wind Gusts</div>
                        <div
                            className={s.value}>{Math.round((weather.DailyForecasts[0].Day.WindGust.Speed.Value * 1.609))} km/h
                        </div>
                    </div>
                    <div className={s.descriptionBottom}>
                        <div className={s.name}>Hours Of Sun</div>
                        <div
                            className={s.value}>{weather.DailyForecasts[0].HoursOfSun}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

