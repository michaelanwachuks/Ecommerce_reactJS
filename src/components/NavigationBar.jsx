import { useState } from 'react';
import React from 'react'
import {Button, Container, Navbar, Modal } from 'react-bootstrap';
import { CartContext } from '../cartContext';
import { useContext } from 'react';
import ProductsInCart from './ProductsInCart';
import navigationBar from './navigationBar.css';



function NavigationBar() {
    const cart = useContext(CartContext);
    
    //get the number of products in cart
    const productsCount = cart.items.reduce((sum,product)=>sum+product.quantity,0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <Container>
     <Navbar expand="sm">
     <Navbar.Brand  href="/"><h1 className='logostyle'>Mike<span >Mall</span></h1></Navbar.Brand>
     <Navbar.Toggle />
     <Navbar.Collapse className = "justify-content-end">
     <Button onClick={handleShow}>Cart {productsCount} items</Button>
     </Navbar.Collapse>
     </Navbar>
     <Modal show = {show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
             
            {productsCount>0 ? 
            <>
            <p>Items in your Cart</p>
            {cart.items.map((currentProduct,idx)=>(
              
                //<h1>{currentProduct.id}</h1>
                <ProductsInCart key= {idx} id={currentProduct.id} name={currentProduct.productname} quantity={currentProduct.quantity}></ProductsInCart>
                
            ))}
             
            <h1>Total: &euro;{cart.getTotalCost().toFixed(2)}</h1>
            <Button variant='success'>Checkout</Button>
            </>
            :
            <h1>No item in your cart</h1>
        }
        </Modal.Body>
     </Modal>

    </Container>
  )
}

export default NavigationBar