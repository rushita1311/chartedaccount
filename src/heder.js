import { Button, Container, ListGroupItem, Nav, Navbar, NavDropdown, } from 'react-bootstrap';
import rushi from './assets/images/Logo-mock-2_trans.webp'
import { ArrowRight, Cart, Facebook, Google, Pin } from 'react-bootstrap-icons';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Heder() {
    const remove = () => {
        localStorage.removeItem('id')
        // localStorage.removeItem('cartid')
    }
    const navigate = useNavigate();
    const toabout = () => {
        navigate("/about");
        
    }
    return (

        <>
            {/* {data.map((item, index) => (
                <p key={index} onClick={() => logout(item.id)}>jhhhhfghgfd</p>
            ))} */}
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home" className='col-4'>
                        <img src={rushi} className='lkj ' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='col-8'>
                        <Nav className="ms-auto">
                            <Nav.Link eventKey={2} onClick={() => { navigate("/") }}>
                                home
                            </Nav.Link>
                            <Nav.Link eventKey={2} onClick={() => { navigate("/about") }}>
                                about
                            </Nav.Link>

                            <Nav.Link eventKey={2} onClick={() => { navigate("/service") }}>
                                service
                            </Nav.Link>

                            <Nav.Link eventKey={2} onClick={() => { window.location.href = './contect' }}>
                                contect
                            </Nav.Link>
                            <Nav.Link eventKey={2} onClick={() => { window.location.href = './client' }}>
                                client access
                            </Nav.Link>
                            {/* <Nav.Link eventKey={2} onClick={() => { window.location.href = './addproduct' }}>
                                add product
                            </Nav.Link> */}

                            <Nav.Link eventKey={2} onClick={() => { window.location.href = "./cart/:id" }}>

                                <Cart />

                            </Nav.Link>

                            <Nav.Link eventKey={2} href="#memes">


                                <Facebook />
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Pin />
                            </Nav.Link>
                            <Button onClick={remove} variant="primary" size="sm">
                                log-out
                            </Button>



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}