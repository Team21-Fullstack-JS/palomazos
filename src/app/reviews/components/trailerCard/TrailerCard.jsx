import {Card, CardActionArea, CardMedia} from "@mui/material";

export const TrailerCard = ({ trailer }) => {
    return (
        <Card sx={{ maxWidth: 500 }} className={'element__slideInFromLeft'}>
            <CardActionArea>
                <CardMedia
                    component="iframe"
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    alt={trailer.name}
                    sx={{
                        height: {xs: '280px', sm: '320px', md: '360px', lg: '400px', xl: '440px', xxl: '480px'},
                    }}
                />
            </CardActionArea>
        </Card>
    )
}