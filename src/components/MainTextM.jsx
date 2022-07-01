import React, {Component} from "react";
import { Card, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { Colors } from "../styles/theme";
import { Box } from "@mui/material";


const TexHead = styled(Typography)({
    color: Colors.secondary,
    fontFamily: '"Montserrat", "sans-serif" ',
    fontStyle: "italic",
    fontWeight: "600",
    fontSize: "1.2em",
    padding: "0.5em 0.5em 0.1em"    
})

const TexBody = styled(Typography)({
    color: Colors.secondary,
    fontFamily: '"Montserrat", "sans-serif" ',
    fontWeight: "600",
    fontSize: "0.75em",
    padding: "0.1em 0.25em 0.3em"    
})


const TexCard = styled(Paper)({
    height:  '17vh' ,
    width: '90%' ,
    flexGrow: 1,
    textAlign: "center",
    backgroundColor: Colors.silver,
    
})

const TexBox = styled(Box)({
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
    padding: "0.5em 0.75em 0em"

})


const MaintextM = () => {
    return (
        <TexBox>
        
        <TexCard>
        <TexHead>"India's Largest Filtration Provider"</TexHead>
        <TexBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</TexBody>
        </ TexCard>
        
        </TexBox>
    )
}

export default MaintextM