import {Box, Container, CssBaseline, Typography} from "@mui/material";
import {LoaderBar} from "../../../shared/components/loader/LoaderBar.jsx";
import {css} from "@emotion/react";
import {useLoaderData} from "react-router";
import { useAuthContext } from '../../../shared/utils/hooks/useAuthContext.js';

const styles = {
    container: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;
    `,
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
        <Container component="main" maxWidth="xs">
            <CssBaseline />
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
        </Container>
    ) : (
        <Container component="main" maxWidth="xs" css={styles.container} >
            <p css={styles.message}>
                Cargando datos del usuario...
            </p>
            <div css={styles.containerLoader}>
                <LoaderBar />
            </div>
        </Container>
    )
}