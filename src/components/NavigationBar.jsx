import { useState } from 'react';
import React from 'react'
import {Button, Container, Navbar, Modal } from 'react-bootstrap';


function NavigationBar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <Container>
     <Navbar expand="sm">
     <Navbar.Brand  href="/">Ecommerce Logo</Navbar.Brand>
     <Navbar.Toggle />
     <Navbar.Collapse className = "justify-content-end" >
     <Button onClick={handleShow}>Cart 0 items</Button>
     </Navbar.Collapse>
     </Navbar>
     <Modal show = {show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h1>This is the modal body</h1>
        </Modal.Body>
     </Modal>

    </Container>
  )
}

export default NavigationBar