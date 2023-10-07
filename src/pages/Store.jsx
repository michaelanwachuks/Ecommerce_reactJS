import React from 'react'
import {Row, Col} from 'react-bootstrap';
import './style.css';
import { productsArray } from '../products';
import ProductCard from '../components/ProductCard';
import ImageSlider from '../components/ImageSlider';
 
function Store() {
  return (
    <div>
        <h1 className='firstheading'>Welcome to our online Mall</h1>
        <p>Explore our list of Products</p>
        <hr/>
        <ImageSlider/>

        <Row xs={1} md={4} className='g-4'>
            {productsArray.map((product,idx) =>(
             <Col align ="center">
              <ProductCard product={product} />
            </Col>
            ))}
            
        </Row>
    </div>
  )
}

export default Store