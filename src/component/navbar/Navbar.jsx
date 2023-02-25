import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {  NavLink } from "react-router-dom";


import "../../App.css";
import "./navbar.css"

const AppNavbar = () => {
  const activeLink = "m-auto nav-transform nav-tran border-top border-info text-decoration-none mx-3 mt-auto text-info fs-6 fw-bold";
  const normalLink = " m-auto  text-decoration-none mx-3 mt-auto text-dark fs-6 fw-bold ";
  return (
    <>
      <Navbar bg="danger" expand="lg" className=" ">
        <Container fluid>
          <Navbar.Brand href="#" className=" text-info  ">
            Navbar scroll
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className=" p-0" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className=" my-2 my-lg-0 m-auto">
              <Nav.Link to="/products" as={NavLink}  >
                Home
              </Nav.Link>
              <Nav.Link to='/stor' as={NavLink} >
                Product
              </Nav.Link>
              <Nav.Link to="/login" as={NavLink} className=" fs-6 fw-bold">
                Login
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className=" rounded-5 ">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
};

export default AppNavbar;
