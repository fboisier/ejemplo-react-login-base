import React, { useContext } from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { UsuarioContext } from '../context/UsuarioContext';

export const NavBarMenu = () => {

    const { setUsuario} = useContext(UsuarioContext);

    const handleLogOut = () => {
        setUsuario(null);
        localStorage.clear();
    }

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand > <img alt="marca o logo" src="/onepiece.png" width="100"/></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Inicio</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/travels">
                            <Nav.Link>Travels</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Button onClick={handleLogOut} variant="danger">Salir</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
