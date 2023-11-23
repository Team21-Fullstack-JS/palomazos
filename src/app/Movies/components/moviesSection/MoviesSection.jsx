import {
    MOVIES_NOW_PLAYING,
    MOVIES_POPULAR,
    MOVIES_TOP_RATED,
    MOVIES_UPCOMING
} from "../../../shared/utils/router/paths.js";
import {css} from "@emotion/react";
import {CalendarMonth, Movie, StarRate, Whatshot} from "@mui/icons-material";
import {IconButton, Tooltip, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const styles = {
    container: css`
      display: flex;
      gap: .6rem;
      width: 50%;
      //border: 1px solid blue;

      @media screen and (min-width: 600px) {
        gap: 1.8rem;
      }
      
      @media screen and (min-width: 1024px) {
        width: 70%;
        gap: 2rem;
      }
    `,
    containerIcon: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    label: css`
        display: none;
      
        @media screen and (min-width: 1024px) {
          display: block;
          margin-right: .5rem;
          
            &:hover {
                color: var(--link-color);
            }
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
                                    <div css={styles.containerIcon}>
                                        <IconButton
                                            size={"large"}
                                            sx={{ paddingRight: {xs: '0', md: '.4rem'}, padding: {xs: '0'} }}
                                        >
                                            {item.icon}
                                        </IconButton>
                                        <Typography css={styles.label} variant={"subtitle2"}>{item.label}</Typography>
                                    </div>
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