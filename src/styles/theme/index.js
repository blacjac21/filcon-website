
import { createTheme } from "@mui/material/styles";

export const Colors = {
    primary: "#202020",
    secondary: "#008080",
    success: "#4CAF50",
    info: "#00a2ff",
    danger: "#FF5722",
    warning: "#FFC107",
    dark: "#0e1b20",
    light: "#aaa",
    muted: "#abafb3",
    border: "#DDDFE1",
    inverse: "#2F3D4A",
    shaft: "#333",
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    ///////////////
    // Solid Color
    ///////////////
    white: "#fff",
    black: "#000",
    silver: "#f2f3f4"
  };

  const mytheme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        }
    }
   
  }) ;
  
  export default mytheme;
