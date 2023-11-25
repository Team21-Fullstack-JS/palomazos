import {css} from "@emotion/react";
import {useAuthContext} from "../../shared/utils/hooks/useAuthContext.js";

const styles = {
    container: css`
      width: 100%;
      height: 100vw;
      border: 1px solid red;
    `,
};

export const MovieCardFull = () => {

    const { movieFull } = useAuthContext();

    return (
        <section css={styles.container}>Datos full de la movie: {movieFull.title}</section>
    )
}