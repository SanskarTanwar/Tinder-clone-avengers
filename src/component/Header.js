import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import "./Header.css";
import { IconButton } from "@mui/material";


function Header() {
  return (
    <div className="tinderHeader">
        
        <IconButton className="personIcon">
            <PersonIcon/> 
        </IconButton>
        
        <img className="tinderIcon"  src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg" alt="" />
        
        <IconButton className="chatIcon">
            <ForumIcon  />
        </IconButton>
    
    </div>
  );
}

export default Header;
