import { Modal,Box,Typography,Button,TextField } from "@mui/material";
import React, {useState} from "react";
import { useDispatch } from "react-redux"
import { setCity } from '../../store/weather/actions'
import './WelcomeModal.scss'

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

export function WelcomeModal () {
    const [inputValue, setInputValue] = useState('');
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch(); 
    
    const savedCity = JSON.parse(localStorage.getItem('city'))

    const handleClose = () => {
        if(inputValue){
            localStorage.setItem('city',JSON.stringify(inputValue));
            dispatch(setCity(inputValue));
            setOpen(false);
        }else{
            alert('WARNING! You have an EMPTY field ')
        }
    }

    return(
        <>
        {!savedCity &&
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography>Welcome to the weather application!</Typography>
                    <Typography>Please enter the city.</Typography>
                    <div className="flexed">
                        <TextField id="outlined-basic" label="City" variant="outlined" onInput={e => setInputValue(e.target.value)} value={inputValue}/>
                        <Button onClick={ handleClose}>Submit</Button>
                    </div>
                </Box>
        </Modal>
        }
        </>
    )
}               