import {Container, Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const NavBar = () => {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                    <Container fluid>
                            <LinkContainer to={"/"}>
                                    <Navbar.Brand>Website Dries Mangelschots</Navbar.Brand>
                            </LinkContainer>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav>
                                            <LinkContainer to={"/"}>
                                                    <Nav.Link>Home</Nav.Link>
                                            </LinkContainer>
                                            <LinkContainer to={"/about"}>
                                                    <Nav.Link>About</Nav.Link>
                                            </LinkContainer>
                                            <LinkContainer to={"/links"}>
                                                    <Nav.Link>Links</Nav.Link>
                                            </LinkContainer>
                                            <LinkContainer to={"/contact"}>
                                                    <Nav.Link>Contact</Nav.Link>
                                            </LinkContainer>
                                    </Nav>
                            </Navbar.Collapse>
                    </Container>
            </Navbar>
        )
}

export default NavBar;
