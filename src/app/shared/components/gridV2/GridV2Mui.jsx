import {Box} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { css } from "@emotion/react";

const styles = {
    container: css`
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
      //background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 5px;
      background-image: url("./assets/movie-director.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    `
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const GridV2Mui = ( { array }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid2
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, sm: 8, lg: 12 }}
                // sx={{ border: '1px solid green'}}
            >
                { array.map((item) => (
                    <Grid2
                        xs={2}
                        sm={4}
                        md={4}
                        key={item.id}
                        sx={{
                            // border: '1px solid pink',
                        }}
                    >
                        <div css={styles.container}>
                            <Item
                                sx={{
                                    minHeight: { xs: '300px', sm: '320px', md: '350px', lg: '380px', xl: '450px' },
                                    backgroundImage: `url('/assets/movie-director.jpg')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                            }}
                            >
                                {item.title}
                            </Item>
                        </div>
                    </Grid2>
                )) }
            </Grid2>
        </Box>
    )
}

/**
 * xs, extra-small: 0px
 * sm, small: 600px
 * md, medium: 900px
 * lg, large: 1200px
 * xl, extra-large: 1536px
 * */