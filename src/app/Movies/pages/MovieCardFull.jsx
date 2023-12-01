import {css} from "@emotion/react";
import { useParams } from "react-router-dom";
import {useAuthContext} from "../../shared/utils/hooks/useAuthContext.js";
import {MovieData} from "../components/backgroundImage/MovieData.jsx";
import {Box, Typography} from "@mui/material";
import {ReviewLanding} from "../../reviews/components/reviewLanding/ReviewLanding.jsx";
import {useCallback, useEffect, useState} from "react";
import {Loader} from "../../users/components/loader/Loader.jsx";
import {GetMoviesWithReviews} from "../../shared/utils/router/loaders/GetMoviesWithReviews.js";
import {getMovieByIDFromMovieDB, getMovies} from "../../shared/requests/httpClientMoviesDB.js";

const styles = {
    container: css`
      width: 100%;
    `,
    containerLoader: css`
        margin-top: 2rem;
    `,
    containerMessage: css`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
    `
};

export const MovieCardFull = () => {
    window. scrollTo(0, 0);

    const params = useParams();

    const { movieFull, setMovieFull } = useAuthContext();
    const [isMovie, setIsMovie] = useState(true);

    const fetchMoviesWithReviews = useCallback( (movieId) => {
        return getMovieByIDFromMovieDB('/movie', movieId, 'es-US');
    }, [])

    useEffect(() => {

        if(!movieFull) {
            const movieId = params ? params.movieId : null;

            if (movieId) {
                fetchMoviesWithReviews(movieId)
                    .then( (res) => {
                        if (res) {
                            setMovieFull(res);
                            setIsMovie(true);
                        } else {
                            setIsMovie(false);
                        }
                    })
                    .catch( (error) => {
                        console.log(error);
                    })
            }
            
        }

        setMovieFull(movieFull)

        return () => {
            setMovieFull(null);
        }
    }, [fetchMoviesWithReviews, movieFull, params, setMovieFull]);

    if (!isMovie ) {
        return (
            <Box css={styles.container}>
                <Typography variant="h5" component="h2" color="var(--bgcolor-header)" css={styles.containerMessage}>
                    No existe la película.
                </Typography>
            </Box>
        )
    }

    return isMovie && movieFull ? (
        <Box id="top"  css={styles.container}>
            <MovieData movie={movieFull}/>
            <Box>
                <ReviewLanding />
            </Box>
        </Box>
    ) : (
        <div css={styles.containerLoader}>
            <Loader message={"Cargando datos de la película..."} />
        </div>
    )
}