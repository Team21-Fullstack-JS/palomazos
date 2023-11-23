import {useLoaderData} from "react-router";
import {useCallback, useEffect, useState} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import {MovieCard} from "../components/movieCard/MovieCard.jsx";
import {css} from "@emotion/react";
import {ButtonMoreMovies} from "../components/buttonMoreMovies/ButtonMoreMovies.jsx";
import {Loader} from "../../users/components/loader/Loader.jsx";
import {useAuthContext} from "../../shared/utils/hooks/useAuthContext.js";
import { useSearchParams } from "react-router-dom";
import {getMovies} from "../../shared/requests/httpClientMoviesDB.js";

const styles = {
    container: css`
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 5px;
    `,
    button__container: css`
      width: 100%;
      margin: 1rem 0;
    `,
    containerLoader: css`
        margin-top: 2rem;
    `,
    titleSection: css`
        margin: 1rem 0 .1rem 0;
        font-size: 1.1rem;
        font-weight: 500;
        color: var(--bgcolor-header);
    `,
}

export const GridMovies = ({ section }) => {

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [path] = useState(section);

    const { arrayMovies, setArrayMovies } = useAuthContext();

    const [searchParams] = useSearchParams();

    const title = section === '/movie/upcoming' ? 'Próximamente'
        : section === '/movie/top_rated' ? 'Más valorados'
        : section === '/movie/now_playing' ? 'En cartelera'
        : section === '/movie/popular' ? 'Populares' : 'Resultados de la búsqueda';

    const data = useLoaderData();

    const fetchSearchMovies = useCallback( async (stringSearch) => {
        const path = `/search/movie?query=${stringSearch}&include_adult=false`;
        const data = await getMovies(path, 'es-US', 1, true);
        setArrayMovies(data.results);
    }, [setArrayMovies])

    useEffect(() => {
        if (searchParams.get('movie')) {
            fetchSearchMovies(searchParams.get('movie'));
        }
    }, [searchParams, fetchSearchMovies]);

    useEffect(() => {
        setArrayMovies(null);
    }, [section, setArrayMovies]);

    useEffect(() => {
        if (!arrayMovies && data) {
            setTotalPages(data.total_pages);
            setArrayMovies(data.results);
        }
    }, [arrayMovies, data, setArrayMovies]);

    return arrayMovies ? (
        <>
            <Box sx={{
                flexGrow: 1,
            }}>
                <div css={styles.titleSection}>
                    <p>{title}</p>
                </div>
                <Grid2
                    container
                    spacing={{ xs: 2, md: 3 }}
                    sx={{
                        width: 'auto',
                        height: 'auto',
                        marginTop: '0.1rem'
                    }}
                >
                    { arrayMovies.map((item) => (
                        <Grid2
                            xs={12}
                            sm={4}
                            md={3}
                            key={item.id}
                        >
                            <div css={styles.container} className={'element__slideInFromLeft'}>
                                <MovieCard item={item} />
                            </div>
                        </Grid2>
                    )) }
                </Grid2>
                <div css={styles.button__container}>
                    <ButtonMoreMovies
                        setArrayMovies={setArrayMovies}
                        page={page}
                        setPage={setPage}
                        totalPages={totalPages}
                        path={path}
                    />
                </div>
            </Box>
        </>
    ) : (
        <div css={styles.containerLoader}>
            <Loader message={"Cargando las peliculas"} />
        </div>
    );
}