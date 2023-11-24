import {css} from "@emotion/react";

import {
    Avatar,
    Card,
    CardHeader,
    CardMedia,
} from "@mui/material";

import { red } from "@mui/material/colors";

const IMG_URL = 'https://image.tmdb.org/t/p/w500'

const styles = {
    vote: css`
      font-size: .8rem;
    `,
    percent: css`
      font-size: .7rem;
      color: #fff;
    `
}

export const MovieCard = ({ item }) => {

    const { title, release_date, poster_path, vote_average } = item;

    return (
        <Card sx={{ maxWidth: 400,  cursor: 'pointer'}} >
            <CardMedia
                component="img"
                sx={{
                    height: {
                        xs: 'auto',
                        sm: '330px',
                        md: '350px',
                    },
                }}
                image={ IMG_URL + poster_path }
                alt={ title }
            />
            <CardHeader
                titleTypographyProps={{fontSize: '.8rem', fontWeight: 'bold', color: 'var(--bgcolor-header)'}}
                avatar={
                    <Avatar sx={{ bgcolor: red[600] }} aria-label="recipe">
                        <p css={styles.vote}>{ `${(vote_average * 10).toFixed(0)}` }</p>
                        <span css={styles.percent}>{`%` }</span>
                    </Avatar>
                }
                title={ title }
                subheader={release_date ? new Date(release_date).getFullYear() : 'Sin fecha'}
            />
        </Card>
    )
}