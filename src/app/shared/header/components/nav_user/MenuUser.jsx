import { Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { arrayMenuUser } from './arrayMenuUser.jsx';

const isUserRegistered = false;
const isAdmin = false;

const opcionesMenu =
    isUserRegistered && isAdmin ? [...arrayMenuUser.userRegisteredNoAdmin, ...arrayMenuUser.userRegisteredAdmin] :
    isUserRegistered && !isAdmin ? [...arrayMenuUser.userRegisteredNoAdmin] : arrayMenuUser.userGuest;

export const MenuUser = ({ anchorEl, open, handleClose }) => {
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
                return <MenuItem key={index} onClick={handleClose}>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    {item.name}
                </MenuItem>
            })
        }

        { isAdmin && <div>
            <Divider />
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Salir
            </MenuItem>
        </div>
        }
    </Menu>
}