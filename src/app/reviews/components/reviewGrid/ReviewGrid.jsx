import {Box, Typography} from "@mui/material";
import {useAuthContext} from "../../../shared/utils/hooks/useAuthContext.js";
import {useCallback, useEffect, useState} from "react";
import {GetMoviesWithReviews} from "../../../shared/utils/router/loaders/GetMoviesWithReviews.js";
import {Loader} from "../../../users/components/loader/Loader.jsx";
import {css} from "@emotion/react";
import {ReviewCard} from "../reviewCard/ReviewCard.jsx";
import Grid2 from "@mui/material/Unstable_Grid2";

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

    if (notReviewMsg) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                <Typography>{notReviewMsg}</Typography>
            </Box>
        )
    }

    return reviews.length > 0 ?
    (
        <Grid2
            container
            spacing={{ xs: 2, md: 3 }}
            sx={{
                width: 'auto',
                height: 'auto',
                marginTop: '0.1rem',
            }}
        >
            {
                reviews.map( (review) => {
                    return (
                        <Grid2
                            xs={12}
                            sm={6}
                            md={4}
                            key={review.id}
                        >
                            <ReviewCard review={review} />
                        </Grid2>
                    )
                })
            }
        </Grid2>
    ) : (
        <Box css={styles.containerLoader}>
            <Loader message={"Cargando reviews..."} />
        </Box>
    );
}