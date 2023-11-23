import {useCallback, useEffect, useState} from "react";
import {useLoaderData} from "react-router";

import {Box} from "@mui/material";
import { GridV2Mui } from "./gridV2/GridV2Mui.jsx";

import {BannerUsers} from "../banner/BannerUsers.jsx";
import {ListMovies} from "../listMovies/ListMovies.jsx";
import {Loader} from "../loader/Loader.jsx";
import {getMovies} from "../../../shared/requests/httpClientMoviesDB.js";
import bgImage from '/assets/movie-director.jpg'

import {css} from "@emotion/react";

import {IMG_URL} from "../../../shared/requests/httpClientMoviesDB.js";
import {
    MOVIES_NOW_PLAYING,
    MOVIES_POPULAR,
    MOVIES_TOP_RATED,
    MOVIES_UPCOMING
} from "../../../shared/utils/router/paths.js";
const UPCOMING = '/movie/upcoming';
const TOP_RATED = '/movie/top_rated';
const NOW_PLAYING = '/movie/now_playing';
const POPULAR = '/movie/popular';

const styles = {
    containerSectionMovies: css`
      margin-bottom: 1.4rem;
    `,
    containerLoader: css`
        margin-top: 2rem;
    `,
}

export const MisPeliculas = () => {
    const [arrayMovies, setArrayMovies] = useState(null);

    const fetchMovies = useCallback( async () => {
        const res = await Promise.all([
            await getMovies(NOW_PLAYING, 'es-US', 3),
            await getMovies(POPULAR, 'es-US', 2),
            await getMovies(TOP_RATED, 'es-US', 1),
            await getMovies(UPCOMING, 'es-US', 1)
        ]);

        const arrayReq = [];

        res.forEach((req) => {
            const movies = [];

            for (let i = 0; i < 6; i++) {
                const newMovie = {};
                newMovie.img = IMG_URL + req.results[i].backdrop_path;
                newMovie.title = req.results[i].title;
                newMovie.year = new Date(req.results[i].release_date).getFullYear();

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

            arrayReq.push(movies);
        });

        setArrayMovies(arrayReq);
    }, []);

    const data = useLoaderData();

    useEffect(() => {
        if (!arrayMovies) {
            fetchMovies();
        }
    }, [arrayMovies, fetchMovies]);

    return data && arrayMovies ? (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.3rem',
            width: '100%',
            // border: '1px solid red'
        }}>
            <BannerUsers bgImage={bgImage} />
            <Box
                sx={{
                    // border: '1px solid blue',
                    width: '100%',
                    marginTop: '3rem',
                }}
            >
                Mis Peliculas
            </Box>
            <GridV2Mui array={data.data.reviews} />
            <Box
                sx={{
                    width: '100%',
                    marginTop: '3rem'
                }}
            >
                <div css={styles.containerSectionMovies}>
                    <ListMovies title={'En cartelera'} section={MOVIES_NOW_PLAYING} array={arrayMovies[0]} />
                </div>

                <div css={styles.containerSectionMovies}>
                    <ListMovies title={'Populares'}  section={MOVIES_POPULAR} array={arrayMovies[1]} />
                </div>

                <div css={styles.containerSectionMovies}>
                    <ListMovies title={'Mejor calificadas'} section={MOVIES_TOP_RATED} array={arrayMovies[2]} />
                </div>

                <div css={styles.containerSectionMovies}>
                    <ListMovies title={'Próximos estrenos'} section={MOVIES_UPCOMING} array={arrayMovies[3]} />
                </div>
            </Box>
        </Box>
    ) : (
        <div css={styles.containerLoader}>
            <Loader message={"Cargando tus peliculas..."} />
        </div>
    );
}