import React from 'react'
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
    <>
    <div>

    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand href="#home">LG Home.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                    <NavDropdown title="Products" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Cocina</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                        Baño
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Exterior</NavDropdown.Item>
                    </NavDropdown>
                <Nav.Link href="#link">FAQ</Nav.Link>
            </Nav>
        </Navbar.Collapse>

        <CartWidget>

        </CartWidget>
    </Container>
    </Navbar>

    </div>
    </>
)
}

export default NavBar
