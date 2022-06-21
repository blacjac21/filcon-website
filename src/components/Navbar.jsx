import { AppBar, createTheme, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import React, { Component } from "react";
import { styled } from "@mui/material";
import { Colors } from "../styles/theme";
import { Box } from "@mui/material";
import logo from "../assets/logo.png"
import { MenuRounded  } from "@mui/icons-material";
import { fontSize } from "@mui/system";



const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const NavTypo = styled(Typography)({
    color: Colors.white,
    fontFamily: '"Montserrat", "sans-serif" ',
    
})

const Logo = styled(Box)({
    height:  '2.5em' ,
    width: '2.5em' ,
          /*
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          */
          paddingTop: '0.5em',
          paddingBottom: '0.5em'
          

})

const Ham = styled(MenuRounded)({
    color : Colors.white,
    color : Colors.secondary ,
    fontSize : "2em"
})


const Navbar = () => {
    return (
        <AppBar position="static">
            <StyledToolbar>
                <Logo component="img" src={logo} />
             
              <NavTypo >Filcon Sales & Service</NavTypo>

                <Ham/>
                   
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar














/*
<Box
        component="img"
        sx={{
          height:  '2.5em' ,
          width: '2.5em' ,
          
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          

          paddingTop: '0.5em',
          paddingBottom: '0.5em'
        }}
        src={logo}
      /> 
      */

