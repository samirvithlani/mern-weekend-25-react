import React from 'react'
import {Box, Button, Fab, IconButton, Typography} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
export const MuiDemo1 = () => {
  return (
    <Box sx={{height:"400px",width:"100%",backgroundColor:"white"}}>
        <Typography variant='h4' sx={{textAlign:"center"}}>MUI DEMO 1</Typography>
        <Button>DEMO 1</Button>
        <Button variant='contained'>DEMO 2</Button>
        <Button variant='outlined'>DEMO 2</Button>
        <Button variant='contained' size='small'>DEMO 2</Button>
        <Button variant='contained' size='medium'>DEMO 2</Button>
        <Button variant='contained' size='large'>DEMO 2</Button>
        <Button variant='contained' size='large' color='primary'>DEMO 2</Button>
        <Button variant='contained' size='large' color='error'>DEMO 2</Button>
        <Button variant='contained' sx={{color:"white",backgroundColor:"black"}}>DEMO 2</Button>
        <Button variant='contained' startIcon={<AccessTimeFilledIcon/>} sx={{color:"white",backgroundColor:"black"}}>DEMO 2</Button>
        <Button variant='contained' endIcon={<AccessTimeFilledIcon/>} sx={{color:"white",backgroundColor:"black"}}>DEMO 2</Button>
        <IconButton>
            <SendIcon/>
        </IconButton>
        <Fab>
            <FingerprintIcon sx={{color:"pink"}}/>
        </Fab>
    </Box>
  )
}
