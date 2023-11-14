import { Container } from "@mui/material";

export const BannerMovies = ({ bgImage }) => {
    return (
        <Container
        component='figure'
        sx={{
            // border: {xs: '1px solid green', sm: '1px solid red', md: '1px solid blue'},
            // margin: {xs: '-1rem 0'},
            marginLeft: {xs: '-2rem', sm: '-1.5rem', md: '0'},
            height: {xs: '90px', sm: '150px', md: '200px'},
            width: {xs: 'calc(100% + 3rem)', sm: 'calc(100% + 3rem)', md: '100%'},
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
    >
    </Container>
    )
}