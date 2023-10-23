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
    SwipeableDrawer
} from "@mui/material";

import { Menu as MenuIcon } from '@mui/icons-material';

import { arrayMenu } from '../nav_menu/arrayMenu.jsx';
import { linkOption } from "../../../utils/router/paths.js";
import { Link } from "react-router-dom";

export const NavMenuSidebar = () => {

    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const drawer = (
        <Box
            sx={{ width: 250 }}
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}
        >
            <List>
                {arrayMenu.map((option, index) => (
                    <ListItem key={option.name} >
                        <Link to={ `${linkOption[`${option.name}`]()}` } >
                            <ListItemButton>
                                <ListItemIcon>
                                    {option.icon}
                                </ListItemIcon>
                                <ListItemText primary={option.name} />
                            </ListItemButton>
                        </Link>
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