import {Box, Container} from "@mui/material";
import {MoviesSection} from "../components/moviesSection/MoviesSection.jsx";
import {SearchMovie} from "../components/searchTool/SearchMovie.jsx";
import {css} from "@emotion/react";
import {Outlet} from "react-router";

const styles = {
    container: css`
      display: flex;
      //justify-content: space-between;
      align-items: center;
      //width: 100%;
      margin-top: .6rem;
    `,
}

export const MoviesLanding = () => {
    return (
        <Box>
            <Container
                disableGutters
                component="div"
                maxWidth="100%"
                sx={{
                    display: {sm: 'flex'},
                    justifyContent: {sm: 'center'},
                }}
            >
                <Box
                    css={styles.container}
                    maxWidth="lg"
                    sx={{
                        width: { xs: 'auto', sm: '600px', md: '900px', lg: '1024px', xl: '1536px', xxl: '1600px' },
                    }}
                >
                    <MoviesSection />
                    <SearchMovie />
                </Box>
            </Container>
            <div>
                <Outlet />
            </div>
        </Box>
    )
}