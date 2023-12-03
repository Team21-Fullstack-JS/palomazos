import {useCallback, useEffect, useState} from "react";
import {getMovies, IMG_URL} from "../../../shared/requests/httpClientMoviesDB.js";
import {Box, Container, Typography} from "@mui/material";
import {css} from "@emotion/react";
import {Loader} from "../../../users/components/loader/Loader.jsx";
import {ListMovies} from "../../../users/components/listMovies/ListMovies.jsx";
import imgNotFound from '/assets/movie-theater.jpg';
import {getRandomNumber} from "../../../shared/utils/others/getRandomNumber.js";

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

export const SimilarMovies = ({ movieId }) => {

    const [arrayMovies, setArrayMovies] = useState(null);

    const fetchMovies = useCallback( async () => {

        const url = `/movie/${movieId}/similar`;

        const res = await getMovies(url, 'es-US', getRandomNumber(1, 6));

        const movies = [];

        for (let i = 0; i < 6; i++) {
            const newMovie = {};
            newMovie.id = res.results[i].id;
            newMovie.img = res.results[i].backdrop_path ? IMG_URL + res.results[i].backdrop_path : imgNotFound;
            newMovie.title = res.results[i].title;
            newMovie.year = new Date(res.results[i].release_date).getFullYear();

            if (i === 0) {
                newMovie.rows = 2;
                newMovie.cols = 2;
                newMovie.featured = true;
            } else if (i === 3) {
                newMovie.rows = 2;
                newMovie.cols = 2;
            }

            movies.push(newMovie);
        }

        setArrayMovies(movies);

    }, [movieId]);

    useEffect(() => {
        if (!arrayMovies) {
            fetchMovies();
        }
    }, [arrayMovies, fetchMovies]);

    if (arrayMovies && arrayMovies.length <= 0) {
        return (
            <Box css={styles.container}>
                <Typography variant="h5" component="h2" color="var(--bgcolor-header)" css={styles.containerMessage}>
                    No existen películas similares.
                </Typography>
            </Box>
        )
    }

    return !arrayMovies ? (
        <div css={styles.containerLoader}>
            <Loader message={"Cargando películas similares..."} />
        </div>
    ) : (
        <Container
            disableGutters
            component="div"
            maxWidth="100%"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box
                maxWidth="lg"
                sx={{
                    width: { xs: 'auto', sm: '600px', md: '900px', lg: '1024px', xl: '1536px', xxl: '1600px' },
                }}
            >
                <ListMovies title={"Películas similares"} array={arrayMovies} section={null} />
            </Box>
        </Container>
    )
}