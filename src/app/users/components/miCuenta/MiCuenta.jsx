import {Box, Container, Typography} from "@mui/material";
import {LoaderBar} from "../../../shared/components/loader/LoaderBar.jsx";
import {css} from "@emotion/react";
import {useLoaderData} from "react-router";
import {BannerUsers} from "../banner/BannerUsers.jsx";
import { useAuthContext } from '../../../shared/utils/hooks/useAuthContext.js';
import bgImage from '/assets/movie-theater.jpg'

const styles = {
    containerLoader: css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 50px;
    `,
    message: css`
      line-height: 28px;
      font-size: 1.2rem;
      color: #242424;
    `,
}

export const MiCuenta = () => {

    const { setUserInLocalStorage } = useAuthContext();

    const data = useLoaderData();

    if(data && !data.error)
        setUserInLocalStorage(data.data);

    return data ? (
        <Container component="section" maxWidth="xs" >
            <div
            style={{
                bgImage:`url('../../../../../../../palomazos/assets/movie-theater.jpg')`,
                marginTop: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                
            </div>
            <BannerUsers bgImage={bgImage} />
            <Box
                sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    {data.error ? data.message : `Hola ${data.data.firstName}, Bienvenido!`}
                </Typography>
            </Box>
            <br></br>
            <Box
            sx={{
                marginTop: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Typography component="h3" variant="h5">
                    Tus datos:
                </Typography>
                <br></br>
                <Typography component="h6" variant="h5">
                    Nombre: {data.data.firstName}
                    <br></br>
                    Correo: {data.data.email}
                </Typography>  
            </Box>
        </Container>
    ) : (
        <Container component="section" maxWidth="xs" css={styles.container} >
            <p css={styles.message}>
                Cargando datos del usuario...
            </p>
            <div css={styles.containerLoader}>
                <LoaderBar />
            </div>
        </Container>
    )
}
