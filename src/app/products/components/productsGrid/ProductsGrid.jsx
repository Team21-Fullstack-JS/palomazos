import {Box, Container, Grid, Typography} from "@mui/material";
import {useCallback, useEffect, useState} from "react";
import {SkeletonLoader} from "../../../shared/components/skeletonLoader/SkeletonLoader.jsx";
import {ProductoCard} from "../productoCard/ProductoCard.jsx";
import styles from "../../../shared/components/skeletonLoader/SkeletonLoader.module.css";
import {getFakeProductsWomenAndMen} from "../../../shared/utils/router/loaders/getFakeProductsWomenAndMen.js";

export const ProductsGrid = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = useCallback( async () => {
        const arrayProducts = await getFakeProductsWomenAndMen();
        setProducts(arrayProducts);
    }, [])

    useEffect(() => {
        if (products.length === 0) {
            fetchProducts();
        }
    }, [fetchProducts, products.length]);
    return products.length > 0 ? (
        <Container
            disableGutters
            container='div'
        >
            <Box sx={{ overflow: 'hidden', marginTop: '.5rem' }}>
                <Typography variant="overline" component="h2" gutterBottom>
                    Adquiere tus productos preferidos:
                </Typography>
                <Grid
                    container
                    wrap="nowrap"
                    justifyContent='space-around'
                >
                    {
                        products.map((product, index) => (
                            <Box key={index} className={`slideInFromRight card_hover ${styles.display_cards}`}>
                                <ProductoCard product={product} />
                            </Box>
                        ))
                    }
                </Grid>
            </Box>
        </Container>
    ) : (
        <Container
            disableGutters
            container='div'
        >
            <SkeletonLoader />
        </Container>
    )
}