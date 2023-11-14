import { Box } from '@mui/system';
import {Review} from '../review/Review.jsx';

export const MovieCard = ({title, year, overview, image, rating}) =>{
    return(
        <Box component="section">
            <Box component="section" sx={{ 
                gap:3, 
                display:'grid', 
                gridTemplateColumns:'repeat(2, 1fr)', 
                bgcolor:"#2d3748",
                my:10,
                borderRadius:2,
                
            }}>
                <Box component="section" sx={{  color: 'white', p:5, borderRadius:2 }}>
                    <img src={image} width="350" alt="Movie_Image"/>
                </Box>
                <Box component="section" sx={{  color:"white", p:5  }}>
                    <h2>{rating}</h2>
                    <h2>{title}</h2>
                    <h3>{year}</h3>
                    <p>{overview}</p>
                </Box>
            </Box>
            <Review />
        </Box>
    );
}
