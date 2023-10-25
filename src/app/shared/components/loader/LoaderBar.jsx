
import { css } from "@emotion/react";
import { ThreeDots as Loader } from 'svg-loaders-react'

const styles = {
    container: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      gap: 1rem;
    `,
    loaderContainer: css`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(116, 123, 255, 0.8); 
      border-radius: 50%;
    `,
    loader: css`
      width: 60%;
      height: 60%;
    `
}

export const LoaderBar = () => {
    return (
        <div css={styles.container}>
            <div css={styles.loaderContainer}>
                <Loader css={styles.loader} />
            </div>
        </div>
    );
}