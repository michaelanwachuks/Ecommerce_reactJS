import React from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import './card.css';
import { CartContext } from '../cartContext';
import { useContext } from 'react';
import ReactStars from "react-rating-stars-component";


function ProductCard(props) {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
      
  return (
     <Card>
        <Card.Body>
             <img src={product.productImage} className='product_imagesize' alt='itemimage' />
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>&euro;{product.price}</Card.Text>
            {productQuantity>0?<><Form as = {Row}>
                <Form.Label column="true" sm="6">In Cart:{productQuantity}</Form.Label>
                <Col sm="6">
                    <Button onClick={()=>cart.addOneToCart(product.id)} sm="6" className='mx-2'>+</Button>
                    <Button  onClick={()=>cart.removeOneFromCart(product.id)}sm="6" className='mx-2'>-</Button>
                </Col>
                </Form>
                <Button variant='danger' onClick={()=>cart.deleteFromCart(product.id)} className='my-2'>Remove Item</Button>
                </>
                :<Button variant='primary' onClick={()=> cart.addOneToCart(product.id)}>Add To Cart</Button>
                }
            <ReactStars
          count={5} // Number of stars
          onChange={(newRating) => {
            // Handle the rating change here (e.g., send it to the server)
            console.log("New rating:", newRating);
          }}
          size={30} // Size of the stars
          value={0} // Initial rating (you can set it to the current product's rating if available)
        />
        </Card.Body>
     </Card>
  )
}

export default ProductCard