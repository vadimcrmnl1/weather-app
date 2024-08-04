import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {useAppSelector} from "../../hooks/hooks";
import {selectIsLoading} from "../../../app/appSlice";

export const BackDropLoading = () => {
    const isLoading = useAppSelector(selectIsLoading)

    return (
        <div>
            <Backdrop
                sx={{ color: '#f1b960', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
