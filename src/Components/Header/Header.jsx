import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div>

            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">University of North-Carolina</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >



                        </Nav>
                        <Form className="d-flex flex-columns">
                            <nav>
                                <Link to='/'>Home</Link>
                                <Link to='/teachers'>Teachers</Link>
                                <Link to='/students'>Students</Link>
                                <Link to='/about'>About</Link>
                                <Link to='/contact'>Contact</Link>
                                <Link to='/review'>Review</Link>
                            </nav>

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;