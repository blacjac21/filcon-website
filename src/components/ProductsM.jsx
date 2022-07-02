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
    fontSize: "1.4em",
    padding: "1.25em 0.5em 0.5em"    
})

const TexBody = styled(Typography)({
    color: Colors.secondary,
    fontFamily: '"Montserrat", "sans-serif" ',
    fontWeight: "600",
    fontSize: "0.8em",
    padding: "0.5em 1em 0.3em"    
})


const TexCard = styled(Paper)({
    height:  '27vh' ,
    width: '90%' ,
    flexGrow: 1,
    textAlign: "center",
    backgroundColor: Colors.silver,
    //boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    
})

const TexBox = styled(Box)({
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
    padding: "0em 0em 0em",
    
})


const ProductsM = () => {
    return (
        <TexBox>
        
        <TexCard>
        <TexHead>Products</TexHead>
        
        </ TexCard>
        
        </TexBox>
    )
}

export default ProductsM