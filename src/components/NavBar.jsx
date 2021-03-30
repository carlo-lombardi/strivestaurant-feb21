import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default class NavBar extends Component{

render(){
  const {title, links } = this.props
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">{title} - Strive for food</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                {
                    links.map(link => <Nav.Link key={link} href={'#' + link.toLowerCase()}>{link}</Nav.Link>)
                }
            </Nav>
        </Navbar.Collapse>
    </Navbar>

)
}
}
 

// functional components are a touch faster than class based ones
