import React,{useState} from 'react';
import Hedder from './components/hedder/Header';
import Home from "./components/homePage/Home";
import { BrowserRouter as Router ,Route ,Switch} from "react-router-dom";

// import Footer from './components/footer/Footer';
import Prodects from './components/prodects/Prodects';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import './prodects.css' 


function App(props) {

    const [pData,setPdata]=useState("")
    const  getPdata=(itm)=>{

      setPdata(itm);
      
console.log(pData);
    }
  return (
    <div className="App">
   
 
     
    
    
    <Router>
    <Hedder data={getPdata}  />
   

    <Switch>
     <Route path="/" exact >
     <Home/>
     </Route>
     <Route path="/home" exact >
     <Home/>
     </Route>
     <Route path="/react-app" exact >
     <Home/>
     </Route>
     <Route path="/Sprodects"  >
     <Prodects data={pData}/>
     </Route>
     <Route path="/login"  >
      <Login/>
     </Route>
     <Route path="/signup"  >
      <Signup/>
     </Route>
  
    </Switch>

      {/* <Footer /> */}

    </Router> 
  
      
   
    </div>
  );
}

export default App;
