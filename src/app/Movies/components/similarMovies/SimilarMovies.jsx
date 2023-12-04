import {useCallback, useEffect, useState} from "react";
import {getMovies, IMG_URL} from "../../../shared/requests/httpClientMoviesDB.js";
import {Box, Container, Typography} from "@mui/material";
import {css} from "@emotion/react";
import {Loader} from "../../../users/components/loader/Loader.jsx";
import {ListMovies} from "../../../users/components/listMovies/ListMovies.jsx";
import imgNotFound from '/assets/movie-theater.jpg';
import {getRandomNumber} from "../../../shared/utils/others/getRandomNumber.js";
import {shuffleArray} from "../../../shared/utils/others/shuffledArrays.js";
import {useAuthContext} from "../../../shared/utils/hooks/useAuthContext.js";

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

export const SimilarMovies = () => {

    const { movieFull } = useAuthContext();

    const [arrayMovies, setArrayMovies] = useState(null);

    const fetchMovies = useCallback( async () => {

        // const url = `/movie/${movie.id}/similar`;
        const url = `/trending/movie/${'week'}`;

        const data = await getMovies(url, 'es-US', 1); //getRandomNumber(1, 6)
        // const res = data.results.sort(() => 0.5 - Math.random());
        const res = shuffleArray(data.results);

        const movies = [];

        for (let i = 0; i < 6; i++) {
            const newMovie = {};
            newMovie.id = res[i].id;
            newMovie.img = res[i].backdrop_path ? IMG_URL + res[i].backdrop_path : imgNotFound;
            newMovie.title = res[i].title;
            newMovie.year = new Date(res[i].release_date).getFullYear();

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

    }, []);

    useEffect(() => {
        if (!arrayMovies) {
            fetchMovies();
        }
    }, [arrayMovies, fetchMovies, movieFull.id]);

    if (arrayMovies && arrayMovies.length <= 0) {
        return (
            <Box css={styles.container}>
                <Typography variant="h5" component="h2" color="var(--bgcolor-header)" css={styles.containerMessage}>
                    No existen películas.
                </Typography>
            </Box>
        )
    }

    return !arrayMovies ? (
        <div css={styles.containerLoader}>
            <Loader message={"Cargando películas..."} />
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
                    // width: { xs: '350px', sm: '600px', md: '900px', lg: '1024px', xl: '1536px', xxl: '1600px' },
                    width: '90%',
                }}
            >
                <ListMovies title={"Tendencia de la semana"} array={arrayMovies} section={null} />
            </Box>
        </Container>
    )
}