import {
    Avatar,
    Box,
    Button,
    // Checkbox,
    Container,
    CssBaseline,
    // FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography
} from "@mui/material";

import { LockOutlined } from '@mui/icons-material';
import { useFormik } from 'formik';

import { userLoginSchema } from './UserSchemas.jsx';

export const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: userLoginSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        // <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Iniciar sesión
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Correo electrónico"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        {/*<FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />*/}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 4, mb: 3 }}
                        >
                            Login
                        </Button>
                        <Grid container>
                            {/*<Grid item xs>
                                <Link href="#" variant="body2">
                                    Cambiar su password?
                                </Link>
                            </Grid>*/}
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"No tienes una cuenta?  Registrate"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {/*<Copyright sx={{ mt: 8, mb: 4 }} />*/}
            </Container>
        // </ThemeProvider>
    );
}