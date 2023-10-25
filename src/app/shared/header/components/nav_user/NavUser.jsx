import { useState } from "react";
import { Icon } from "./Icon.jsx";
import { MenuUser } from "./MenuUser.jsx";
import { ModalDialog } from "../../../components/modalDialog/ModalDialog.jsx";
import { blue } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { Done, Clear } from '@mui/icons-material';

import { useAuthContext } from '../../../../shared/utils/hooks/useAuthContext.js';

const arrayBotones = [
    {nombre: 'Si', color: blue, icon: <Done />},
    {nombre: 'No', color: red, icon: <Clear />}
];

export const NavUser = () => {

    const { logout } = useAuthContext();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //ModalDialog is used to show a modal window
    const [openModal, setOpenModal] = useState(false);
    const [isSpinner, setIsSpinner] = useState(false);
    const handleCloseModal = (value) => {
        if (value === "Si") {
            setIsSpinner(true);
            setTimeout(()=>{
                logout();
                setOpenModal(false);
                setIsSpinner(false);
            },1300);
        } else
            setOpenModal(false);
    }

    return <>
        <Icon handleClick={ handleClick } />

        <MenuUser anchorEl={anchorEl} open={open} handleClose={handleClose} setOpenModal={setOpenModal} />

        <ModalDialog
            open={openModal}
            onClose={handleCloseModal}
            botones={arrayBotones}
            titulo={!isSpinner ? '¿Desea cerrar la sesión?' : 'Cerrando la sesión...'}
            display='flex'
            isSpinner={isSpinner}
        />

    </>
}