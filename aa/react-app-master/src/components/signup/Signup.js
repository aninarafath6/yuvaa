import React from 'react';

import './signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button} from 'react-bootstrap';
import { Link} from "react-router-dom";


function Signup(props) {
    return (
        <div className="wrapper bg-light">
     <div className="login-form-div">
        <form  className="login-form"  action="http://localhost:3001/signup" method="post">
        <h2 className="head-Login">Sign Up</h2>
            <input  name="name" className="input-sign-in" id="name" type="text" placeholder="Full Name"/><br/>
            <input  name="useName" className="input-sign-in" id="username" type="text" placeholder="User Name"/><br/>
            <input name="email" className="input-sign-in" id="email"type="email" placeholder="Email"/><br/>
            <input name="password" className="input-sign-in" autoComplete="off" id="password" placeholder="Password" type="password"/><br/>
           
            <input type="submit" className="btn login-btn btn-success" value="Sign Up"/>
            <Link to="/login" className="l">you have already accound?</Link>
        </form>
        
        </div>

    </div>
    );
}

export default Signup;