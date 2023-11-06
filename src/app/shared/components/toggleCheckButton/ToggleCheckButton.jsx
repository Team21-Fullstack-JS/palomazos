import {useEffect, useState} from "react";

import { useDebounce} from "../../utils/hooks/useDebounce.jsx";
import { UpdateUserReviews } from "../../utils/router/loaders/updateUserReviews.js";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Clear, Done } from "@mui/icons-material";

export const ToggleCheckButton = ( { isCheck, idReview }) => {

    const [alignment, setAlignment] = useState(isCheck ? 'check' : 'uncheck');
    const debouncedAlignment = useDebounce(alignment, 1000);

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    useEffect(() => {

        if (debouncedAlignment === 'check' && isCheck || debouncedAlignment === 'uncheck' && !isCheck) return;

        const fetchCheck = async () => {
            await UpdateUserReviews(idReview, {isCheck: debouncedAlignment === 'check'});
        }
        fetchCheck();

    }, [debouncedAlignment, idReview, isCheck]);

    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            size="small"
        >
            <ToggleButton value="check"><Done/></ToggleButton>
            <ToggleButton value="uncheck"><Clear/></ToggleButton>
        </ToggleButtonGroup>
    )
}