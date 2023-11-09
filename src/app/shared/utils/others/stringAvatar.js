import { stringToColor } from './stringToColor.js'

export function stringAvatar({nombre, sx}) {
    return {
        sx: {
            ...sx,
            bgcolor: stringToColor(nombre),
        },
        children: `${nombre.split(' ')[0][0].toUpperCase()}`, //${nombre.split(' ')[1][0]}
    };
}

//https://mui.com/material-ui/react-avatar/