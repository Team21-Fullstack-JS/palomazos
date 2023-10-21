import styles from './Main.module.css';
import {Login} from "../../users/Login.jsx";

export const Main = () => {
    return <main className={styles.main}>
        {/*<p>Aqui va el Main</p>*/}
        <Login />
    </main>
}