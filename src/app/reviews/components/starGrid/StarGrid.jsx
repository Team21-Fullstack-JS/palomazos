import {StarRateRounded} from "@mui/icons-material";
import {Box, IconButton} from "@mui/material";
import {grey, orange} from "@mui/material/colors";
import {css} from "@emotion/react";
import {useEffect, useState} from "react";

const styles = {
    on: css`
      padding: 0;
      margin: 0;
      color: ${orange[500]};
    `,
    off: css`
      padding: 0;
      margin: 0;
      color: ${grey[500]};
    `,
    disabled: css`
    pointer-events: none; /* Evita clics en el botón */
  `,
}

export const StarGrid = ({ isDisabled, rate, setUserRate }) => {

    const [selectedStars, setSelectedStars] = useState(rate);
    const [hover, setHover] = useState(0);
    const [isDisabledStarGrid] = useState(isDisabled);

    const handleClick = (star) => {
        !isDisabled && setSelectedStars(star);
        setUserRate(star);
    }

    useEffect(() => {
        setSelectedStars(rate);
    }, [rate]);

    return (
        <Box >
            {
                stars.map( (star) => (
                    <IconButton
                        key={star}
                        css={[
                            star <= (hover || selectedStars) ? styles.on : styles.off,
                            isDisabledStarGrid && styles.disabled
                        ]}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(selectedStars)}
                        onClick={handleClick.bind(null, star)}
                    >
                        <StarRateRounded />
                    </IconButton>
                ))

            }
        </Box>
    )
}

const stars = [1, 2, 3, 4, 5];