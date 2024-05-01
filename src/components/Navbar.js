import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Form, Button, Row, Col } from 'react-bootstrap'

function NavBar() {
    return (
        <div>
            <Navbar expand="lg" className="bg-dark navbar-dark">
                <Container>
                    <Navbar.Brand href="/">News</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Top News</Nav.Link>
                            <Nav.Link href="/sports">Sports</Nav.Link>
                            <Nav.Link href="/entertainment">Entertainment</Nav.Link>
                            <Nav.Link href="/technology">Technology</Nav.Link>
                            <Nav.Link href="/business">Business</Nav.Link>
                            <Nav.Link href="/health">Health</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
