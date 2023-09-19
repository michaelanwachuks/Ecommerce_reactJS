import React from 'react'
import {Button} from 'react-bootstrap';
import { CartContext } from '../cartContext';
import { useContext } from 'react';
import { getProductData } from '../products';

function ProductsInCart(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
   // const productname = props.productName;
    const productData = getProductData(id);
  return (
     <>
     <h4>{productData.productName}</h4>
     <span><img src={productData.productImage} style={{width:30,height:30}} /></span>
     <p>{quantity} total</p>
     <p>${(quantity*productData.price).toFixed(2)}</p>
     <Button size ='sm' variant='warning' onClick={()=>cart.deleteFromCart(id)}>Remove From Cart</Button>
     <hr/>
     </>
  )
}

export default ProductsInCart;