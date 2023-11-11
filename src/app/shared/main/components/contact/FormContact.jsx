import {useCallback, useState} from "react";
import {useFormik} from "formik";
import {Box, Button, TextField} from "@mui/material";
import * as Yup from 'yup';

export const FormContact = (props) => {

    const [disabledButton, setDisabledButton] = useState(false);

    const { setOpenTransitionMessage, setMessageTransitionMessage, setSeverityTransitionMessage } = props;

    const sendEmail = useCallback(async (body) => {
        const userEmail = body.email;
        const from = 'virtual.liga@gmail.com';
        const message = body.message;

        Email.send({
            SecureToken : import.meta.env.VITE_ELASTICEMAIL_SECURITY_TOKEN,
            To : from,
            From : from,
            Subject : `Palomazos, comentario de ${userEmail}`,
            Body : message
        })
            .then(message => {
                if(message === "OK") {
                    setSeverityTransitionMessage('success');
                    setMessageTransitionMessage('Mensaje enviado exitosamente.');
                } else {
                    setSeverityTransitionMessage('error');
                    setMessageTransitionMessage('Error al enviar el mensaje.');
                    console.log(message);
                }
            })
            .catch(err => console.log(err))
            .finally(() => {
                setDisabledButton(false);
                setOpenTransitionMessage(true);
            });

    }, [setMessageTransitionMessage, setSeverityTransitionMessage, setOpenTransitionMessage]);

    const formik = useFormik({
        initialValues: {
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
                email: Yup.string()
                    .email('Ingrese un correo electrónico válido.')
                    .required('El email es requerido'),
                message: Yup.string()
                    .min(7, 'Mas detalles son siempre de ayuda.')
                    .required('Un mensaje es requerido.')
            }),
        onSubmit: (values) => {
            setDisabledButton(true);
            sendEmail(values);
            formik.resetForm();
        },
    });

    return (
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 2 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Tu correo electrónico"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                multiline
                rows={4}
                margin="normal"
                required
                fullWidth
                name="message"
                label="Agrega un mensaje"
                type="message"
                id="message"
                autoComplete="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
            />
            <Button
                type="submit"
                disabled={disabledButton}
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 4 }}
            >
                Enviar
            </Button>
        </Box>
    );
}