import {Card, CardActionArea, CardMedia} from "@mui/material";

export const TrailerCard = ({ trailer }) => {
    return (
        <Card sx={{ maxWidth: 600 }} className={'element__slideInFromLeft'}>
            <CardActionArea>
                <CardMedia
                    component="iframe"
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    alt={trailer.name}
                    sx={{
                        height: {xs: '270px', sm: '320px', md: '360px', lg: '380px', xl: '400px', xxl: '420px'},
                    }}
                />
            </CardActionArea>
        </Card>
    )
}