import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,NavDropdown,FormControl,Form,Button} from 'react-bootstrap';
import { Link,useHistory} from "react-router-dom";

import './hedder.css'


function Header(props) {
  const [sItem,setSitem]=useState("");
  const history = useHistory();
 


  const serched = ()=>{
    history.push('/Sprodects')

      props.data(sItem);
    }
  
      const serchItem = (e)=>{
        let itm  = e.target.value;
   
        setSitem(itm.toString().toLowerCase());
           
      }
 
        return (
            <div>
            
            <Navbar bg="dark" variant="dark" expand="md" fixed="top" >
  <Link className="navbar-brand" to="/home">YUVAA ONLINE.</Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link className="nav-link" to="/home">Home</Link>
      <Link className="nav-link" to="/home">Cart</Link>
      <NavDropdown title="Catogary" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.2">smart phones</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">speakers</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">headphones</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">watches</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown  title="Acount" id="basic-nav-dropdown">
        <Link  className="color-black nav-link" to="/Login"><span className="span-login-link">Login</span></Link>
        <NavDropdown.Divider />
        <Link className="nav-link " to="/signup"><span className="span-login-link">Sign Up</span></Link>
       </NavDropdown>
    </Nav>
    <Form inline >
      <FormControl onChange={serchItem} placeholder="Search "  type="text" className="mr-sm-2 " />
      <Button onClick={serched} variant="info">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  
                   
            </div>
        );
    }


export default Header;