import React from "react"; 
import { Container, Navbar as NavbarBS, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
    
    const Navbar = () => { 
        const navigate= useNavigate ();
        const handleClick = (route) =>{
            navigate (route)
        }

    return (
        <NavbarBS  bg="dark" variant="dark" expand="lg">
      <Container>
        <NavbarBS.Brand href="/">EVANGELISTAS DE YHWH</NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBS.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Button variant="warning" onClick={() => handleClick ("/admin")}>Admin</Button>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
    )
}
export default Navbar