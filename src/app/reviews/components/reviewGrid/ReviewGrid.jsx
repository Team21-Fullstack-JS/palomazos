import {Box, Typography} from "@mui/material";
import {useAuthContext} from "../../../shared/utils/hooks/useAuthContext.js";
import {useCallback, useEffect, useState} from "react";
import {GetMoviesWithReviews} from "../../../shared/utils/router/loaders/GetMoviesWithReviews.js";
import {Loader} from "../../../users/components/loader/Loader.jsx";
import {css} from "@emotion/react";
import {ReviewCard} from "../reviewCard/ReviewCard.jsx";

const styles = {
    containerLoader: css`
        margin-top: .1rem;
    `,
}

export const ReviewGrid = () => {

    const [notReviewMsg, setNotReviewMsg] = useState(null);
    const [reviews, setReviews] = useState([]);

    const { movieFull } = useAuthContext();
    const { id } = movieFull;

    const fetchMoviesWithReviews = useCallback( () => {
        return GetMoviesWithReviews();
    }, [])

    useEffect(() => {
        if (id) {
            fetchMoviesWithReviews()
            .then( (res) => {
                if (!res.error) {
                    const { data } = res;
                    const reviewsArray = data.filter( (movie) => movie.id === id);

                    if (reviewsArray.length <= 0) {
                        setNotReviewMsg("No existen reviews para esta película");
                    } else {
                        setReviews(reviewsArray[0].reviews);
                    }
                }
            })
            .catch( (error) => {
                console.log(error);
            })
        }
    }, [id, fetchMoviesWithReviews])

    return notReviewMsg ?
    (
        <Box>
            <Typography>{notReviewMsg}</Typography>
        </Box>
    ) : reviews.length > 0 ?
    (
        <Box>
            {
                reviews.map( (review) => {
                    return (
                        <Box key={review.id}>
                            <ReviewCard review={review} />
                        </Box>
                    )
                })
            }
        </Box>
    ) : (
        <Box css={styles.containerLoader}>
            <Loader message={"Cargando reviews..."} />
        </Box>
    );
}