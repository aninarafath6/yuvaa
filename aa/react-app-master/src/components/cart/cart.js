import React,{useEffect,useState,useRef} from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect,Link} from "react-router-dom";
import './cart.css';
import p1 from './Rectangle.jpg'
const config={};

function Cart(props) {
    const [cartItems,setCartItems] = useState([]);
    const [reMount,setRemount] = useState(0);
    const [cartCount,setCartCount] = useState(1);
    const [isLoggin,setIslogin] = useState(true);
    const [yrp,setYrp] = useState(0); 
    const [mrp,setMrp] = useState(0); 
    const [saved,setSaved] = useState(0); 
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
  axios.get('priceTracker',config).then((res)=>{
      setYrp(res.data.YRP);
      setMrp(res.data.mrp);
      setSaved(res.data.saved);

  })

    },[props.reMountHedder,reMount,cartCount]);
    const qntyChange =(cartId,prodId,count,prdCount)=>{

        const data = {
            cartId :cartId,
            prodId:prodId,
            count:count
        }
            axios.post('incQnty',data,config).then((res)=>{
                setRemount(reMount +1);
    
                if (res.removed===true) {
                    alert("tfg")
                    
                }
            })
        
    }
    const removeFromCart =(id,prodId)=>{
        const data = {
            cartId :id,
            prodId:prodId,
        }
        axios.post('removeFromCart',data).then((res)=>{
            setRemount(reMount +1);
            props.data(reMount)
            console.log(res);
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
                    <div className="img-wrapper">
                    <img className=" prodImgInCart" src={p1} alt=""/> 
                      </div>
                      <div className="detials-wrapper">
                     <div className="">
                     <div className="prodect-name">TOTTAL PRODECT:<span  className="prodect-price">{cartCount}</span></div> 
                     <div className="prodect-name">TOTTAL MRP PRICE:<span  className="prodect-price">Rs.₹{mrp}</span></div> 

                     <div>TOTTAL OFF PRICE:<span  className="prodect-price">Rs.₹{yrp}</span></div> 
                     <div className="off">You Have Saved:<span  className="prodect-price">Rs.₹{saved}</span></div> 
       
                      <div className="addTocartBtn">
                      <Link to="/PlaceOrder" className="btn addTocart btn-success">PLACE ORDER</Link> 

                      </div>
                     </div>
                      </div>
                    </div>
                     </li> 
{
    
    cartItems.map((prod,ky) => { 
                   return( 
                       <li  className="li   " key={ky}> 
                     
                       <div className="prodect"> 
                     
                       <div className="img-wrapper">

                          <img className="prodImginCart" src={"http://localhost:3001/prodects-images/"+prod.prodect._id+"_0.jpg"} alt=""/> 
                          </div>
                          <div className="detials-wrapper">

                          <div>
                          <div className="prodect-name">{prod.prodect.name}</div> 
                                <div> <span  className="prodect-price">₹{prod.prodect.offPrice}</span> <del>₹{prod.prodect.canPrice} </del></div> 
                                <div className="off">Extra{prod.prodect.off}</div> 
                               

                        
                                <div > 
                                <button onClick={()=>qntyChange(prod._id,prod.prodect._id,"+1",prod.qnty)}  className="btn btn-success qntyBtnplus mr-2 ">+</button>  
                                                <span className="qntySpan">{prod.qnty}</span>
                                   <button   onClick={()=>qntyChange(prod._id,prod.prodect._id,"-1",prod.qnty)} className="btn ml-2 qntyBtnminus btn-success mr-2">-</button>  
                                   
                                    <button  onClick={()=>(removeFromCart(prod._id,prod.prodect._id))} className="btn btn-danger qntyBtnRmv">remove</button> 
                                </div> 
                                </div> 
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