import React from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import './card.css';
import { CartContext } from '../cartContext';
import { useContext } from 'react';


function ProductCard(props) {
    const product = props.product;
  return (
     <Card>
        <Card.Body>
             <img src={product.productImage} className='product_imagesize' />
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Button variant='primary'>Add To Cart</Button>
        </Card.Body>
     </Card>
  )
}

export default ProductCard