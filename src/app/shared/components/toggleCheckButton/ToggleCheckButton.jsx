import {useEffect, useState} from "react";

import { useDebounce} from "../../utils/hooks/useDebounce.jsx";
import { UpdateUserReviews } from "../../utils/router/loaders/updateUserReviews.js";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Clear, Done } from "@mui/icons-material";

export const ToggleCheckButton = ( { isCheck, idReview, isDisabled }) => {

    const [alignment, setAlignment] = useState(isCheck ? 'check' : 'uncheck');
    const debouncedAlignment = useDebounce(alignment, 1000);
    const [isDisabledToggleButton] = useState(isDisabled);
    const [isFirstTime, setIsFirstTime] = useState(true);

    const handleChange = (event, newAlignment) => {
        setIsFirstTime(false);
        setAlignment(newAlignment);
    };

    useEffect(() => {

        if (!isDisabledToggleButton) {

            if (!isFirstTime) {
                const fetchCheck = async () => {
                    await UpdateUserReviews(idReview, {isCheck: debouncedAlignment === 'check'});
                }
                fetchCheck();
            }
        }

    }, [debouncedAlignment, idReview, isCheck, isDisabledToggleButton, isFirstTime]);

    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            size="small"
            disabled={isDisabledToggleButton}
        >
            <ToggleButton value="check"><Done/></ToggleButton>
            <ToggleButton value="uncheck"><Clear/></ToggleButton>
        </ToggleButtonGroup>
    )
}