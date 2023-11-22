import {
    MOVIES_NOW_PLAYING,
    MOVIES_POPULAR,
    MOVIES_TOP_RATED,
    MOVIES_UPCOMING
} from "../../../shared/utils/router/paths.js";
import {css} from "@emotion/react";
import {CalendarMonth, Movie, StarRate, Whatshot} from "@mui/icons-material";
import {IconButton, Tooltip} from "@mui/material";
import {Link, NavLink} from "react-router-dom";

const styles = {
    container: css`
      display: flex;
      margin: .6rem 0;

      @media screen and (min-width: 1024px) {
        gap: 2rem;
      }
    `
}

export const MoviesSection = () => {
    return (
        <div css={styles.container}>
            {
                options.map((item, i) => {
                    return (
                        <Tooltip title={item.label} key={i}>
                            <NavLink to={item.value}>
                                <IconButton >
                                    {item.icon}
                                </IconButton>
                            </NavLink>
                        </Tooltip>
                    )
                })
            }
        </div>
    )
}

const options = [
    { value: MOVIES_POPULAR, label: 'Populares', icon: <Whatshot color={"warning"} /> },//icon: <span>🔥</span> },
    { value: MOVIES_TOP_RATED, label: 'Más valorados', icon: <StarRate color={"success"} /> },//icon: <span>⭐</span> },
    { value: MOVIES_NOW_PLAYING, label: 'En cartelera', icon: <Movie color={"info"} /> },//icon: <span>🎬</span> },
    { value: MOVIES_UPCOMING, label: 'Próximamente', icon: <CalendarMonth color={"error"} /> }//icon: <span>📅</span> },
];