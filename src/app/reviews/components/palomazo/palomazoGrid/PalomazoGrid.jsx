import {StarGrid} from "../../starGrid/StarGrid.jsx";
import {Box} from "@mui/material";
import Logo from "../../../../shared/utils/others/logo.svg?react";
import {deepOrange, grey} from "@mui/material/colors";
import { useState } from "react";

export const PalomazoGrid = ({ review }) => {

    const [userRate] = useState(review.length > 0 ? review[0].rate : 0);
    const [userCheck] = useState(review.length > 0 ? review[0].isCheck : false);

    return (
        <>
            <StarGrid
                isDisabled={false}
                rate={userRate}
            />
            <Box sx={{ width: '50px', height: '100%'}}>
                <Logo
                    fill={!userCheck ? grey[500] : deepOrange[500]}
                    width={'100%'}
                    height={'100%'}
                />
            </Box>
        </>
    )
}