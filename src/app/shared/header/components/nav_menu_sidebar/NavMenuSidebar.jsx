import { useState } from "react";
import {
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer,
    Toolbar
} from "@mui/material";

import { MoveToInbox, Mail as MailIcon, Menu as MenuIcon } from '@mui/icons-material';

import { arrayMenu } from '../nav_menu/arrayMenu.jsx';

export const NavMenuSidebar = () => {

    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const drawer = (
        <Box
            sx={{ width: 250 }}
            // role="presentation"
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}
        >
            <List>
                {arrayMenu.map((option, index) => (
                    <ListItem key={option.name} >
                        <ListItemButton>
                            <ListItemIcon>
                                {option.icon}
                            </ListItemIcon>
                            <ListItemText primary={option.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <Box>
            <IconButton
                onClick={handleDrawerToggle}
                edge={false}
            >
                <MenuIcon
                    sx={{ color: 'white' }}
                />
            </IconButton>

            <SwipeableDrawer
                anchor='left'
                open={open}
                onClose={handleDrawerToggle}
                onOpen={handleDrawerToggle}
            >
                    {drawer}
            </SwipeableDrawer>
        </Box>
    );
}