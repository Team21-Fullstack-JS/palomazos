import {StarGrid} from "../../starGrid/StarGrid.jsx";
import {Box} from "@mui/material";
import {useEffect} from "react";
import {ToggleCheckLogo} from "../../../../shared/components/toggleCheckButton/ToggleCheckLogo.jsx";

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
                <ToggleCheckLogo userCheck={userCheck} handleClick={handleClick} isDisabled={false} />
            </Box>
        </>
    )
}