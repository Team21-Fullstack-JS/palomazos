import {useCallback, useEffect, useState} from "react";
import {
    Box, Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Container, TextField,
} from "@mui/material";
import {useAuthContext} from "../../../shared/utils/hooks/useAuthContext.js";
import {deepPurple} from "@mui/material/colors";
import Logo from '../../../shared/utils/others/logo.svg?react';
import {PalomazoGrid} from "./palomazoGrid/PalomazoGrid.jsx";
import {GetUserReviews} from "../../../shared/utils/router/loaders/GetUserReviews.js";

const IMG_URL_W500 = 'https://image.tmdb.org/t/p/w500';

export const Palomazo = () => {

    const [disabledButton, setDisabledButton] = useState(false);

    const { movieFull, getTokenInLocalStorage, getUserInLocalStorage } = useAuthContext();

    const tokenInLocalStorage = getTokenInLocalStorage();
    const userInLocalStorage = getUserInLocalStorage();

    const [user] = useState(userInLocalStorage && tokenInLocalStorage ? JSON.parse(userInLocalStorage) : null);
    const [auth] = useState(userInLocalStorage && tokenInLocalStorage ? JSON.parse(tokenInLocalStorage) : null);

    const [reviewArray, setReviewArray] = useState(null);

    const fetGetUserReviews = useCallback( async () => {
        const data = await GetUserReviews(); //Obtener las reviews del usuario

        if( data.error ) {
            console.log(data.message);
            return;
        }

        const res = data.data.reviews.filter( review => review.movie_id === movieFull.id );
        setReviewArray(res);

    }, [movieFull.id])

    useEffect(() => {
        if( user && auth && !reviewArray ) {
            fetGetUserReviews();
        }
    }, [auth, fetGetUserReviews, reviewArray, user]);

    return (reviewArray && reviewArray.length >= 0) ? (
        <Container
            disableGutters
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Card
                sx={{
                    width: {xs: '98%'} ,
                    maxWidth: {xs: '100%', sm: 380, md: 420, lg: 470, xl: 500, xxl: 550},
                }}
                className={'element__slideInFromLeft'}
            >
                <CardHeader
                    avatar={
                        <Box sx={{ width: '80px', height: '100%'}}>
                            <Logo fill={deepPurple[500]} width={'100%'} height={'100%'}/>
                        </Box>
                    }

                    title={`¿Te ha gustado?`}
                    subheader={`¡Dale una puntuación!`}
                />
                <CardMedia
                    component="img"
                    image={`${IMG_URL_W500}${movieFull.backdrop_path}`}
                    alt="Paella dish"
                    sx={{ height: {xs: 100} }}
                />
                <CardContent>
                    <TextField
                        label="Comentario"
                        multiline
                        rows={3}
                        variant="outlined"
                        value={reviewArray.length > 0 ? reviewArray[0].comment.content : ''}
                        fullWidth
                    />
                </CardContent>
                <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between'}}>
                    <PalomazoGrid review={reviewArray} />
                </CardActions>
            </Card>
            <Button
                type="submit"
                disabled={disabledButton}
                fullWidth
                variant="contained"
                sx={{
                    mt: 3,
                    mb: 2,
                    maxWidth: {xs: '100%', sm: 380, md: 420, lg: 470, xl: 500, xxl: 550},
                }}

            >
                Guardar reseña
            </Button>
        </Container>
    ) : null;
}