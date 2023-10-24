import {Box, Container, CssBaseline, Typography} from "@mui/material";

export const SignUp = () => {
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
                        Crear cuenta
                    </Typography>
                </Box>
            </Container>
    );
}