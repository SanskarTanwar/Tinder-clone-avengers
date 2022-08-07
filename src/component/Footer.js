import React from 'react'
import './Footer.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from "@mui/material/IconButton";

function Footer() {
  return (
    
    <div className='bottemButtons'>
      
        <IconButton className='replay' fontsize='larger'>
            <ReplayIcon />    
        </IconButton>
        
        <IconButton className='close'>
            <CloseIcon />
        </IconButton>
        
        <IconButton className='star'>
            <StarRateIcon />
        </IconButton>
        
        <IconButton className='favtorite'>
            <FavoriteIcon />
        </IconButton>
        
        <IconButton className='flash'>
            <FlashOnIcon />
        </IconButton>

    </div>
  )
}

export default Footer