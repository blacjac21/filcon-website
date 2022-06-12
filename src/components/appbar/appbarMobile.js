import { MenuOutlined, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { AppbarContainer , AppbarHeader } from "../../styles/appbar";

export default function AppbarMobile({ matches }) {

    return (

        <AppbarContainer>
            <IconButton>
                <MenuOutlined />
            </IconButton>
           
            <AppbarHeader textAlign={"center"}> Filcon Sales And Service </AppbarHeader>
            
            <IconButton>
                <Search></Search>
            </IconButton>
        </AppbarContainer>


    );
}