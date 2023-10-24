import { Avatar, Box, IconButton, Tooltip}  from "@mui/material";

export const Icon = ( { handleClick }) => {

    return <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
        }}>
        <Tooltip title="Menu de usuario">
            <IconButton
                onClick={handleClick}
                size="small"
                edge={false}
            >
                <Avatar sx={{ width: 35, height: 35 }}>U</Avatar>
            </IconButton>
        </Tooltip>
    </Box>
}