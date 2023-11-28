import {Box, Divider, Typography} from "@mui/material";
import {css} from "@emotion/react";

const IMG_URL_W500 = 'https://image.tmdb.org/t/p/w500';
const IMG_URL_MULTIFACES = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/';

const styles = {
    container: css`
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 5px;
    `,
}

export const MovieData = ({ movie } ) => {

    const { backdrop_path, poster_path, overview, title, release_date, original_title } = movie;
    return (
        <Box
            sx={{
                display: {xs: 'flex'},
                flexDirection: {xs: 'column', lg: 'row'},
                justifyContent: {xs: 'flex-end', lg: 'center'},
                // alignItems: {lg: 'center'},
                width: '100%',
                height: {
                    xs: 390, //phones 300
                    sm: 400, //tablets 600
                    md: 420, //small laptop 900
                    lg: 440, //desktop 1024
                    xl: 550, //large screens 1536
                    // xxl: 560 //large desktop 1600
                },
                backgroundImage: `url(${IMG_URL_MULTIFACES+backdrop_path})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Box
                sx={{
                    display: {xs: "none", lg: 'flex'},
                    width: {lg: '30%'},
                    height: {lg: 'auto'},
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        width: {lg: '70%'},
                        height: {lg: '90%'},
                        backgroundImage: `url(${IMG_URL_W500+poster_path})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    css={styles.container}
                    className={'element__slideInFromLeft'}
                >
                </Box>
            </Box>
            <Box
                sx={{
                    backgroundColor: 'rgba(0,0,0,.6)',
                    color: 'white',
                    p: 1,
                    width: {lg: '70%'},
                    display: {lg: 'flex'},
                    flexDirection: {lg: 'column'},
                    height: {lg: '60%'},
                    position: {lg: 'relative'},
                    top: {lg: '50%'},
                    transform: {lg: 'translateY(-50%)'},
                    borderRadius: {lg: '5px'},
                    backdropFilter: {lg: 'blur(3px)'},
                    overflow: {lg: 'hidden'},
                    overflowY: {lg: 'scroll'},
                    marginRight: {lg: '1rem'},
                }}
                className={'element__slideInFromRight'}
            >
                <Typography
                    fontWeight='500'
                    sx={{ fontSize: {xs: "1rem", sm: '1.5rem', md: '2rem'} }}
                >
                    {title}
                </Typography>

                <Box sx={{ display: "flex", alignItems: 'center' }}>
                    <Typography
                        sx={{ fontSize: {xs: ".6rem", sm: '.8rem', md: '1rem'} }}
                    >
                        {release_date ? new Date(release_date).getFullYear() : 'Sin fecha'}
                    </Typography>
                    &nbsp;&nbsp;&nbsp;
                    <Typography
                        sx={{ fontSize: {xs: ".6rem", sm: '.8rem', md: '1rem'} }}
                    >
                        {original_title}
                    </Typography>
                </Box>

                <Divider sx={{ my: 1 }} />

                <Typography
                    variant="caption"
                    sx={{ fontSize: {xs: ".7rem", sm: '1rem', md: '1.1rem'} }}
                >
                    {overview}
                </Typography>
            </Box>
        </Box>
    )
}