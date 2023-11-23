/**
 * Esta es una versión de Grid2 de MUI, que permite definir el número de columnas
 * y el número de filas, además de permitir definir el espaciado entre columnas y filas
 * y el espaciado entre los items.
 * @param {array} array - Array de objetos que se van a mostrar en el grid
 * @param {number} columns - Número de columnas que se van a mostrar en el grid
 * @param {number} spacing - Espaciado entre columnas y filas
 * @param {number} itemSpacing - Espaciado entre items
 *
 * */

import {Box} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { css } from "@emotion/react";
import {MovieCardReview} from "../movieCardReview/MovieCardReview.jsx";

const styles = {
    container: css`
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 5px;
    `,
    message: css`
      font-size: 1rem;
      color: var(--link-color);
      margin-top: 1rem;
    `
}

export const GridV2Mui = ( { array }) => {
    return array && array.length > 0 ? (
        <Box sx={{
            flexGrow: 1,
            // border: '1px solid blue'
        }}>
            <Grid2
                container
                spacing={{ xs: 2, md: 3 }}
                // columns={{ xs: 12, sm: 6, lg: 4 }}
                sx={{
                    // border: '1px solid green',
                    width: 'auto',
                    height: 'auto',
                    marginTop: '0.1rem'
                }}
                className={'element__slideInFromRight'}
            >
                { array.map((item) => (
                    <Grid2
                        xs={12}
                        sm={6}
                        md={4}
                        key={item.id}
                        sx={{
                            // border: '1px solid pink',
                        }}
                    >
                        <div css={styles.container}>
                            <MovieCardReview item={item} />
                        </div>
                    </Grid2>
                )) }
            </Grid2>
        </Box>
    ) :
    (
        <Box sx={{
            flexGrow: 1,
        }}>
            <p css={styles.message}>Aún no tienes películas con reseñas. </p>
        </Box>
    )
}

/**
 * xs, extra-small: 0px
 * sm, small: 600px
 * md, medium: 900px
 * lg, large: 1200px
 * xl, extra-large: 1536px
 * */