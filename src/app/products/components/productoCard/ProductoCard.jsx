import {Box, Tooltip, Typography} from "@mui/material";

export const ProductoCard = ({ product }) => {
    const { title, image, price } = product;

    return (
        <Box
            sx={{ width: 100, marginRight: 0, my: 1.5 }}
        >
            <Tooltip title={title} arrow>
                <img
                    style={{ width: 95, height: 95 }}
                    alt={title}
                    src={image}
                />
            </Tooltip>
                <Box sx={{ pr: 0, display: 'flex', justifyContent: 'center' }}>
                    <Typography display="block" variant="caption" color="text.secondary">
                        $ {price}
                    </Typography>
                </Box>
        </Box>
    )
}