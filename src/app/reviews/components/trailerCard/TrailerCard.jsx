import {Card, CardActionArea, CardMedia} from "@mui/material";

export const TrailerCard = ({ trailer }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="iframe"
                    height="200"
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    alt={trailer.name}
                />
            </CardActionArea>
        </Card>
    )
}