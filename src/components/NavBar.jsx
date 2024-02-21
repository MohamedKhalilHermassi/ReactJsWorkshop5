import React from 'react'
import { Container, NavDropdown, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">NavBar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
       
      <NavLink className="mx-5" activeStyle={{ textDecoration: 'underline' }} to="/products">Products</NavLink>
    
  
          <NavLink to="/counter" >Counter</NavLink>
          
      
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </nav>
  )
}
