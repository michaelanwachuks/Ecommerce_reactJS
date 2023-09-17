import React from 'react'
import {Button} from 'react-bootstrap';
import { CartContext } from '../cartContext';
import { useContext } from 'react';
import { getProductData } from '../products';

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);
  return (
    <>
    <h3>{productData.productName}</h3>
    <p>{quantity}total</p>
    <p>${(quantity.productData* productData.price).toFixed(2)}</p>
    <Button size='sm' onClick={()=>cart.deleteFromCart(id)}>Remove</Button>
    <hr/>
    </>
  )
}

export default CartProduct;