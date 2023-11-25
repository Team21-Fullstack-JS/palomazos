import styles from './Header.module.css';
import { Logo } from "./components/logo/Logo.jsx";
import { Name } from "./components/name/Name.jsx";
import { NavUser } from "./components/nav_user/NavUser.jsx";
import { NavMenu } from "./components/nav_menu/NavMenu.jsx";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../utils/theme/theme.jsx'
import { Container, Box } from "@mui/material";
import {NavMenuSidebar} from "./components/nav_menu_sidebar/NavMenuSidebar.jsx";

export const Header = () => {
    return <ThemeProvider theme={theme}>
        <header className={styles.header__container}>

            <Container
                disableGutters
                component="div"
                maxWidth="100%"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    // width: { xs: 'auto', sm: '600px', md: '900px', lg: '1024px', xl: '1536px', xxl: '1600px' },
                    // border: { xs: '1px solid red', sm: '1px solid blue', lg: '1px solid pink', xl: '1px solid yellow' }
                }}
            >
                <Box
                    className={styles.header}
                    maxWidth="lg"
                    sx={{
                        width: { xs: 'auto', sm: '600px', md: '900px', lg: '1024px', xl: '1536px', xxl: '1600px' },
                        // border: { xs: '1px solid violet', sm: '1px solid yellow', lg: '1px solid purple' }
                    }}
                >
                    <Box className={styles.header__container_navMenuSidebar} sx={{ display: { xxs: 'flex', sm: 'none' }}} >
                        <NavMenuSidebar />
                    </Box>

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
                </Box>
            </Container>
        </header>
    </ThemeProvider>
}