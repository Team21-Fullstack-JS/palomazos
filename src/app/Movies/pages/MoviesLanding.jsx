import {Box} from "@mui/material";
import {MoviesSection} from "../components/moviesSection/MoviesSection.jsx";
import {SearchMovie} from "../components/searchTool/SearchMovie.jsx";
import {css} from "@emotion/react";
import {Outlet} from "react-router";

const styles = {
    container: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      //border: 1px solid red;
      width: 100%;
      margin-top: .6rem;
    `,
}

export const MoviesLanding = () => {
    return (
        <Box>
            <div css={styles.container}>
                <MoviesSection />
                <SearchMovie />
            </div>
            <div>
                <Outlet />
            </div>
        </Box>
    )
}