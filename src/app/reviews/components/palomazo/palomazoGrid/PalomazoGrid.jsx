import {StarGrid} from "../../starGrid/StarGrid.jsx";
import {Box} from "@mui/material";
import Logo from "../../../../shared/utils/others/logo.svg?react";
import {grey} from "@mui/material/colors";
import {useEffect} from "react";

export const PalomazoGrid = ({ userCheck, setUserCheck, userRate, setUserRate }) => {

    const handleClick = () => {
        setUserCheck(!userCheck);
    }

    useEffect(() => {
    }, [userCheck, userRate]);

    return (
        <>
            <StarGrid
                isDisabled={false}
                rate={userRate}
                setUserRate={setUserRate}
            />
            <Box sx={{
                width: '50px',
                height: '100%',
                cursor: 'pointer',
                borderRadius: '50%',
            }}>
                <Logo
                    fill={!userCheck ? grey[500] : '#FFBF00'}
                    width={'100%'}
                    height={'100%'}
                    onClick={handleClick}
                />
            </Box>
        </>
    )
}