import { MailOutlined, Search } from "@mui/icons-material";
import { Divider, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";

export default function AppbarDesktop({ matches }) {

    return (

        <AppbarContainer>
            <AppbarHeader> Filcon </AppbarHeader>
            <MyList type='row'>
                <ListItemText primary="Home" />
                <ListItemText primary="Products" />
                <ListItemText primary="About Us" />
                <ListItemText primary="Contact Us" />
                <ListItemButton 
                       sx={{
                            justifyContent: "center",

                       }}
                
                >
                    <ListItemIcon
                           sx={{
                            display: 'flex',
                            justifyContent: "center",

                       }}
                    >
                        <Search />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton
                       sx={{
                        justifyContent: "center",

                   }}
                >
                    <ListItemIcon
                    
                    sx={{
                        display: 'flex',
                        justifyContent: "center",

                   }}
                   
                   >
                        <MailOutlined />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
        </AppbarContainer>


    );
}