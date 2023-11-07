import {Avatar, Box, Container, CssBaseline, Typography} from "@mui/material";
import {LockOutlined} from "@mui/icons-material";
import {TransitionMessage} from "../../../shared/components/transitionMessage/TransitionMessage.jsx";
import {useState} from "react";
import {FormSignup} from "./FormSignup.jsx";

export const SignUp = () => {
    const [openTransitionMessage, setOpenTransitionMessage] = useState(false);
    const [messageTransitionMessage, setMessageTransitionMessage] = useState('');
    const [severityTransitionMessage, setSeverityTransitionMessage] = useState('success');

    return (
        <Container component="section" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{
                    mt: 2,
                    bgcolor: 'primary.main'
                }}>
                    <LockOutlined />
                </Avatar>

                <Typography component="h1" variant="h5">
                    Crear cuenta
                </Typography>

                <TransitionMessage
                    message={messageTransitionMessage}
                    open={openTransitionMessage}
                    setOpen={setOpenTransitionMessage}
                    severity={severityTransitionMessage} // error, warning, info, success
                />

                <FormSignup
                    setOpenTransitionMessage={setOpenTransitionMessage}
                    setMessageTransitionMessage={setMessageTransitionMessage}
                    setSeverityTransitionMessage={setSeverityTransitionMessage}
                />
            </Box>
        </Container>
    );
}