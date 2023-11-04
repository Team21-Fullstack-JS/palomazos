import { Box } from "@mui/material";
import { getMovies } from "../../../requests/httpClientMoviesDB.js";

export const LandingPage = () => {

    getMovies(import.meta.env.VITE_API_MOVIES_DB_POPULAR, 'es-US', 1).then(data => console.log(data));

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '1.5rem',
            paddingTop: '2rem'
        }}>
            This is the Landing page section!
        </Box>
    );
}