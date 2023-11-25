import {css} from "@emotion/react";
import {useAuthContext} from "../../shared/utils/hooks/useAuthContext.js";
import {MovieData} from "../components/backgroundImage/MovieData.jsx";
import {Box, Typography} from "@mui/material";
import {ReviewLanding} from "../../reviews/components/reviewLanding/ReviewLanding.jsx";

const styles = {
    container: css`
      width: 100%;
    `,
};

export const MovieCardFull = () => {

    const { movieFull } = useAuthContext();

    return (
        <Box css={styles.container}>
            <MovieData movie={movieFull}/>
            <Box>
                <ReviewLanding />
            </Box>
        </Box>
    )
}