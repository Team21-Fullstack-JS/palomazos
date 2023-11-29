import { Avatar, Box, IconButton, Tooltip}  from "@mui/material";
import {stringAvatar} from "../../../utils/others/stringAvatar.js";
import { useAuthContext } from "../../../utils/hooks/useAuthContext.js";
import {useEffect, useState} from "react";

export const Icon = ( { handleClick }) => {

    const { getUserInLocalStorage: userData, getTokenInLocalStorage: getAuth, isAuthenticated } = useAuthContext();
    const [user, setUser] = useState(null);

    useEffect(() => {

        if (!isAuthenticated) {
            setUser(null);
        } else if (isAuthenticated && !userData()) {
            const auth = JSON.parse(getAuth());
            setUser({firstName: auth.email} );
        } else if (userData()) {
            setUser(JSON.parse(userData()));
        }

    }, [getAuth, isAuthenticated, userData]);

    return <Box
        sx={{
            display: 'flex',
            justifyContent: {xs: 'flex-end', sm: 'center'},
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            marginRight: {xs: '1.5rem', sm: '0'},
        }}>
        <Tooltip title="Menu de usuario">
            <IconButton
                onClick={handleClick}
                size="small"
                edge={false}
            >
                { user ?
                    <Avatar
                        {...stringAvatar(
                            {nombre: `${user.firstName}`, sx: `width: 35, height: 35`} )}
                    />
                    : <Avatar sx={{width: 35, height: 35}}>U</Avatar>
                }
            </IconButton>
        </Tooltip>
    </Box>
}