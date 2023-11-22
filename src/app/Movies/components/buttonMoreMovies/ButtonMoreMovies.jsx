import {ExpandMore} from "@mui/icons-material";
import {Button} from "@mui/material";
import {useState} from "react";
import {GetMoviesFromMovieDB} from "../../../shared/utils/router/loaders/GetMoviesFromMovieDB.js";

export const ButtonMoreMovies = (props) => {

    const { setArrayMovies, page, setPage, totalPages, path } = props;

    const [disabledButton, setDisabledButton] = useState(false);

    const handleClick = () => {
        if (page < totalPages) {
            setDisabledButton(true);

            GetMoviesFromMovieDB(path, 'es-US', page + 1)
                .then((res) => {
                    setArrayMovies((prev) => {
                        const combinedArray = [...prev, ...res.results];
                        return Array.from(
                            new Set(combinedArray.map(obj => obj.id)))
                            .map(id => combinedArray.find(obj => obj.id === id));

                    });
                    setDisabledButton(false);
                })
                .catch((err) => console.log(err));

            setPage(page + 1);
        }
    }

    return (
        <Button
            variant="contained"
            startIcon={<ExpandMore />}
            fullWidth={true}
            onClick={handleClick}
            disabled={disabledButton}
        >
            Mostrar más
        </Button>
    )
}