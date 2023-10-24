import { arrayMenu } from './arrayMenu.jsx'
import {Box, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import { linkOption } from '../../../utils/router/paths.js'
export const NavMenu = () => {
    return <Box sx={{ display: 'flex', alignItems: 'left', textAlign: 'center', width: '100%' }}>
            {
                arrayMenu.map( (item, i) => {
                    return (
                        <Typography key={i} sx={{ minWidth: 100, lineHeight: '80px', color: 'white' }}>

                            <Link to={ `${linkOption(`${item.name}`)}` } style={{ fontWeight: 400}} >
                                { item.name }
                            </Link>
                        </Typography>
                    )
                })
            }
    </Box>
}