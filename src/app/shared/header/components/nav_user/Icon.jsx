import { Avatar, Box, IconButton, Tooltip}  from "@mui/material";

export const Icon = ( { handleClick }) => {

    return <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        }}>
        <Tooltip title="Menu de usuario">
            <IconButton
                onClick={handleClick}
                size="small"
            >
                <Avatar sx={{ width: 45, height: 45 }}>U</Avatar>
            </IconButton>
        </Tooltip>
    </Box>
}