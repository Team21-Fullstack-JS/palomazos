import {Box} from "@mui/material";
import {useLoaderData} from "react-router"

import {BannerMovies} from "../movies/Banner/BannerMovies.jsx";
import {ListMovies} from "../../../../users/components/listMovies/ListMovies";
import {getMovies} from "../../../requests/httpClientMoviesDB";
import {Loader} from "../loader/Loader.jsx";
import bgImage from '/assets/movie-theater.jpg'



const UPCOMING = '/movie/upcoming';
const TOP_RATED = '/movie/top_rated';
const NOW_PLAYING = '/movie/now_playing';
const POPULAR = '/movie/popular';
import {css} from "@emotion/react";

const styles = {
    containerSectionMovies: css`
    margin-bottom: 1.4rem;
  `,
}

export const Movies = () => {
    const [arrayMovies, setArrayMovies] = usState(null);

    const fetchMovies = useCallback( async () => {
        const res = await Promise.all([
            await getMovies(NOW_PLAYING, 'es-US', 3),
            await getMovies(POPULAR, 'es-US', 2),
            await getMovies(TOP_RATED, 'es-US', 1),
            await getMovies(UPCOMING, 'es-US', 1)
        ]);
    }
    )
    const data = useLoaderData();
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '1.5rem',
            paddingTop: '2rem'
        }}>
             <BannerMovies bgImage={bgImage} />
             <Box
                sx={{
                    // border: '1px solid blue',
                    width: '100%',
                    marginTop: '3rem',
                }}
            >
                 Películas:
            </Box>
            <Box
                sx={{
                    width: '100%',
                    marginTop: '3rem'
                }}
            >
                <div css={styles.containerSectionMovies}>
                    <ListMovies title={'En cartelera'} section='NOW_PLAYING' array={arrayMovies[0]} />
                </div>

                <div css={styles.containerSectionMovies}>
                    <ListMovies title={'Populares'}  section='POPULAR' array={arrayMovies[1]} />
                </div>

                <div css={styles.containerSectionMovies}>
                    <ListMovies title={'Mejor calificadas'} section='TOP_RATED' array={arrayMovies[2]} />
                </div>

                <div css={styles.containerSectionMovies}>
                    <ListMovies title={'Próximos estrenos'} section='UPCOMING' array={arrayMovies[3]} />
                </div>
            </Box>
        </Box>
    )  (
        <Loader message={"Cargando películas"} />
    );
}

