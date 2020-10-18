import React, { useState, useEffect } from "react";
import HomeProdects from "../home_prodects/HomePprodects";
import { Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css";

// import p1 from './images/1.png';
import axios from "axios";

function Home(props) {


  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(1); 
  const [isLoggin, setIsLoggin] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
        
      setIsLoading(true);
      const res = await axios.get("home").catch(function (error) {
        // handle error
        console.log(error);
      });
      setData(res.data.data);
      setIsLoading(false);
    };
    fetchData();
    

    

    
  }, []);
  let token =localStorage.getItem("token")
   const config={};
   if (token!==null){
    config.headers={ authorazation: "Bearer " + token};

   }
  const onAddToCart =id=>{
       axios.get("addTocart/"+id,config).then((res)=>{
           console.log(res);
           setIsLoggin(res.data.loggin)
           setCount(count +1)
           props.data(count)
           
           
       })

   }

  return (
    <>
      <HomeProdects />
     {
      isLoggin?(
        <>
        {isLoading ? (
        <>
          <ul className="prodects lazyProd">
            <div className="catName">
              <h4 className=" lazyH4"> </h4>
              <p className="lazyP"></p>
            </div>
            <li className="li laziLI"></li>
            <li className="li laziLI"></li>
            <li className="li laziLI"></li>
            <li className="li laziLI"></li>
          </ul>

          <ul className="prodects lazyProd">
            <div className="catName">
              <h4 className=" lazyH4"> </h4>
              <p className="lazyP"></p>
            </div>
            <li className="li laziLI"></li>
            <li className="li laziLI"></li>
            <li className="li laziLI"></li>
            <li className="li laziLI"></li>
          </ul>
        </>
      ) : (
     
          
            <ul className="prodects" >
              <div className="catName">
                <h3 className="ctry">TOP OFFER PRODECTS</h3>
                <p className="ctryDisc">Inspired by Your Interes</p>
              </div>
              {data.map((prod, ky) => {
                return (
                  <li className="li  " key={ky}>
                  <div className="prodect">
                    <div className="img-wrapper">
                      <img className=" prodImg" src={"http://localhost:3001/prodects-images/"+prod._id+"_3.jpg"} alt="" />
                      </div>
                      <div className="detials-wrapper">
                     <div className="">
                     <div className="prodect-name">{prod.name}</div>
                      <div classNmae="prodeuctPrice">
                        <span className="prodect-price">
                          ₹{prod.offPrice}
                        </span>{" "}
                        <del>₹{prod.canPrice} </del>
                      </div>
                      <div className="off">{prod.off}OFF</div>
                  
                      <div className="addTocartBtn">
                      <button onClick={()=>onAddToCart(prod._id)} className="btn addTocart btn-info">Add To Cart</button> 
                      </div>
                     </div>
                      </div>
                    </div>
                    
                  </li>
                );
              })}
            </ul>
         
      
      )}
        </>
      ):(
        <>
        <Redirect to="/login"/>


        </>
      )
     }
    </>
  );
}

export default Home;
