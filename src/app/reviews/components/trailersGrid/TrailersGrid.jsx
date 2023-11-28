import {useCallback, useEffect, useState} from "react";
import {css} from "@emotion/react";

import {Box, Typography} from "@mui/material";
import {useAuthContext} from "../../../shared/utils/hooks/useAuthContext.js";
import {getTrailers} from "../../../shared/requests/httpClientMoviesDB.js";
import {Loader} from "../../../users/components/loader/Loader.jsx";
import {TrailerCard} from "../trailerCard/TrailerCard.jsx";
import Grid2 from "@mui/material/Unstable_Grid2";

const styles = {
    containerLoader: css`
        margin-top: .1rem;
    `,
}

export const TrailersGrid = () => {

    const [notTrailersMsg, setNotTrailersMsg] = useState(null);
    const [trailers, setTrailers] = useState([]);

    const { movieFull } = useAuthContext();
    const { id } = movieFull;

    const fetchTrailersOfMovie = useCallback( async () => {
        const url = `/movie/${id}/videos`;
        return await getTrailers(url, 'es-US');
    }, [id])

    useEffect(() => {
        if (id) {
            fetchTrailersOfMovie()
            .then( (res) => {
                const array = res.results.filter( (trailer) => trailer.type === 'Trailer');
                if (array.length <= 0) {
                    setNotTrailersMsg("No existen trailers para esta película");
                } else {
                    setTrailers(array);
                }
            })
            .catch( (error) => {
                console.log(error);
            })
        }
    }, [fetchTrailersOfMovie, id]);

    if (notTrailersMsg) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                <Typography>{notTrailersMsg}</Typography>
            </Box>
        )
    }

    return trailers.length > 0 ? (
        <Grid2
            container
            spacing={{ xs: 2, md: 3 }}
            sx={{
                width: 'auto',
                height: 'auto',
                marginTop: '0.1rem'
            }}
        >
            {
                trailers.map( (trailer) => {
                    return (
                        <Grid2
                            xs={12}
                            sm={4}
                            md={3}
                            key={trailer.id}
                        >
                            <TrailerCard trailer={trailer} />
                        </Grid2>
                    )
                })
            }
        </Grid2>
    ) : (
        <Box css={styles.containerLoader}>
            <Loader message={"Cargando trailers..."} />
        </Box>
    );
}