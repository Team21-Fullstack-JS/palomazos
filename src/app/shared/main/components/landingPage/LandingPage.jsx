import { Box } from "@mui/material";


export const LandingPage = ({bgImage}) => {

    return (
        <>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '1.5rem',
            paddingTop: '2rem'
        }}>
        
            BIENVENIDOS A PALOMAZOS
        </Box>
        <Box sx={{
            display: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            paddingTop: '2rem',
            width: '65rem',
        }}>
            Palomazos es un sitio donde los usuarios podrán compartir sus reseñas, comentar opiniones y compartir su gusto por las películas tanto clásicas como actuales. Permitiendo generar una comunidad cinéfila que permita a todos descubrir nuevas obras del septimo arte.
        </Box>
        </>
    )
    
}

