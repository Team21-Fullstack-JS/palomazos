import {useCallback, useState} from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { linkOption } from "../../../shared/utils/router/paths.js";
import { userLoginSchema } from "../../validation/UserSchemas.jsx";
import { requestApi } from '../../../shared/requests/httpClient.js';
import { useAuthContext } from '../../../shared/utils/hooks/useAuthContext.js';

const styles = {
    link: css`
        color: var(--link-color);
      cursor: pointer;
    `
}

export const FormLogin = (props) => {

    const [disabledButton, setDisabledButton] = useState(false);

    const { setOpenTransitionMessage, setMessageTransitionMessage, setSeverityTransitionMessage } = props;

    const { setAuthInLocalStorage, login } = useAuthContext();

    const requestLogin = useCallback(async (body) => {
        const response = await requestApi('/users/auth', 'POST', body);
        const data = await response.json();

        if (!data.error) {
            setSeverityTransitionMessage('success');
            setMessageTransitionMessage('Login exitoso. Redireccionando...');

            setTimeout(() => {
                setAuthInLocalStorage(data.data);
                login();
            }, 1600);

        } else {
            setSeverityTransitionMessage('error');
            setMessageTransitionMessage(data.message);
            setDisabledButton(false);
        }

        setOpenTransitionMessage(true);

    }, [setAuthInLocalStorage, login, setOpenTransitionMessage, setMessageTransitionMessage, setSeverityTransitionMessage]);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: userLoginSchema,
        onSubmit: (values) => {
            setDisabledButton(true);
            requestLogin(values);
        },
    });

    return (
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 2 }}>
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
            <Button
                type="submit"
                disabled={disabledButton}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Iniciar sesión
            </Button>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Typography component="p" variant="body2">
                        No tienes una cuenta?
                        <Link to={ `${linkOption(`Registro`)}` } style={{ fontWeight: 400}} >
                            <span css={ styles.link }> Registrate </span>
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}