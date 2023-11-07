import {Box, IconButton, ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import {ArrowForward} from "@mui/icons-material";
import {Link} from "react-router-dom";
import { MOVIES } from "../../../shared/utils/router/paths.js";
import {Loader} from "../loader/Loader.jsx";
import {css} from "@emotion/react";

const styles = {
    textSection: css`
      font-size: 1.2rem;
    `,
    linkText: css`
        font-size: .9rem;
    `
}

export const ListMovies = ({ title, array }) => {

    return array ? (
        <Box  >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
            }}
            >
                <p css={styles.textSection}>{ title }</p>
                <Link to={MOVIES}>
                    <IconButton color={"primary"} size={"small"}>
                        <p css={styles.linkText}> Ver más </p>
                        <ArrowForward sx={{fontSize: {xs: 'medium'}}} />
                    </IconButton>
                </Link>
            </Box>
            <ImageList
                sx={{ width: 'auto', height: 'auto' }}
                variant="quilted"
                cols={4}
                rowHeight={121}
            >
                {array.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.year}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    ) : (
        <Loader message="Cargando los próximos estrenos..." />
    )
};

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}