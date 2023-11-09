import { Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { arrayMenuUser } from './arrayMenuUser.jsx';
import {linkOption} from "../../../utils/router/paths.js";
import {Link} from "react-router-dom";

import { useAuthContext } from '../../../utils/hooks/useAuthContext.js';

export const MenuUser = ({ anchorEl, open, handleClose, setOpenModal }) => {

    const {
        isAuthenticated,
        getTokenInLocalStorage,
        selectedUserOption,
        setSelectedUserOption,
        setSelectedGeneralOption
    } = useAuthContext();

    let userAuth = null;
    if (isAuthenticated)
        userAuth = getTokenInLocalStorage();

    const isAdmin = userAuth && userAuth.role === 'ADMIN';

    const opcionesMenu =
        isAuthenticated && isAdmin ? [...arrayMenuUser.userRegisteredNoAdmin, ...arrayMenuUser.userRegisteredAdmin] :
        isAuthenticated && !isAdmin ? [...arrayMenuUser.userRegisteredNoAdmin] : arrayMenuUser.userGuest;

    const handlerOpenModal = () => {
        setOpenModal(true);
    }

    const handleSelected = (item) => {
        setSelectedUserOption(item.name);
        setSelectedGeneralOption(null);
        handleClose();
    }

    return <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
            elevation: 0,
            sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                },
                '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                },
            },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
        {
            opcionesMenu.map((item, index) => {
                return <MenuItem key={index} onClick={() => handleSelected(item)} selected={item.name === selectedUserOption}>
                    <Link to={ `${linkOption(`${item.name}`)}` } style={{ fontWeight: 400}} >
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        {item.name}
                    </Link>

                </MenuItem>
            })
        }

        { isAuthenticated && <div>
            <Divider />
            <MenuItem onClick={handlerOpenModal} >
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Salir
            </MenuItem>
        </div>
        }
    </Menu>
}