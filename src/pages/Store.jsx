import React from 'react'
import {Row, Col} from 'react-bootstrap';
import { productsArray } from '../products';

function Store() {
  return (
    <div>
        <h1>Welcome to our online Mall</h1>
        <p>Explore our list of Products</p>
        <hr/>
        <Row xs={1} md={4} className='g-4'>
            {productsArray.map((product,idx) =>(
             <Col align ="center">
             <h2>{product.productName}</h2>
             <h6>${product.price}</h6>
            </Col>
            ))}
            
        </Row>
    </div>
  )
}

export default Store