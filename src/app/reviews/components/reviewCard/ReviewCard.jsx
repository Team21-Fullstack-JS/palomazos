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
import {ToggleCheckButton} from "../../../shared/components/toggleCheckButton/ToggleCheckButton.jsx";
import {useAuthContext} from "../../../shared/utils/hooks/useAuthContext.js";
import {StarGrid} from "../starGrid/StarGrid.jsx";

export const ReviewCard = ({ review }) => {
    const [message] = useState("No hay comentarios para esta review");

    const { id: reviewId, movie_id, rate, isCheck, updatedAt, user, comment } = review;
    console.log(review);

    const { id: userId, firstName, lastName } = user;

    const { content } = comment;

    const { getUserInLocalStorage } = useAuthContext();

    const userInLocalStorage = getUserInLocalStorage();

    const userInLocalStorageParse = userInLocalStorage ? JSON.parse(userInLocalStorage) : false;
    const isUserReview = userInLocalStorageParse && userInLocalStorageParse.id === userId;

    return (
        <Box>
            <Card sx={{ maxWidth: 345 }}>
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
                    <ToggleCheckButton
                        isCheck={isCheck}
                        idReview={reviewId}
                        isDisabled={!isUserReview}
                    />
                </CardActions>
            </Card>
        </Box>
    )
}