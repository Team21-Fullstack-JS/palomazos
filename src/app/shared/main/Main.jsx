import styles from './Main.module.css';
import {Outlet} from "react-router";
import {theme} from "../utils/theme/theme.jsx";
import {ThemeProvider} from "@mui/material/styles";
import {Container} from "@mui/material";

export const Main = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container
                component="main"
                // maxWidth="lg"
                sx={{
                    // maxWidth: {xs: "false", md: "lg"},
                    // border: '1px solid violet',
                }}
            >
                <main className={styles.main}>
                    <Outlet />
                </main>
            </Container>
        </ThemeProvider>
    );
}