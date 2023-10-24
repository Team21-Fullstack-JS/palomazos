import {Link, useRouteError} from 'react-router-dom';

import { css } from "@emotion/react";
import {LANDING} from "../utils/router/paths.js";

const styles = {
    container: css`
      height: 100vh;
      width: 100%;
      background-image: url("./assets/not-found2.jpg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding-top: 2rem;
      background-color: #f9f9f9;
      color: var(--bgcolor-header);
      @media screen and (min-width: 600px) {
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        line-height: 25px;
      }
    `,
    message: css`
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 2rem;
      @media screen and (min-width: 600px) {
      margin-right: 1rem;
    }
    `
}

export function NotFound() {
    const error = useRouteError();

    return ( error.status === 404 &&
      <section css={styles.container}>
          <p css={styles.message}>Ooops!, no se encontró el recurso buscado.</p>
          <Link style={{lineHeight: '25px'}} to={LANDING}>Volver al inicio</Link>
      </section>
    );
}