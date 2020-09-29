import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from "react-router-dom"; 


function Hedder(props) {
    return (
        <div>
        <Navbar   collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Navbar.Brand href="#home">YUVAA-ADMIN.</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link className="nav-link" to="/">Home-Prodects</Link>
      <Link className="nav-link" to="/AllProdects">All-Prodects</Link>
      <Link className="nav-link" to="/addProdect">Add-Prodects</Link>
     
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Welcome Admin</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
            
        </div>
    );
}

export default Hedder;