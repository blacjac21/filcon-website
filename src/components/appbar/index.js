import { useMediaQuery, useTheme } from "@mui/material";


export default function Appbar(){

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {matches ? <h1> Mobile </h1> : <h1>desktop</h1>}
            
        </>
    );

}