import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { linkOption, USUARIOS } from "../../../shared/utils/router/paths.js";
import { userSignupSchema } from "../../validation/UserSchemas.jsx";
import { requestApi } from '../../../shared/requests/httpClient.js';

const styles = {
    link: css`
        color: var(--link-color);
      cursor: pointer;
    `
}

export const FormSignup = (props) => {

    const [disabledButton, setDisabledButton] = useState(false);

    let navigate = useNavigate();

    const { setOpenTransitionMessage, setMessageTransitionMessage, setSeverityTransitionMessage } = props;

    const requestSignup = useCallback(async (body) => {

        const response = await requestApi('/users', 'POST', body);

        const data = await response.json();

        if (!data.error) {
            setSeverityTransitionMessage('success');
            setMessageTransitionMessage(`${data.message}. Redireccionando a inicio de sesión...`);

            setTimeout(() => {
                navigate(`${USUARIOS}`, { replace: true });
            }, 1500);

        } else {
            setSeverityTransitionMessage('error');
            setMessageTransitionMessage(data.message);
            setDisabledButton(false);
        }

        setOpenTransitionMessage(true);

    }, [setOpenTransitionMessage, setMessageTransitionMessage, setSeverityTransitionMessage]);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: userSignupSchema,
        onSubmit: (values) => {
            console.log("VALUES: ", values);
            setDisabledButton(true);
            requestSignup(values);
        },
    });

    return (
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="firstName"
                        label="Nombre"
                        name="firstName"
                        autoComplete="firstName"
                        autoFocus
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="lastName"
                        label="Apellido"
                        name="lastName"
                        autoComplete="lastName"
                        autoFocus
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Password"
                        type="password"
                        id="confirmPassword"
                        autoComplete="confirm-password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                disabled={disabledButton}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Crear usuario
            </Button>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Typography component="p" variant="body2">
                        Ya tienes una cuenta?
                        <Link to={ `${linkOption(`Ingresar`)}` } style={{ fontWeight: 400}} >
                            <span css={ styles.link }> Inicia sesión </span>
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}