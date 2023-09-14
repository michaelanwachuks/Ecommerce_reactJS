const productsArray = [
    {
        id : "1",
        productName : "Smart phone",
        price : 100.0
    },
    {
        id : "2",
        productName : "T-shirs",
        price : 50.0,
    },
    {
        id : "3",
        productName : "Jacket",
        price : 30.0
    },
    {
        id : "4",
        productName : "Shoes",
        price : 100.0
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id ===id);
    if(productData == undefined){
        console.log("Product data does not exist for ID"+ id);
        return undefined;
    }
    return productData;
}



export {productsArray}