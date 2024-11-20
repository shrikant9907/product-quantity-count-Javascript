const products = [{
        id: 1,
        productName: "First Product",
        productId: 1,
    },
    {
        id: 2,
        productName: "First Product",
        productId: 1,
    },
    {
        id: 3,
        productName: "First Product",
        productId: 1,
    },
    {
        id: 4,
        productName: "Second  Product",
        productId: 2,
    },
    {
        id: 5,
        productName: "Second  Product",
        productId: 2,
    },
    {
        id: 6,
        productName: "Third  Product",
        productId: 3,
    }
];

// Util function to get products with counts

const getCartProducts = (products) => {
    // Logic to add quantity in each products
    const productCounts = products.length;
    let updatedProducts = [];

    for (let i = 0; i < productCounts; i++) {
        const currentProduct = products[i];
        const isAlreadyExists = updatedProducts.find(pro => pro.productId === currentProduct.productId)
        if (!isAlreadyExists) {
            updatedProducts = [...updatedProducts, {
                ...currentProduct,
                quantity: 1
            }]
        } else {
            const indexFound = updatedProducts.findIndex(pro => pro.productId === currentProduct.productId)
            const newQuantity = updatedProducts[indexFound].quantity + 1;
            updatedProducts[indexFound] = {
                ...updatedProducts[indexFound],
                quantity: newQuantity
            }

        }
    }

    return updatedProducts;
}

const cartProductsWithQuantity = getCartProducts(products);
console.log('updatedProducts', cartProductsWithQuantity)
