import { Box } from '@mui/system';
import { Comment } from '../comment/Comment';

export const Review = ({user}) =>{
    return(
         <Box sx={{
            my:"20px",
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
         }}>
            
            <Box sx={{ color: '#317590', fontSize:'24px' }}>{user}</Box>
           <Comment /> 
        </Box>
    );
}
