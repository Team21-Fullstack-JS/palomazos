import {Box, Divider, Typography} from "@mui/material";

const IMG_URL_ORIGINAL = 'https://image.tmdb.org/t/p/original';
const IMG_URL_MULTIFACES = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/';

export const MovieData = ({ movie } ) => {

    const { backdrop_path, overview, title, release_date, original_title } = movie;
    return (
        <Box
            sx={{
                width: '100%',
                height: { xs: 370, sm: 380, md: 380, lg: 410, xl: 420, xxl: 430 },
                backgroundImage: `url(${IMG_URL_MULTIFACES+backdrop_path})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            display='flex'
            flexDirection='column'
            justifyContent='flex-end'
        >
            <Box
                sx={{
                    backgroundColor: 'rgba(0,0,0,.6)',
                    color: 'white',
                    p: 1,
                }}
            >
                <Typography variant="subtitle1" >{title}</Typography>
                <Box sx={{ display: "flex" }}>
                    <Typography
                        sx={{ fontSize: {xs: ".6rem", sm: '.7rem'} }}
                    >
                        {release_date ? new Date(release_date).getFullYear() : 'Sin fecha'}
                    </Typography>
                    &nbsp;&nbsp;&nbsp;
                    <Typography
                        sx={{ fontSize: {xs: ".6rem", sm: '.7rem'} }}
                    >
                        {original_title}
                    </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Typography variant="caption">{overview}</Typography>
            </Box>
        </Box>
    )
}