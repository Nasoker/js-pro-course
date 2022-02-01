import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom";
import { IconButton,Button,Modal,Box,Typography,TextField } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { setCity } from '../../store/weather/actions'
import './Header.scss'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export function Header () {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const handleClose = () => {
        if(inputValue){
            localStorage.setItem('city',JSON.stringify(inputValue));
            dispatch(setCity(inputValue));
            setOpen(false);
            setInputValue('');
        }else{
            alert('WARNING! You have an EMPTY field ')
        }
    }
    const handleOpen = () => setOpen(true);

    const city = useSelector(state => state.weather.city)

    return(
        <div className="header">
            <NavLink to={"/"}><IconButton aria-label="home"><HomeIcon/></IconButton></NavLink>
            <Button onClick={handleOpen} startIcon={<LocationOnIcon />}>{city}</Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography>Please enter the city.</Typography>
                    <div className="flexed">
                        <TextField id="outlined-basic" label="City" variant="outlined" onInput={e => setInputValue(e.target.value)} value={inputValue}/>
                        <Button onClick={handleClose}>Submit</Button>
                    </div>
                </Box>
            </Modal>
            <IconButton aria-label="registration"><LockOpenIcon/></IconButton>
        </div>
    )
}