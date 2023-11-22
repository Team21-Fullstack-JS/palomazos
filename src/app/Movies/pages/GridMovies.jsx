import {useLoaderData} from "react-router";
import {useEffect, useState} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Box} from "@mui/material";
import {MovieCard} from "../components/movieCard/MovieCard.jsx";
import {css} from "@emotion/react";
import {ButtonMoreMovies} from "../components/buttonMoreMovies/ButtonMoreMovies.jsx";

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
    `
}

export const GridMovies = () => {

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [path, setPath] = useState('/movie/popular');
    const [arrayMovies, setArrayMovies] = useState(null);

    const data = useLoaderData();

    useEffect(() => {
        if (!arrayMovies && data) {
            setTotalPages(data.total_pages);
            setArrayMovies(data.results);
        }
    }, [arrayMovies, data]);

    return arrayMovies ? (
        <>
            <Box sx={{
                flexGrow: 1,
                // border: '1px solid blue'
            }}>
                <Grid2
                    container
                    spacing={{ xs: 2, md: 3 }}
                    // columns={{ xs: 12, sm: 6, lg: 4 }}
                    sx={{
                        // border: '1px solid green',
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
    ) :
    (
        <>Cargando data...</>
    )
}