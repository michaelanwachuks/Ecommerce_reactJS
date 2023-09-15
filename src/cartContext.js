import { createContext, useState } from "react";
import { productsArray } from "./products";

//create context
export const CartContext = createContext(
    {
        items : [],
        getProductQuantity : ()=>{},
        addOneToCart : ()=>{},
        removeOneFromCart: ()=>{},
        deleteFromCart : ()=>{},
        getTotalCost : ()=>{}

    }
);

//define the functions
function getProductQuantity(id){
    const quantity = cartProducts.find(product => product.id===id)?.quantity;
    if(quantity===undefined){
        return 0;
    }
    return quantity;
}

//define addOneTocart function
 function addOneToCart(id){
    const quantity = getProductQuantity(id);
    if(quantity==0){
        setCartProducts([
            ...cartProducts, {id : id,
            quantity: 1
            }
        ])
    }
    else {
        setCartProducts(cartProducts.map(product=>product.id===id?{...product, quantity:product.quantity+1}:product))
    }
 }

 //define the deleteFromCart function
 function deleteFromCart(){
    setCartProducts(cartProducts=>cartProducts.filter(currentProduct=>{
        return currentProduct.id!=id;
    }))
 }

 //define removeOneFromCart function
 function removeOneFromCart(id){
    const quantity = getProductQuantity(id);
    if(quantity==1){
        deleteFromCart(id);
    }
    else{
        setCartProducts(cartProducts.map(product=>product.id===id?{...product,quantity:product.quantity-1}:product));
    }
 }

//define th getTotalCost function
function getTotalCost(){
    let totalCost = 0;
    cartProducts.map((cartItem)=>{const productData= getProductData(cartItem.id)});
    totalCost +=(productData.price*cartItem.quantity);
    return totalCost;
}



//define the context provider
export function CartProvider({children}){
    const [cartProducts, setCartProducts] = useState([]);
    const contextValue = {
        items : cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }
}