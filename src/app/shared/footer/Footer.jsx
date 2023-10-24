import styles from './Footer.module.css';
import {Link, Typography} from "@mui/material";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://team21-fullstack-js.github.io/palomazos/">
                palomazos
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const Footer = () => {
    return <footer className={styles.footer}>
        <Copyright  /> {/*sx={{ mt: 4, mb: 4 }}*/}
    </footer>
}