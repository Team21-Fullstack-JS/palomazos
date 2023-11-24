import {ExpandMore} from "@mui/icons-material";
import {Button} from "@mui/material";
import {useState} from "react";
import {GetMoviesFromMovieDB} from "../../../shared/utils/router/loaders/GetMoviesFromMovieDB.js";

export const ButtonMoreMovies = (props) => {

    const { setArrayMovies, page, setPage, totalPages, path, fetchSearchMovies, stringSearch } = props;

    const [disabledButton, setDisabledButton] = useState(false);
    const [message, setMessage] = useState('Mostrar más');

    const handleClick = () => {

        setDisabledButton(true);

        function pairArray(res) {
            setArrayMovies((prev) => {
                const combinedArray = [...prev, ...res.results];
                return Array.from(
                    new Set(combinedArray.map(obj => obj.id)))
                    .map(id => combinedArray.find(obj => obj.id === id));

            });
        }

        if (page < totalPages) {

            let data = null;

            if (stringSearch) {
                data = fetchSearchMovies(stringSearch, page + 1);
            } else {
                data = GetMoviesFromMovieDB(path, 'es-US', page + 1);
            }

            data
                .then((res) => {
                    pairArray(res);
                })
                .catch((err) => console.log(err));

            setPage(page + 1);
        }

        if (page === totalPages) {
            setDisabledButton(true);
            setMessage('No hay más resultados');
        } else {
            setDisabledButton(false);
            setMessage('Mostrar más');
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
            { message }
        </Button>
    )
}