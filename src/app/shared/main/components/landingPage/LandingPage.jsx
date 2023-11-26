import {Box, Typography, Button} from "@mui/material";



export const LandingPage = () => {

    const handleClick = () => alert("clicked");

    return (
      <div
      style={{
        backgroundImage: `url('../../../../../../../palomazos/assets/fondoo-collage.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '1.5rem',
            paddingTop: '6rem',
            color: 'white'
        }}>
            <Typography
            variant="h5"
            > 
              ¡BIENVENIDOS A PALOMAZOS!
            </Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            textAlign: 'center',
            fontSize: '1rem',

            padding: '4rem 6rem',
            color: 'white'
        }}>
            <Typography>
              Palomazos es un sitio donde los usuarios podrán compartir sus reseñas, comentar opiniones y compartir su gusto por las películas tanto clásicas como actuales. Permitiendo generar una comunidad cinéfila que permita a todos descubrir nuevas obras del septimo arte.
            </Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '2rem'
        }}>
        <Button 
            onClick={handleClick}     
            variant="contained" 
            color="primary"
            >
                Comenzar
            </Button>
        </Box>
      </div>
    )    
}

