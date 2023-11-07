import {Box} from "@mui/material";
import {LoaderBar} from "../../../shared/components/loader/LoaderBar.jsx";
import {css} from "@emotion/react";

const styles = {
    containerLoader: css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 50px;
      margin-top: 1.5rem;
    `,
}

export const Loader = ({ message }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            // paddingTop: '2rem',
            width: 'auto',
        }}>
            { message }
            <div css={styles.containerLoader}>
                <LoaderBar />
            </div>
        </Box>
    );
}