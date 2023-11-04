import { Box } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { getMovies } from "../../../shared/requests/httpClientMoviesDB.js";
import { GridV2Mui } from "../../../shared/components/gridV2/GridV2Mui.jsx";

export const MisPeliculas = () => {
    const [data, setData] = useState(null);

    const fetchData = useCallback( async () => {
        const res = await getMovies('/movie/top_rated', 'es-US', 1);
        console.log(res);
        setData(res);
    }, []);

    useEffect(() => {
        if (!data) {
            fetchData();
        }

    }, [data, fetchData]);

    return data ? (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            paddingTop: '2rem',
            width: '100%',
            // border: '1px solid red'
        }}>
            <GridV2Mui array={data} />
        </Box>
    ) : (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            paddingTop: '2rem',
            width: '100%',
            border: '1px solid red'
        }}>
            Cargando datos...
        </Box>
    );
}