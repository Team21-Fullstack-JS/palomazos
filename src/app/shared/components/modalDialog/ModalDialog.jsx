import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {Box, Container} from "@mui/material";
import { TailSpin } from "svg-loaders-react";
import {LoaderBar} from "../loader/LoaderBar.jsx";
import {css} from "@emotion/react";

/**Funcion que muestra una ventana de Dialogo Modal */
export function ModalDialog(props) {

    const {
        onClose,
        open,
        titulo,
        display,
        botones,
        isSpinner
    } = props;

    const handleClose = () => {
        onClose();
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open} >
            <DialogTitle>{titulo}</DialogTitle>
            <List sx={{ pt: 0, display: display}}>
                {!isSpinner ? botones.map((boton, key) => (
                    <ListItem button onClick={() => handleListItemClick(boton.nombre)} key={key}>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: boton.color[100], color: boton.color[600] }}>
                                {boton.icon}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={boton.nombre} />
                    </ListItem>))
                    :
                    <Container component="main" maxWidth="xs" css={styles.container} >
                        <div css={styles.containerLoader}>
                            <LoaderBar />
                        </div>
                    </Container>
                }
            </List>
        </Dialog>
    );
}

const styles = {
    container: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: .5rem;
    `,
    containerLoader: css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 45px;
      width: 45px;
    `,
}