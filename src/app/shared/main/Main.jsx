import styles from './Main.module.css';
import {Outlet} from "react-router";
import {theme} from "../utils/theme/theme.jsx";
import {ThemeProvider} from "@mui/material/styles";
import {Container} from "@mui/material";

export const Main = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container
                disableGutters
                component="main"
                maxWidth="100%"
            >
                <main className={styles.main}>
                    <Outlet />
                </main>
            </Container>
        </ThemeProvider>
    );
}