import React,{useState} from 'react';
import Hedder from './components/hedder/Header';
import Home from "./components/homePage/Home";
import { BrowserRouter as Router ,Route ,Switch} from "react-router-dom";
       
import Footer from './components/footer/Footer';
import Prodects from './components/prodects/Prodects';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Cart from  './components/cart/cart';
import PlsceOrder from  './components/placeOrder/Place_order';
import Payment from  './components/placeOrder/payment/Peyment';
import './prodects.css' 


function App(props) {

    const [pData,setPdata]=useState("")
    const [reMountHedder,setHeMountHedder]=useState(2)
    const [reMountHedderr,setHeMountHedderr]=useState(2)
    const [logoutCount,setlogoutCount]=useState("")
    const [adderss,setAddress]=useState()
    const  getPdata=(itm)=>{

      setPdata(itm);
      
console.log(pData);
    }
    const reMount=(item)=>{
      setHeMountHedderr(item +1)        
      setHeMountHedderr(item +2)           }
    const reMountt=(item)=>{
     
        setHeMountHedderr(item +1)        
        setHeMountHedderr(item +2)        
    
      console.log( "h "+reMountHedderr);
    }
    const removeitemFromCart =(item)=>{
      setHeMountHedderr(item +1)        

    }
    const onLogut =(count)=>{
      setlogoutCount(count)
    }
    

    const addressfunc =(item)=>{
      setAddress(item)

    }
  return (
    <div className="App">
   
 
     
    
    
    <Router>
    <Hedder data={getPdata}  onLogut={onLogut} reMountHedder={reMountHedder} reMountHedderr={reMountHedderr}   />
   

    <Switch>
     <Route path="/" exact >
     <Home data={reMountt}/>
     </Route>
     <Route path="/home" exact >
     <Home data={reMountt}/>
     </Route>
     <Route path="/react-app" exact >
     <Home data={reMountt}/>
     </Route>
     <Route path="/Sprodects"  >
     <Prodects adedItemToCart={reMount} data={pData}/>
     </Route>
     <Route path="/login"  >
      <Login data={reMount}/>
     </Route>
     <Route path="/signup"  >
      <Signup/>
     </Route>
     <Route path="/cart"   >
      <Cart  data={removeitemFromCart}/>
     </Route>
     <Route  path="/PlaceOrder"   >
      <PlsceOrder  data={addressfunc}/>
     </Route>
     <Route path="/Payment"   >
      <Payment data={adderss} />
     </Route>
  
    
  
    </Switch>

      <Footer />

    </Router> 
  
      
   
    </div>
  );
}

export default App;
