import product1 from './assets/product1.webp';
import laptop from './assets/laptop.webp';
import samsung from './assets/samsung-s23.webp';
import applewatch from './assets/applewatch.jpg';
import mackbook from './assets/macbookair.jpg';
import pullover from './assets/pullover.webp';
import jacket2 from './assets/jacket2.webp';
import jacket3  from './assets/jacket3.webp';



const productsArray = [
    {
        id : "1",
        productName : "Iphone 13",
        productImage : product1,
        price : 1300.0
    },
    {
        id : "2",
        productName : "Utra slim Laptop",
        productImage : laptop,
        price : 500.0,
    },
    {
        id : "3",
        productName : "Samsung Galaxy_23",
        productImage : samsung,
        price : 1400.0
    },
    {
        id : "4",
        productName : "Apple watch",
        productImage: applewatch,
        price : 600.0
    },
    {
        id : "5",
        productName : "Apple Macbook",
        productImage: mackbook,
        price : 1000.0
    },
    {
        id : "6",
        productName : "Sweatshirt",
        productImage: pullover,
        price : 150.0
    },
    {
        id : "7",
        productName : "Jacket",
        productImage: jacket2,
        price : 200.0
    },
    {
        id : "8",
        productName : "Winter stylish Jacket",
        productImage: jacket3,
        price : 140.0
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