import { css } from "@emotion/react";

const styles = {
    container: css`
      //border: 1px solid red;
      height: var(--height-header);
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      padding-left: 0.5rem;
    `,
    title: css`
      font-weight: 400;
      color: #fff;`
}

export const Name = () => {
    return <div css={ styles.container }>
        <p css={ styles.title }>
            Palomazos
        </p>
    </div>
}