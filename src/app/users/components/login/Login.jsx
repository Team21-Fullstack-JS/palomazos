import {
    Avatar,
    Box,
    Container,
    CssBaseline,
    Typography
} from "@mui/material";

import { LockOutlined } from '@mui/icons-material';
import { FormLogin } from "./FormLogin.jsx";

export const Login = () => {

    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{
                        mt: 2,
                        bgcolor: 'secondary.main'
                    }}>
                        <LockOutlined />
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Iniciar sesión
                    </Typography>

                    <FormLogin />
                </Box>
            </Container>
    );
}