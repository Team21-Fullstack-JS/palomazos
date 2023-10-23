import styles from './Main.module.css';
import {Outlet} from "react-router";

export const Main = () => {
    return (
        <main className={styles.main}>
            <Outlet />
        </main>
    );
}