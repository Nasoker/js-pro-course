import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../loader/Loader";
import { Modal,Box,Typography,IconButton,Button,TextField } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LockOpenIcon from '@mui/icons-material/LockOpen';
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
    display: 'flex',
    justifyContent:'space-between',
  };

export function Header () {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    console.log(inputValue)

    return(
        <div className="header">
            <NavLink to={"/"}><IconButton aria-label="home"><HomeIcon/></IconButton></NavLink>
            <Button onClick={handleOpen} startIcon={<LocationOnIcon />}>{ <Loader/>  }</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <TextField id="outlined-basic" label="City" variant="outlined" onInput={e => setInputValue(e.target.value)} value={inputValue}/>
                    <Button onClick={()=>{
                        handleClose();
                        }
                        }>Submit</Button>
                </Box>
            </Modal>
            <IconButton aria-label="registration"><LockOpenIcon/></IconButton>
        </div>
    )
}