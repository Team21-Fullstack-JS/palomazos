import {Box, Typography, Button} from "@mui/material";
import {NavLink} from "react-router-dom";
import {SIGNUP, USUARIOS} from "../../../utils/router/paths.js";



export const LandingPage = () => {

    return (
      <Box
          sx={{
              backgroundImage: `url('../../../../../../../palomazos/assets/fondoo-collage.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              width: '100%',
              height: 'calc(100vh - 80px)',
          }}
    >
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.5rem',
                color: 'white',
            }}
        >
            <Typography
            variant="h4"
            textAlign="center"
            sx={{
                fontSize: {xs: '1.5rem', sm: '2.3rem', md: '2.5rem'},
                fontWeight: 'bold',
            }}
            > 
              Comenta tus películas favoritas
            </Typography>
        </Box>
        <Box
            maxWidth="90%"
            sx={{
                display: 'flex',
                textAlign: 'center',
                color: 'white'
            }}
        >
            <Typography
                sx={{
                    fontSize: {xs: '1rem', sm: '1.2rem', md: '1.5rem'},
                }}
            >
              ¿Eres una persona amante del séptimo arte? Palomazos es el lugar donde podrás realizar tus reseñas y compartir tu gusto por las películas.
            </Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <NavLink to={USUARIOS + '/' + SIGNUP}>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        fontSize: {xs: '.8rem', sm: '1rem', md: '1.2rem'},
                    }}
                >
                    Comenzar
                </Button>
            </NavLink>

        </Box>
      </Box>
    )    
}

