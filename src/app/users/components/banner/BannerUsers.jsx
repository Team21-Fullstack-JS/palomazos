import { Box } from "@mui/material";

export const BannerUsers = ({ bgImage }) => {
    return (
        <Box
            sx={{
                // border: {xs: '1px solid green', sm: '1px solid red', md: '1px solid blue', lg: '1px solid yellow'},
                height: {xs: '90px', sm: '150px', md: '200px', lg: '220px'},
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
        </Box>
    )
}