import {Box, Grid, Skeleton} from "@mui/material";
import styles from './SkeletonLoader.module.css';

export const SkeletonLoader = () => {
    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Grid
                container
                wrap="nowrap"
                justifyContent='space-around'
            >
            {
                Array.from(new Array(10)).map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: 95, marginRight: 0, my: 1.5
                        }}
                        className={styles.display_cards}
                    >
                        <Skeleton variant="rectangular" width={95} height={50} />
                        <Skeleton width={95} />
                        <Skeleton width={60} />
                    </Box>
                ))
            }
            </Grid>
        </Box>
    )
}