import {
    Avatar, Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Typography
} from "@mui/material";

import { red } from "@mui/material/colors";
import {ToggleCheckLogo} from "../../../../shared/components/toggleCheckButton/ToggleCheckLogo.jsx";
import {StarGrid} from "../../../../reviews/components/starGrid/StarGrid.jsx";
import {MOVIES} from "../../../../shared/utils/router/paths.js";
import {NavLink} from "react-router-dom";

const IMG_URL = 'https://image.tmdb.org/t/p/w500'

export const MovieCardReview = ({ item }) => {

    const { id, movie, comment, rate, isCheck } = item;

    const { id: movieId, backdrop_path, title, year } = movie;
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
            <NavLink to={`${MOVIES}/id/${movieId}`} key={movieId} style={{textDecoration: 'none'}}>
                <CardMedia
                    component="img"
                    height="194"
                    image={ IMG_URL + backdrop_path }
                    alt={ title }
                    sx={{ cursor: 'pointer' }}
                />
            </NavLink>
            <CardContent sx={{ height: 80, overflow: 'hidden', overflowY: 'auto'}}>
                <Typography variant="body2" color="text.secondary">
                    { content }
                </Typography>
            </CardContent>
            <CardActions
                disableSpacing
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        height: '100%',
                    }}
                >
                    <StarGrid
                        isDisabled={true}
                        rate={rate}
                        setUserRate={null}
                    />
                </Box>
                <Box
                    sx={{
                        width: '50px',
                        height: '100%',
                        borderRadius: '50%',
                    }}
                >
                    <ToggleCheckLogo userCheck={isCheck} handleClick={null} isDisabled={true} />
                </Box>
            </CardActions>
        </Card>
    )
}