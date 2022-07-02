import React, {Component} from "react";
import { Card, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { Colors } from "../styles/theme";
import { Box } from "@mui/material";
import { Grid  } from "@mui/material";
import ashok from "../assets/index.png";
import bosch from "../assets/bosch.png";
import tvs from "../assets/tvs.png"
import toyo from "../assets/toyota.png"

const TexHead = styled(Typography)({
    color: Colors.silver,
    fontFamily: '"Montserrat", "sans-serif" ',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "1.5em",
    padding: "1em 0.5em 1em"    
})

const TexBody = styled(Typography)({
    color: Colors.silver,
    fontFamily: '"Montserrat", "sans-serif" ',
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: "0.75em",
    padding: "0.1em 0.25em 0.3em"    
})


const TexCard = styled(Paper)({
    height:  '35vh' ,
    width: '90%' ,
    flexGrow: 1,
    textAlign: "center",
    backgroundColor: Colors.primary,
    
    
})

const TexBox = styled(Box)({
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
    //padding: "0em 0em 0em",
    
})

const Logo = styled(Box)({
    height:  '2.5em' ,
    width: '2.5em' ,
          /*
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          */
          paddingTop: '0.5em',
          paddingBottom: '0.5em',
          
   

})

const Logo1 = styled(Box)({
    height:  '2.5em' ,
    width: '3.5em' ,
          /*
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          */
          paddingTop: '1em',
          paddingBottom: '0.5em',
          
   

})


const OurClientsM = () => {
    return (
        <TexBox>
        
        <TexCard square={true}>
        <TexHead>Our Clients</TexHead>
        <Grid container spacing={3} >
            <Grid item xs >
                <Logo component="img" src={ashok}/>
                <TexBody>Ashok Leyland</TexBody>
            </Grid>
         <Grid item xs>
                <Logo component="img" src={bosch}/>
                <TexBody>Bosch</TexBody>
        </Grid>

        </Grid>

        <Grid container spacing={3} >
        <Grid item xs>
            <Logo1 component="img" src={tvs}/>
            <TexBody>Tvs</TexBody>
        </Grid>
        <Grid item xs>
                <Logo1 component="img" src={toyo}/>
                <TexBody>Toyota</TexBody>
        </Grid>
        </Grid>
        <Grid>
            <TexBody>and many more....</TexBody>
        </Grid>
        </ TexCard>
        
        </TexBox>
    )
}

export default OurClientsM