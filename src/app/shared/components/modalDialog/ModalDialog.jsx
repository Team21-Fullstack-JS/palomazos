import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {Box} from "@mui/material";
import {Done} from "@mui/icons-material";

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
                    <Box sx={{ width: '100%', display: display, justifyContent: 'center'}}>
                        <div style={{ height: '40px', width: '40px' }}>
                            <img src='./assets/tail-spin.svg' style={{ height: '40px', width: '40px'}} />
                        </div>
                    </Box>
                }
            </List>
        </Dialog>
    );
}