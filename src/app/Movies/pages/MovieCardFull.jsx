import {css} from "@emotion/react";
import { useParams } from "react-router-dom";
import {useAuthContext} from "../../shared/utils/hooks/useAuthContext.js";
import {MovieData} from "../components/backgroundImage/MovieData.jsx";
import {Box, Typography} from "@mui/material";
import {ReviewLanding} from "../../reviews/components/reviewLanding/ReviewLanding.jsx";
import {useCallback, useEffect, useState} from "react";
import {Loader} from "../../users/components/loader/Loader.jsx";
import {getMovieByIDFromMovieDB} from "../../shared/requests/httpClientMoviesDB.js";
import {SimilarMovies} from "../components/similarMovies/SimilarMovies.jsx";

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

        const movieId = params ? Number(params.movieId) : null;

        if(!movieFull || (movieFull && movieFull.id !== movieId)) {

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
            <Box>
                <SimilarMovies movieId={movieFull.id} />
            </Box>
        </Box>
    ) : (
        <div css={styles.containerLoader}>
            <Loader message={"Cargando datos de la película..."} />
        </div>
    )
}