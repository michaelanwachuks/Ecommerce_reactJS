import product1 from './assets/product1.webp';
import laptop from './assets/laptop.webp';
import samsung from './assets/samsung-s23.webp';
import applewatch from './assets/applewatch.jpg';



const productsArray = [
    {
        id : "1",
        productName : "Smart phone",
        productImage : product1,
        price : 100.0
    },
    {
        id : "2",
        productName : "Utra slim Laptop",
        productImage : laptop,
        price : 50.0,
    },
    {
        id : "3",
        productName : "samsung 23",
        productImage : samsung,
        price : 30.0
    },
    {
        id : "4",
        productName : "Apple watch",
        productImage: applewatch,
        price : 100.0
    }
];

export function getProductData(id) {
    let productData = productsArray.find(product => product.id ===id);
    if(productData == undefined){
        console.log("Product data does not exist for ID"+ id);
        return undefined;
    }
    return productData;
}



export { productsArray};