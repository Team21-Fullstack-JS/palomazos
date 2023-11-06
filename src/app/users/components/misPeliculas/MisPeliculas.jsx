import { Box } from "@mui/material";
import { GridV2Mui } from "./gridV2/GridV2Mui.jsx";
import {LoaderBar} from "../../../shared/components/loader/LoaderBar.jsx";
import {css} from "@emotion/react";
import {useLoaderData} from "react-router";

const styles = {
    containerLoader: css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 50px;
      margin-top: 1rem;
    `,
}

export const MisPeliculas = () => {

    const data = useLoaderData();

    return data ? (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.3rem',
            width: 'auto',
            // border: '1px solid red'
        }}>
            <Box
                sx={{
                    // border: '1px solid blue',
                    width: '100%',
                    marginTop: '1rem',
                }}
            >
                Mis Peliculas
            </Box>
            <GridV2Mui array={data.data.reviews} />
        </Box>
    ) : (
        <Loader />
    );
}

const Loader = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            // paddingTop: '2rem',
            width: 'auto',
        }}>
            Cargando datos...
            <div css={styles.containerLoader}>
                <LoaderBar />
            </div>
        </Box>
    );
}