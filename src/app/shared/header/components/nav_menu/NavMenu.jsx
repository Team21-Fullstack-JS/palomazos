import { arrayMenuUser } from './arrayMenu.jsx'
import { Box, Typography } from "@mui/material";

export const NavMenu = () => {
    return <Box sx={{ display: 'flex', alignItems: 'left', textAlign: 'center', width: '100%' }}>
            {
                arrayMenuUser.map( (item, i) => {
                    return (
                        <Typography key={i} sx={{ minWidth: 100, lineHeight: '100px', color: 'white' }}>
                            {item}
                        </Typography>
                    )
                })
            }
    </Box>
}