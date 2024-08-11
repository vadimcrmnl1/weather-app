import React from 'react';
import s from './App.module.css';
import {Footer} from "../common/components/Footer/Footer";
import {createTheme, PaletteMode, ThemeProvider} from "@mui/material";
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
import {amber, deepOrange, grey} from "@mui/material/colors";

const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});


function App() {
    const themeMode = useAppSelector(selectTheme)
    const city = useAppSelector(selectCity)
    console.log('city:', city)
    const error = useAppSelector(selectAlertError)
    // const theme = createTheme({
    //     palette: {
    //         mode: themeMode,
    //         primary: {
    //             main: '#f1b960'
    //         },
    //         secondary: {
    //             main: '#8330e8'
    //         },
    //         text: {
    //             primary: '#000000',
    //             secondary: '#ffffff'
    //         },
    //         background: {
    //             paper: '#c7e8ff'
    //         },
    //     },
    // });
    const getDesignTokens = createTheme({
        palette: {
            mode: themeMode,
            ...(themeMode === 'light'
                ? {
                    // palette values for light mode
                    primary: amber,
                    divider: amber[200],
                    background: {
                        default: grey[200],
                        paper: grey[50]
                    },
                    text: {
                        primary: grey[100],
                        secondary: grey[900],
                    },
                }
                : {
                    // palette values for dark mode
                    primary: deepOrange,
                    divider: deepOrange[700],
                    background: {
                        default: grey[900],
                        paper: grey[100],
                    },
                    text: {
                        primary: grey[900],
                        secondary: grey[100],
                    },
                }),
        },
    });
    // if (Object.keys(city).length !== 0) {
    // return <Navigate to={`/weather/1day`} replace={true} />
    // // redirect(`/weather/1day`)
    // }
    return (
        <ThemeProvider theme={getDesignTokens}>
            <CssBaseline/>
            <BackDropLoading/>
            {error && <AlertComponent/>}
            <div style={{background: 'primary'}} className={s.wrapper}>
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
