import { css } from "@emotion/react";
import logoImage from '/review.svg';

const styles = {
    container: css`
      height: calc( var(--height-header));
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      //border: 1px solid green;
    `,
    logo: css`
      height: calc( var(--height-header) - 50px);
    `
}

export const Logo = () => {
    return <figure css={ styles.container }>
        <img
            css={ styles.logo }
            src={ logoImage }
            alt="Logo"
        />
    </figure>
}