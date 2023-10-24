import {Box, Container, CssBaseline, Typography} from "@mui/material";

export const MiCuenta = () => {
    return (
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
                    Seccion de mi cuenta user
                </Typography>
            </Box>
        </Container>
    );
}