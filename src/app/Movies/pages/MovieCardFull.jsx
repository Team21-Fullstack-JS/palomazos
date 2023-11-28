import {css} from "@emotion/react";
import {useAuthContext} from "../../shared/utils/hooks/useAuthContext.js";
import {MovieData} from "../components/backgroundImage/MovieData.jsx";
import {Box} from "@mui/material";
import {ReviewLanding} from "../../reviews/components/reviewLanding/ReviewLanding.jsx";

const styles = {
    container: css`
      width: 100%;
    `,
};

export const MovieCardFull = () => {
    window. scrollTo(0, 0);

    const { movieFull } = useAuthContext();

    return (
        <Box id="top"  css={styles.container}>
            <MovieData movie={movieFull}/>
            <Box>
                <ReviewLanding />
            </Box>
        </Box>
    )
}