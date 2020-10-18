import React,{useEffect,useState} from 'react'; 
import { Redirect} from "react-router-dom";
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Prodects(props) {
      
    const  [data, setData] = useState([]); 
    const [isLoading, setIsLoading] = useState(false); 
    const [isLoggin, setIsLoggin] = useState(true); 
    const [count, setCount] = useState(2); 
    useEffect(()=>{ 
       
     const fetchData = async ()=>{
         setIsLoading(true);
        const res = await axios.get('sPro',{params:{cto:props.data}})
        .catch((err)=>{
            console.log(err);
        });
        setData(res.data)
        setIsLoading(false);

     }
fetchData();
    },[props.data]) 
     let token =localStorage.getItem("token")
   const config={};
   if (token!==null){
    config.headers={ authorazation: "Bearer " + token};

   }

   const onAddtoCart =(id)=>{
       axios.get("addTocart/"+id,config).then((res)=>{
           console.log(res);
           setIsLoggin(res.data.loggin)
           setCount(count +1)
           props.adedItemToCart(count)
           
           
       })

   }
   
    return (
        <>
       {isLoggin? (
    <>

    <ul className="prodects" >
{
    
    data.map((prod,ky) => { 
                   return( 
                       <li  className="li   " key={ky}> 
                     
                       <div className="prodect"> 
                                <img className=" prodImg" src={"http://localhost:3001/prodects-images/"+prod._id+"_0.jpg"} alt=""/> 
                                <div className="prodect-name">{prod.name}</div> 
                                <div> <span  className="prodect-price">₹{prod.offPrice}</span> <del>₹{prod.canPrice} </del></div> 
                                <div className="off">Extra{prod.off}</div> 
                               
                                <div className=""> 
                                    <button onClick={()=>onAddtoCart(prod._id)} className="btn btn-info">ADD TO CART</button> 
                                </div> 
                                </div> 
                       </li> 
                   ) 
               }) 
}

</ul>
          
</>

) :(
 
       <>
       <Redirect to="/login"/>

       </> 
   

)
}
        </>
       
    );
}

export default Prodects;
{/* <ProdectData  data={props.data}/>          */}