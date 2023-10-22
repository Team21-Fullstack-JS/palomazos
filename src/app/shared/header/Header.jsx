import styles from './Header.module.css';
import { Logo } from "./components/logo/Logo.jsx";
import { Name } from "./components/name/Name.jsx";
import { NavUser } from "./components/nav_user/NavUser.jsx";
import { NavMenu } from "./components/nav_menu/NavMenu.jsx";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../utils/theme/theme.jsx'
import { Container, Box } from "@mui/material";

export const Header = () => {
    return <ThemeProvider theme={theme}>
        <header className={styles.header__container}>
            <Container component="main" maxWidth="lg">
                <div className={styles.header}>
                    <div className={styles.header__container_logo}>
                        <Logo />
                    </div>

                    <div className={styles.header__container_name}>
                        <Name />
                    </div>

                    <Box className={styles.header__container_navMenu} sx={{ display: { xxs: 'none', sm: 'flex' }}} >
                        <NavMenu />
                    </Box>

                    <div className={styles.header__container_navUser}>
                        <NavUser />
                    </div>
                </div>
            </Container>
        </header>
    </ThemeProvider>
}