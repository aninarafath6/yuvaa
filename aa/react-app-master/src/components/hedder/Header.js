import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import { Link,useHistory} from "react-router-dom";

import './hedder.css'
import axios from 'axios' 


function Header(props) {
  const [sItem,setSitem]=useState("");
  const history = useHistory();
 


  const serched = ()=>{
    history.push('/Sprodects')

      props.data(sItem);
    }
  
      const serchItem = (e)=>{
        let itm  = e.target.value;
   
        setSitem(itm);
           
      }
 
        return (
            <div>
            
           
           <Navbar  className="navbarr" bg="light" variant="light" expand="lg">
  <Link  className="logo nav-brand" to="/home"><span className="logo">YUVAA ONLINE.</span> </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">

    

      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/link">Cart</Link>
      <Link className="nav-link" to="/link">Contact</Link>
      <Link className="nav-link" to="/link">Help</Link>
      <NavDropdown title="Catogery" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">phons</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">laptops</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">camaras</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">dresses</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">dresses</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">toys</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">kitche appalence</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    {/* <div inline>
    <i className="fas cartLogo fa-shopping-cart"></i>
    <div className="cart-count">0</div>  
    </div>  */}
    <div className="cartt" >
    <i className="fas fa-user-circle"></i>
    <i className="fas cartLogo fa-shopping-cart"></i>
    <div className="cart-count">cart</div>  
    </div>
  </Navbar.Collapse>

 
</Navbar>
<div className="serchDiv">
<select className="catogary" name="catogary" id="catogary">
            <option  className ="options " value="All">All</option>
            <option className ="options " value="Mobiles">Mobiles</option>
            <option className ="options " value="Laptops">Laptops</option>
            <option className ="options " value="Computer">Computer</option>
            <option  className ="options "value="Kitchern">Kitchern</option>
            <option className ="options " value="Camara">Camara</option>
            <option className ="options " value="Mobile-Acssessorys">Mobile Acssessorys</option>
  
    </select>
         <input onChange={serchItem} placeholder="Search Your Items In Yuvaa Online." className="serch" type="text"/ >
         <i onClick={serched} className="fa fa-search" aria-hidden="true"></i>
   </div>
                   
            </div>
        );
    }


export default Header;