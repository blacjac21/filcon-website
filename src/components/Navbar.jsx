import { AppBar, Toolbar } from "@mui/material";
import React from "react";

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})



const Navbar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
              NavBar
            </Toolbar>
        </AppBar>
    )
}

export default Navbar