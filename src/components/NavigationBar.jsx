import React from 'react'
import {Button, Container, Navbar, Modal } from 'react-bootstrap';
function NavigationBar() {
  return (
    <div>
     <Navbar expand="sm">
     <Navbar.Brand  href="/">Ecommerce Logo</Navbar.Brand>
     <Navbar.Toggle />
     <Navbar.Collapse className = "justify-content-end" />
     <Button>Cart 0 items</Button>
     </Navbar>


    </div>
  )
}

export default NavigationBar