import React,{useState,useEffect} from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,Redirect} from "react-router-dom";
import axios from 'axios';


function Login(props) {
    const [isLogin,setIsLogin] = useState({});
    let [count,setCount] = useState(false);
   

    useEffect(()=>{
           const loginData =()=>{
           setTimeout(() => {
            axios.get('http://localhost:3001/login').then((data)=>{
                setIsLogin(data.data);
           
             });
           },500);
            
           }
           loginData();
  },[count]);
  
 
 
 
    const  onSubmit =()=>{
        setCount(count++);
    }
        console.log(isLogin);

    return (
   <>
   {isLogin.status?(
       <>
       <Redirect to='/'/>
     
       </>
   ):(
       <>
       <div className="wrapper bg-light">
     <div className="login-form-div">
        <form  className="login-form" onSubmit={onSubmit} method="post" action="http://localhost:3001/login">
        <h2 className="head-Login">Login</h2>
            <input  name="usame" className="input-sign-in" id="name" type="text" placeholder="User Name"/><br/>
            <input name="email" className="input-sign-in" id="email"type="email" placeholder="Email"/><br/>
            <input name="password" className="input-sign-in" autoComplete="off" id="password" placeholder="Password" type="password"/><br/>
           
            <input type="submit" className="btn login-btn btn-success" value="Logn" />
            <Link to="/signup" className="l">create a new accound</Link>
        </form>
            
        </div>

    </div>
       </>
   )}
   </>
       
            
        
    );
}

export default Login;