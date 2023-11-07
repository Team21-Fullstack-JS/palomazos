import {Box, Container} from "@mui/material";
import { GridV2Mui } from "./gridV2/GridV2Mui.jsx";
import {LoaderBar} from "../../../shared/components/loader/LoaderBar.jsx";
import {css} from "@emotion/react";
import {useLoaderData} from "react-router";

import bgImage from '/assets/movie-director.jpg'

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
            <Container
                component='figure'
                sx={{
                    // border: {xs: '1px solid green', sm: '1px solid red', md: '1px solid blue'},
                    margin: {xs: '-1rem 0'},
                    marginLeft: {xs: '-2rem', sm: '-3rem', md: '0'},
                    height: {xs: '90px', sm: '150px', md: '200px'},
                    width: {xs: 'calc(100% + 4rem)', sm: 'calc(100% + 5.5rem)', md: 'auto'},
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
            </Container>
            <Box
                sx={{
                    // border: '1px solid blue',
                    width: '100%',
                    marginTop: '2rem',
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