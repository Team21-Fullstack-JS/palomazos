import Icon from '../../../utils/others/logo.svg?react';
import {Box} from "@mui/material";
import {NavLink} from "react-router-dom";
import {BASE} from "../../../utils/router/paths.js";
import {css} from "@emotion/react";

const styles = {
    container: css`
      height: calc( var(--height-header));
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    logo: css`
      fill: #fff;
      height: 100%;
        width: 100%;
    `
}

export const Logo = () => {
    return (
        <NavLink to={BASE}>
            <Box css={styles.container}>
                <Icon css={styles.logo}/>
            </Box>
        </NavLink>
    )
}