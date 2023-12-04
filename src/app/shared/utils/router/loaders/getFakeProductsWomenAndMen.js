import {shuffleArray} from "../../others/shuffledArrays.js";

export async function getFakeProductsWomenAndMen() {
    const categoryMen = `men's clothing`;
    const categoryWomen = `women's clothing`;

    const res = await Promise.all([
        await fetch(`https://fakestoreapi.com/products/category/${categoryMen}?limit=10`),
        await fetch(`https://fakestoreapi.com/products/category/${categoryWomen}?limit=10`)
    ]);

    const productsArray = await Promise.all(
        res.map(async (req) => {
            return await req.json();
        })
    );

    // Concatenar los productos de ambas categorías
    const allProducts = productsArray.flat();
    return shuffleArray(allProducts);
}