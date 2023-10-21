import { useState } from "react";
import { Icon } from "./Icon.jsx";
import { MenuUser } from "./MenuUser.jsx";

export const NavUser = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <>
        <Icon handleClick={ handleClick } />

        <MenuUser anchorEl={anchorEl} open={open} handleClose={handleClose} />

    </>
}