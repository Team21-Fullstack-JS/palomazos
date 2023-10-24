import { Login, HowToReg, Settings, LiveTv, AdminPanelSettings } from "@mui/icons-material";

export const arrayMenuUser = {
    userGuest: [
        {
            name: 'Ingresar',
            icon: <Login fontSize="medium" />
        },
        {
            name: 'Registro',
            icon: <HowToReg fontSize="medium" />
        },
    ],
    userRegisteredNoAdmin: [
        {
            name: 'Mi cuenta',
            icon: <Settings fontSize="medium" />
        },
        {
            name: 'Mis películas',
            icon: <LiveTv fontSize="medium" />
        }
    ],
    userRegisteredAdmin: [
        {
            name: 'Administracion',
            icon: <AdminPanelSettings fontSize="medium" />
        }
    ],
}