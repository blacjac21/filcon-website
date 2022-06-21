import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material";
import { Colors } from "../styles/theme";

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const NavTypo = styled(Typography)({
    color: Colors.white,
    fontFamily: '"Montserrat", "sans-serif" '

})



const Navbar = () => {
    return (
        <AppBar position="static">
            <StyledToolbar>
              <NavTypo>Filcon Sales & Service</NavTypo>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar