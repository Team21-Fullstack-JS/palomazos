import {useState} from "react";
import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Typography
} from "@mui/material";
import { red } from '@mui/material/colors';
import {useAuthContext} from "../../../shared/utils/hooks/useAuthContext.js";
import {StarGrid} from "../starGrid/StarGrid.jsx";
import {ToggleCheckLogo} from "../../../shared/components/toggleCheckButton/ToggleCheckLogo.jsx";

export const ReviewCard = ({ review }) => {
    const [message] = useState("No hay comentarios para esta review");

    const { id: reviewId, movie_id, rate, isCheck, updatedAt, user, comment } = review;

    const { id: userId, firstName, lastName } = user;

    const { content } = comment;

    const { getUserInLocalStorage } = useAuthContext();

    const userInLocalStorage = getUserInLocalStorage();

    return (
        <Box className={'element__slideInFromRight'}>
            <Card sx={{ maxWidth: 350 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {rate}
                        </Avatar>
                    }

                    title={`${firstName} ${lastName}`}
                    subheader={new Date(updatedAt).toLocaleDateString()}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {content ? content : message}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between'}}>
                    <StarGrid
                        isDisabled={true}
                        rate={rate}
                    />
                    <Box
                        sx={{
                            width: '45px',
                            height: '100%',
                            borderRadius: '50%',
                        }}
                    >
                        <ToggleCheckLogo userCheck={isCheck} handleClick={null} isDisabled={true} />
                    </Box>
                </CardActions>
            </Card>
        </Box>
    )
}