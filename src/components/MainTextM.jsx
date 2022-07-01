import React, {Component} from "react";
import { Card, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { Colors } from "../styles/theme";
import { Box } from "@mui/material";


const Tex = styled(Typography)({
    color: Colors.black,
    fontFamily: '"Montserrat", "sans-serif" ',
    fontStyle: "italic",
    fontWeight: "300",
    
    
    
})

const TexBox = styled(Paper)({
    height:  '2.5em' ,
    width: '90%' ,
    flexGrow: 1,
    textAlign: "center",
    
   
          
          

})


const MaintextM = () => {
    return (
        <TexBox>
        <Tex>"South India's Largest Filtration Vendor"</Tex>
        </TexBox>
    )
}

export default MaintextM