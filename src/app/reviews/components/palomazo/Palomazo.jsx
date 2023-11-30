import {useCallback, useEffect, useState} from "react";
import {Link, useLocation } from "react-router-dom";
import {
    Box, Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Container, TextField, Typography,
} from "@mui/material";
import {useAuthContext} from "../../../shared/utils/hooks/useAuthContext.js";
import {deepPurple} from "@mui/material/colors";
import Logo from '../../../shared/utils/others/logo.svg?react';
import {PalomazoGrid} from "./palomazoGrid/PalomazoGrid.jsx";
import {GetUserReviews} from "../../../shared/utils/router/loaders/GetUserReviews.js";
import {TransitionMessage} from "../../../shared/components/transitionMessage/TransitionMessage.jsx";
import {css} from "@emotion/react";
import {linkOption} from "../../../shared/utils/router/paths.js";
import {CreateMoviesReviews} from "../../../shared/utils/router/loaders/createMoviesReviews.js";
import {GetMovieById} from "../../../shared/utils/router/loaders/GetMovieById.js";
import {CreateNewMovie} from "../../../shared/utils/router/loaders/CreateNewMovie.js";

const styles = {
    hideBox: css`
      display: none;
    `,
    showBox: css`
      display: flex;
    `,
    link: css`
        color: var(--link-color);
      cursor: pointer;
    `,
    disabled: css`
      pointer-events: none; /* Evita clics en el botón */
    `,
}

const IMG_URL_W500 = 'https://image.tmdb.org/t/p/w500';

export const Palomazo = () => {
    const [openTransitionMessage, setOpenTransitionMessage] = useState(false);
    const [messageTransitionMessage, setMessageTransitionMessage] = useState('');
    const [severityTransitionMessage, setSeverityTransitionMessage] = useState('success');

    const [userRate, setUserRate] = useState(0);
    const [userCheck, setUserCheck] = useState(false);
    const [userComment, setUserComment] = useState('');

    const [isDisabledButton, setIsDisabledButton] = useState(false);

    const { movieFull, isAuthenticated, setCurrentLocation } = useAuthContext();

    const [reviewArray, setReviewArray] = useState(null);

    let location = useLocation();

    const handleSubmit = async () => {

        if( !isAuthenticated ) {
            setCurrentLocation(location.pathname);
            setMessageTransitionMessage('Inicie sesión para poder enviar una reseña');
            setSeverityTransitionMessage('warning');
            setOpenTransitionMessage(true);
            return;
        }

        setIsDisabledButton(true);
        const body = {
            rate: userRate,
            isCheck: userCheck,
            comment: {
                content: userComment,
            },
        }

        //1. Verificar si la película ya existe en la API propia
        const dataSearchMovie = await GetMovieById(movieFull.id);

        //2. Si no existe, crear la pelicula
        let newMovieInApi = null;
        if (dataSearchMovie.error && dataSearchMovie.code === 404) {

            const movie = {
                id: movieFull.id,
                title: movieFull.title,
                overview: movieFull.overview,
                year: movieFull.release_date,
                poster_path: movieFull.poster_path,
                backdrop_path: movieFull.backdrop_path,
            }

            newMovieInApi = await CreateNewMovie(movie);
        }

        //Si hubo un error al crear la película
        if (!newMovieInApi ||  newMovieInApi && newMovieInApi.error) {
            setMessageTransitionMessage(`Ocurrio un error al guardar la película con su reseña. Contacte al administrador`);
            setSeverityTransitionMessage('error');
            setOpenTransitionMessage(true);
            setIsDisabledButton(false);
            return;
        }

        //3. Finalmente se crea la reseña
        const dataMovieReview = await CreateMoviesReviews(movieFull.id, body);

        setTimeout(() => {

            setMessageTransitionMessage(dataMovieReview.error ? `Ocurrio un error: ${dataMovieReview.message}` : `Listo, tu reseña se ha guardado`);
            setSeverityTransitionMessage(dataMovieReview.error ? 'error' : 'success');
            setOpenTransitionMessage(true);
            setIsDisabledButton(false);
            setReviewArray(null);
        }, 300);
    }

    const fetGetUserReviews = useCallback( async () => {
        const data = await GetUserReviews(); //Obtener las reviews del usuario

        if( data.error ) {
            return;
        }

        const res = data.data.reviews.filter( review => review.movie_id === movieFull.id );

        setReviewArray(res);
        setUserRate(res.length > 0 ? res[0].rate : 0);
        setUserCheck(res.length > 0 ? res[0].isCheck : false);
        setUserComment(res.length > 0 ? res[0].comment.content : '');
        setIsDisabledButton(res.length > 0 );

    }, [movieFull.id])

    useEffect(() => {
        if( isAuthenticated && !reviewArray ) {
            fetGetUserReviews();
        }
    }, [isAuthenticated, fetGetUserReviews, reviewArray]);

    return (reviewArray && reviewArray.length >= 0) ? (
        <MainContainer
            movieFull={movieFull}
            disabledButton={isDisabledButton}
            handleSubmit={handleSubmit}
            openTransitionMessage={openTransitionMessage}
            setOpenTransitionMessage={setOpenTransitionMessage}
            messageTransitionMessage={messageTransitionMessage}
            severityTransitionMessage={severityTransitionMessage}
            isAuthenticated={isAuthenticated}
        >
            <Children
                userComment={userComment}
                setUserComment={setUserComment}
                userRate={userRate}
                setUserRate={setUserRate}
                userCheck={userCheck}
                setUserCheck={setUserCheck}
                isDisabledButton={isDisabledButton}
            />
        </MainContainer>
    ) : (
        <MainContainer
            movieFull={movieFull}
            disabledButton={isDisabledButton}
            handleSubmit={handleSubmit}
            openTransitionMessage={openTransitionMessage}
            setOpenTransitionMessage={setOpenTransitionMessage}
            messageTransitionMessage={messageTransitionMessage}
            severityTransitionMessage={severityTransitionMessage}
            isAuthenticated={isAuthenticated}
        >
            <Children
                userComment={''}
                setUserComment={setUserComment}
                userRate={userRate}
                setUserRate={setUserRate}
                userCheck={userCheck}
                setUserCheck={setUserCheck}
                isDisabledButton={isDisabledButton}
            />
        </MainContainer>
    );
}

function MainContainer( props ) {

    const {
        movieFull,
        disabledButton,
        handleSubmit,
        openTransitionMessage,
        setOpenTransitionMessage,
        messageTransitionMessage,
        severityTransitionMessage,
        isAuthenticated,
        children
    } = props;

    return (
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
                    alt={movieFull.title}
                    sx={{ height: {xs: 100} }}
                />
                { children }
            </Card>
            <Box
                sx={{
                    mt: 2,
                    pd: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '98%',
                    maxWidth: {xs: '100%', sm: 380, md: 420, lg: 470, xl: 500, xxl: 550},
                }}
                css={[
                    styles.hideBox,
                    openTransitionMessage && styles.showBox
                ]}
            >
                <TransitionMessage
                    message={messageTransitionMessage}
                    open={openTransitionMessage}
                    setOpen={setOpenTransitionMessage}
                    severity={severityTransitionMessage} // error, warning, info, success
                />
                <Box
                    display={'flex'}
                    justifyContent={'flex-end'}
                >
                    <Typography component="p" variant="body2">
                        <Link
                            to={ `${linkOption(`Ingresar`)}` }
                            style={{ fontWeight: 400}}
                            css={[
                                styles.hideBox,
                                openTransitionMessage && !isAuthenticated && styles.showBox
                            ]}
                        >
                            <span
                                css={ styles.link }>
                                Iniciar sesión
                            </span>
                        </Link>
                    </Typography>
                </Box>
            </Box>
            <Button
                type="submit"
                disabled={disabledButton}
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                sx={{
                    mt: 3,
                    mb: 2,
                    maxWidth: {xs: '100%', sm: 380, md: 420, lg: 470, xl: 500, xxl: 550},
                }}
                className={'element__slideInFromLeft'}
            >
                {!disabledButton ? 'Guardar reseña' : 'Ya has enviado tu reseña'}
            </Button>
        </Container>
    )
}

function Children( props ) {

    const { userComment, setUserComment, userRate, setUserRate, userCheck, setUserCheck, isDisabledButton } = props;

    return (
        <Box
            css={[
                isDisabledButton && styles.disabled
            ]}
        >
            <CardContent>
                <TextField
                    label="Comentario"
                    multiline
                    rows={3}
                    variant="outlined"
                    value={userComment}
                    fullWidth
                    onChange={(e) => setUserComment(e.target.value)}
                />
            </CardContent>
            <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <PalomazoGrid
                    userCheck={userCheck}
                    setUserCheck={setUserCheck}
                    userRate={userRate}
                    setUserRate={setUserRate}
                />
            </CardActions>
        </Box>
    )
}