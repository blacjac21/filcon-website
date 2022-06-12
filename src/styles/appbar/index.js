import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box, fontWeight } from "@mui/system";
import { Colors } from "../theme";


export const AppbarContainer = styled(Box)(() => ({

    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px'


}));

//header

export const AppbarHeader = styled(Typography)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontSize: '4em',
    fontFamily: '"Montserrat", "sans-serif"',
    fontStyle: "normal",
    color: Colors.light,


}));