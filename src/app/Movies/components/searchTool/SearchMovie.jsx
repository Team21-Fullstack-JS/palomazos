import {Search} from "@mui/icons-material";
import {Box, InputAdornment, TextField } from "@mui/material";
import {css} from "@emotion/react";
import {useCallback, useEffect, useState} from "react";
import {useDebounce} from "../../../shared/utils/hooks/useDebounce.jsx";
import {useNavigate} from "react-router-dom";
import {MOVIES} from "../../../shared/utils/router/paths.js";

const styles = {
    container: css`
      width: 50%;
      
      @media (min-width: 1024px) {
        width: 30%;
      }
    `,
}

export const SearchMovie = () => {

    const navigate = useNavigate();

    const [stringSearch, setStringSearch] = useState('');
    const stringSearchDebounce = useDebounce(stringSearch, 500);

    const handleKeyPress = (e) => {
        setStringSearch(e.target.value);
    }

    const relocatePage = useCallback( () => {
        navigate(`${MOVIES}/search?movie=${stringSearchDebounce}`);
    }, [navigate, stringSearchDebounce]);

    useEffect(() => {
        if (stringSearchDebounce) {
            relocatePage();
        }
    }, [relocatePage, stringSearchDebounce]);

    return (
        <div css={styles.container}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>

                <TextField
                    id="input-search"
                    hiddenLabel
                    variant="filled"
                    size="small"
                    margin="dense"
                    color="success"
                    fullWidth
                    onKeyUp={handleKeyPress}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                        sx: { fontSize: {xs: '.8rem', sm: '1rem', md: '1.2rem'} }
                    }}
                />
            </Box>
        </div>
    )
}