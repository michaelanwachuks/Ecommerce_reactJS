import { useState } from 'react';
import React from 'react'
import {Button, Container, Navbar, Modal } from 'react-bootstrap';
import { CartContext } from '../cartContext';
import { useContext } from 'react';
import {CartProduct} from './CartProduct';


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
     <Navbar.Brand  href="/">Ecommerce Logo</Navbar.Brand>
     <Navbar.Toggle />
     <Navbar.Collapse className = "justify-content-end" >
     <Button onClick={handleShow}>Cart {productsCount} items</Button>
     </Navbar.Collapse>
     </Navbar>
     <Modal show = {show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h1>This is the modal body</h1>
            {productsCount>0 ? 
            <>
            <p>Items in your Cart</p>
            {cart.items.map((currentProduct,idx)=>{
                //<h1>{currentProduct.id}</h1>
                <CartProduct key= {idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
            })}
            <h1>Total:{cart.getTotalCost().toFixed(2)}</h1>
            <Button variant='success'>Purchase</Button>
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