import { arrayMenu } from './arrayMenu.jsx'
import {Box, Typography} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import { linkOption } from '../../../utils/router/paths.js'
import {css} from "@emotion/react";

import { useAuthContext } from '../../../utils/hooks/useAuthContext.js';

const styles = {
    active: css`
      text-underline: 2px solid var(--link-color);
      color: red;
    `,
}

export const NavMenu = () => {

    const { setSelectedUserOption, setSelectedGeneralOption } = useAuthContext();

    return <Box sx={{ display: 'flex', alignItems: 'left', textAlign: 'center', width: '100%' }}>
            {
                arrayMenu.map( (item, i) => {
                    return (
                        <Typography key={i} sx={{ minWidth: 100, lineHeight: '80px', color: 'white' }}>
                            <NavLink
                                onClick={() => {
                                    setSelectedUserOption(null)
                                    setSelectedGeneralOption(i)
                                }}
                                onChange={() => setSelectedGeneralOption(i)}
                                to={ `${linkOption(`${item.name}`)}` }
                                style={({ isActive, isTransitioning }) => {
                                    return {
                                        fontWeight: isActive ? "600" : "400",
                                        color: isActive ? "#F2B851" : "white",
                                        viewTransitionName: isTransitioning ? "slide" : "",
                                        // textDecoration: isActive ? 'underline' : 'none',
                                        // textDecorationColor: isActive ? '#E04F5F' : 'none',
                                    };
                                }}
                            >
                                { item.name }
                            </NavLink>
                        </Typography>
                    )
                })
            }
    </Box>
}