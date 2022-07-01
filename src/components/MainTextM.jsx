import React, {Component} from "react";
import { Card, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { Colors } from "../styles/theme";
import { Box } from "@mui/material";


const Tex = styled(Typography)({
    color: Colors.white,
    fontFamily: '"Montserrat", "sans-serif" ',
    fontStyle: "italic",
    fontWeight: "600",
    
    padding: "0.75em 0.5em 0.5em"
    
    
})

const TexCard = styled(Paper)({
    height:  '10vh' ,
    width: '90%' ,
    flexGrow: 1,
    textAlign: "center",
    backgroundColor: Colors.secondary
})

const TexBox = styled(Box)({
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
    padding: "0.5em 0.75em 0em "

})


const MaintextM = () => {
    return (
        <TexBox>
        
        <TexCard>
        <Tex>"South India's Largest Filtration Vendor"</Tex>
        </ TexCard>
        
        </TexBox>
    )
}

export default MaintextM