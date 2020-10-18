import React,{useEffect,useState,useRef} from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect} from "react-router-dom";
import './cart.css';
import p1 from './Rectangle.jpg'
const config={};

function Cart(props) {
    const [cartItems,setCartItems] = useState([]);
    const [reMount,setRemount] = useState(0);
    const [cartCount,setCartCount] = useState(1);
    const [isLoggin,setIslogin] = useState(true);
    const btnRef = useRef()

    useEffect(()=>{
        let token =localStorage.getItem("token")
   if (token!==null){
    config.headers={ authorazation: "Bearer " + token};

   }
  axios.get('cart',config)
  .then(res=>{
    setIslogin(res.data.loggin)

    setCartItems(res.data.cartItems);
    console.log(res.data.cartItems);
    setCartCount(res.data.cartCount)
    
  
  })

    },[props.reMountHedder,reMount,cartCount]);
    const qntyChange =(cartId,prodId,count,prdCount)=>{

        const data = {
            cartId :cartId,
            prodId:prodId,
            count:count
        }
        if(count!== -1&&prdCount!==0){
            axios.post('incQnty',data,config).then((res)=>{
                setCartCount(cartCount +1)
    
                if (res.status===true) {
                    setRemount(reMount +1);
                    
                }
            })
        }
    }
    const removeFromCart =(id)=>{
        axios.get('removeFromCart').then((res)=>{
        })

    }

    return (
        <div  className="cart-Container">
    {
        cartCount===0?(
            <>
           
              <ul className="prodects lazyProd">
              <div className="catName">
                <h3 className="ctry">YOUR CART IS EMPTY</h3>
                <p className="ctryDisc">Shoppe Now In Yuvaa Online</p>
                {/* <p className="pricTraker">Total MRP PRICE:5000</p>
                <p className="pricTraker">Total OFF PRICE:5000</p> */}
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
        ):(
            <>
            
       {
        isLoggin===false?(
            
              
              <Redirect to="/login"/>
            

           ):(
               <>
               <ul className="prodects" >
               <div className="catName">
                <h3 className="ctry">{cartCount} CART ITEMS </h3>
                <p className="ctryDisc">Inspired by Your Interes</p>
                {/* <p className="pricTraker">Total MRP PRICE:5000</p>
                <p className="pricTraker">Total OFF PRICE:5000</p> */}
              </div>
              <li  className="li   "> 
                     
                     <div className="prodect"> 
                              <img className=" prodImg" src={p1} alt=""/> 
                              <div className="prodect-name">Tottal Prodect:500</div> 
                              <div className="prodect-name">Tottal MRP:5000</div> 
                              <div>Tottal off Price</div> 
                              <div className="off">You Have Saved:5000</div> 
                              
                              <div > 
                                  <button  className="btn btn-success qntyBtn mr-2 ">Place Order</button> 
                              </div> 
                              </div> 
                     </li> 
{
    
    cartItems.map((prod,ky) => { 
                   return( 
                       <li  className="li   " key={ky}> 
                     
                       <div className="prodect"> 
                     
                      
                          <img className=" prodImg" src={"http://localhost:3001/prodects-images/"+prod.prodect._id+"_0.jpg"} alt=""/> 
                                <div className="prodect-name">{prod.prodect.name}</div> 
                                <div> <span  className="prodect-price">₹{prod.prodect.offPrice}</span> <del>₹{prod.prodect.canPrice} </del></div> 
                                <div className="off">Extra{prod.prodect.off}</div> 
                                <div className="stars"> 
                    <i className="fa fa-star yellow-star" aria-hidden="true"></i> 
                    <i className="fa fa-star yellow-star" aria-hidden="true"></i> 
                    <i className="fa fa-star yellow-star" aria-hidden="true"></i> 
                        <i className="fa fa-star yellow-star" aria-hidden="true"></i> 
                            <i className="fa fa-star gray-star" aria-hidden="true"></i> 
                    </div>

                        
                                <div > 
                                    {
                                        prod.qnty >1?(
                                            <>                                 
                                               <button onClick={()=>qntyChange(prod._id,prod.prodect._id,"+1",prod.qnty)}  className="btn btn-success qntyBtn mr-2 ">+</button>  
                                                <span className="qntySpan">{prod.qnty}</span>
                                   <button  ref={btnRef} onClick={()=>qntyChange(prod._id,prod.prodect._id,"-1",prod.qnty)} className="btn ml-2 qntyBtn btn-success mr-2">-</button>  



                                            </>
                                        ):(
                                            <>                                 
                                               <button onClick={()=>qntyChange(prod._id,prod.prodect._id,"+1")}  className="btn btn-success qntyBtn mr-2 ">+</button>                                     <span className="qntySpan">{prod.qnty}</span>
                                   <button disabled="true" ref={btnRef}  className="btn ml-2 qntyBtn btn-success mr-2">-</button>  



                                            </>
                                        )

                                    }
                                   
                                    <button  onClick={()=>(removeFromCart(prod._id,prod.prodect._id))} className="btn btn-danger ">remove</button> 
                                </div> 
                                </div> 
                       </li> 
                   ) 
               }) 
}

</ul>
              </>

           )
       }

            </>
        )
    }

            
        </div>
    );
}

export default Cart;