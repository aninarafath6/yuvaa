import React,{useState} from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,Redirect} from "react-router-dom";
import axios from 'axios'

function Login(props) {
    const [userName,setUserName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [isLogged,setIsLogged]= useState();
    const [status,setStatus]=useState(true);
    const [count,setCount]=useState(1);


    const submtHandiler =e=>{
        e.preventDefault();
        const data = {
            name :userName,
            email:email,
            password:password
        }
         axios.post('login',data)
         .then(res=>{
            setStatus(res.data.loggin);

             if(res.data.token !==undefined){
            localStorage.setItem("token",res.data.token);
            setCount(count +1)
            props.data(count)
           

            setIsLogged(true)
             }else{
                setCount(count +1)
                props.data(count)
                setIsLogged(false)

             }
         })
         .catch(err=>{
            setCount(count +1)
            props.data(count)
             console.log(err);
         })
       


    }
const onSubmitHandiler =()=>{
    console.log(count);
    setCount(count +1)
    props.data(count)
    
}

    return (
        <>
  {
    isLogged===false||isLogged===undefined?(
        <>
        <div className="wrapper bg-light">
     <div className="login-form-div">
        <form  className="login-form" onSubmit={submtHandiler}>
        <h2 className="head-Login">Login</h2>
        {status===false? <p>invalid email or password</p>:<p></p>}
            <input onChange={e=>setUserName(e.target.value)}  className="input-sign-in" id="name" type="text" placeholder="User Name"/><br/>
            <input onChange={e=>setEmail(e.target.value)}  className="input-sign-in" id="email"type="email" placeholder="Email"/><br/>
            <input onChange={e=>setPassword(e.target.value)}  className="input-sign-in" autoComplete="off" id="password" placeholder="Password" type="password"/><br/>
           
            <input onClick={onSubmitHandiler} type="submit" className="btn login-btn btn-success" value="Logn" />
            <Link to="/signup" className="l">create a new accound</Link>
        </form>
            
        </div>

    </div>

        </>
    ):(
        <>
          

       <Redirect to="/home"/>
        </>
    )
  } 
  </>

    )
}
export default Login;