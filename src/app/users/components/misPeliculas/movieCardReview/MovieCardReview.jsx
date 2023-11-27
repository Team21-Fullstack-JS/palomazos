import {ToggleCheckButton} from "../../../../shared/components/toggleCheckButton/ToggleCheckButton.jsx";

import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Typography
} from "@mui/material";

import { red } from "@mui/material/colors";

const IMG_URL = 'https://image.tmdb.org/t/p/w500'

export const MovieCardReview = ({ item }) => {

    const { id, movie, comment, rate, isCheck } = item;

    const { backdrop_path, overview, poster_path, title, year } = movie;
    const { content } = comment;

    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[600] }} aria-label="recipe">
                        { rate }
                    </Avatar>
                }
                title={ title }
                subheader={new Date(year).getFullYear()}
            />
            <CardMedia
                component="img"
                height="194"
                image={ IMG_URL + backdrop_path }
                alt={ title }
            />
            <CardContent sx={{ height: 50, overflow: 'hidden', overflowY: 'auto'}}>
                <Typography variant="body2" color="text.secondary">
                    { content }
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ToggleCheckButton isCheck={isCheck} idReview={id} isDisabled={false} />
            </CardActions>
        </Card>
    )
}