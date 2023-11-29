import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Container, TextField,
} from "@mui/material";
import {StarGrid} from "../starGrid/StarGrid.jsx";
import {ToggleCheckButton} from "../../../shared/components/toggleCheckButton/ToggleCheckButton.jsx";
import {useAuthContext} from "../../../shared/utils/hooks/useAuthContext.js";
import {deepPurple} from "@mui/material/colors";
import Logo from '../../../shared/utils/others/logo.svg?react';

const IMG_URL_W500 = 'https://image.tmdb.org/t/p/w500';

export const Palomazo = () => {

    const { movieFull, getTokenInLocalStorage, getUserInLocalStorage } = useAuthContext();

    return (
        <Container
            disableGutters
            sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Card
                sx={{
                    width: {xs: '98%'} ,
                    maxWidth: {xs: '100%', sm: 380, md: 420, lg: 470, xl: 500, xxl: 550},
                }}
                className={'element__slideInFromLeft'}
            >
                <CardHeader
                    avatar={
                        <Box sx={{ width: '80px', height: '100%'}}>
                            <Logo fill={deepPurple[500]} width={'100%'} height={'100%'}/>
                        </Box>
                    }

                    title={`¿Te ha gustado?`}
                    subheader={`¡Dale una puntuación!`}
                />
                <CardMedia
                    component="img"
                    image={`${IMG_URL_W500}${movieFull.backdrop_path}`}
                    alt="Paella dish"
                    sx={{ height: {xs: 100} }}
                />
                <CardContent>
                    <TextField
                        label="Comentario"
                        multiline
                        rows={3}
                        variant="filled"
                        fullWidth
                    />
                </CardContent>
                <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between'}}>
                    <StarGrid
                        isDisabled={false}
                        rate={0}
                    />
                    <ToggleCheckButton
                        isCheck={false}
                        idReview={null}
                        isDisabled={false}
                    />
                </CardActions>
            </Card>
        </Container>
    )
}