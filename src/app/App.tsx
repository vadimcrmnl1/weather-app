import React from 'react';
import s from './App.module.css';
import {Footer} from "../common/components/Footer/Footer";
import {createTheme, ThemeProvider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import {useAppSelector} from "../common/hooks/hooks";
import {selectAlertError, selectTheme} from "./appSlice";
import {HeaderContainer} from "../features/components/HeaderContainer/HeaderContainer";
import {BackDropLoading} from "../common/components/Backdrop/Backdrop";
import {Route, Routes} from "react-router-dom";
import {selectCity} from "../features/components/Weather/weatherSlice";
import {WeatherTable} from "../features/components/Weather/WeatherTable/WeatherTable";
import {AlertComponent} from "../common/components/Alert/Alert";
import {WeatherContainer} from "../features/components/Weather/WeatherContainer";

const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});


function App() {
    const themeMode = useAppSelector(selectTheme)
    const city = useAppSelector(selectCity)
    console.log('city:', city)
    const error = useAppSelector(selectAlertError)
    const theme = createTheme({
        palette: {
            mode: themeMode,
            primary: {
                main: '#f1b960'
            },
            secondary: {
                main: '#8330e8'
            },
            text: {
                primary: '#000000',
                secondary: '#ffffff'
            },
            background: {
                paper: '#c7e8ff'
            },
        },
    });
    // if (Object.keys(city).length !== 0) {
    // return <Navigate to={`/weather/1day`} replace={true} />
    // // redirect(`/weather/1day`)
    // }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BackDropLoading/>
            {error && <AlertComponent/>}
            <div className={s.wrapper}>
                <HeaderContainer/>
                <Routes>
                    <Route path={`/weather/1day`} element={<WeatherContainer/>}/>
                    <Route path={`/weather/5day`} element={<WeatherTable/>}/>
                    <Route path={`/weather/10day`} element={<WeatherTable/>}/>
                </Routes>
                <Footer/>
            </div>
        </ThemeProvider>


    );
}

export default App;
