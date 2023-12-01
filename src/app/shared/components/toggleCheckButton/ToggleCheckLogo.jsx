import {grey} from "@mui/material/colors";
import Logo from "../../utils/others/Popcorn.svg?react";
import {useEffect} from "react";
import {Box} from "@mui/material";
import {css} from "@emotion/react";

const styles = {
    container: css`
      -webkit-transition: 1s linear;
      transition: .900s linear;
      
        &:hover {
          transform: scale(.7);
        }
    `,
    disabled: css`
      pointer-events: none; /* Evita clics en el botón */
    `,
    checked: css`
      transform: scale(1.1) rotate(360deg);
    `
}

export const ToggleCheckLogo = ( { userCheck, handleClick, isDisabled } ) => {

    useEffect(() => {
    }, [userCheck]);

    return (
        <Box
            css={[
                isDisabled && styles.disabled,
                styles.container,
                userCheck && styles.checked
            ]}
        >
            <Logo
                fill={!userCheck ? grey[500] : '#FFBF00'}
                width={'100%'}
                height={'100%'}
                onClick={handleClick}
            />
        </Box>
    )
}