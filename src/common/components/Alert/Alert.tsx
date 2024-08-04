import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {selectAlertError, setAlertError} from "../../../app/appSlice";

const style = {
    width: '50%',
    position: 'absolute',
    left: '25%',
    right: '25%',
    top: '50%',

}

export const AlertComponent = () => {
    const dispatch = useAppDispatch()
    const error = useAppSelector(selectAlertError)
    const handleRemoveAlertError = () => {
        dispatch(setAlertError(''))
    }
    return (
        <Stack sx={style} spacing={2} >
            <Alert sx={{fontFamily: "Roboto, sans-serif", fontWeight: '300', fontSize: '16px'}} variant="filled" color={'warning'} severity="warning" onClose={handleRemoveAlertError}>
                {error}
                {/*<CloseIcon />*/}
            </Alert>

        </Stack>
    );
}
