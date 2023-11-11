import {useState} from "react";

import {Avatar, Box, Container, CssBaseline, Typography} from "@mui/material";
import {Email} from "@mui/icons-material";
import {TransitionMessage} from "../../../components/transitionMessage/TransitionMessage.jsx";
import {FormContact} from "./FormContact.jsx";

export const Contact = () => {

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
                className={'element__slideInFromLeft'}
            >
                <Avatar sx={{
                    mt: 3,
                    mb: 1,
                    bgcolor: 'primary.main',
                }}>
                    <Email />
                </Avatar>

                <Typography component="h1" variant="h5">
                    Escríbenos
                </Typography>

                <TransitionMessage
                    message={messageTransitionMessage}
                    open={openTransitionMessage}
                    setOpen={setOpenTransitionMessage}
                    severity={severityTransitionMessage} // error, warning, info, success
                />

                <FormContact
                    setOpenTransitionMessage={setOpenTransitionMessage}
                    setMessageTransitionMessage={setMessageTransitionMessage}
                    setSeverityTransitionMessage={setSeverityTransitionMessage}
                />
            </Box>
        </Container>
    );
}