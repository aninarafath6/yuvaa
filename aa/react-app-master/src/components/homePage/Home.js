import React,{useState,useEffect} from 'react'; 
import HomeProdects from "../home_prodects/HomePprodects";
import './home.css' ;

// import p1 from './images/1.png'; 
import axios from 'axios' 
 
function Home(props) { 
  
    const  [data, setData] = useState([]); 
    const [isLoading, setIsLoading] = useState(false); 
    useEffect(()=>{ 
       
        const fetchData = async ()=>{
            setIsLoading(true) 
            const res = await axios.get("http://localhost:3001/home")
            .catch(function (error) {
    // handle error
            console.log(error);
                    })
            setData(res.data.data) 
            setIsLoading(false) 
        }
        fetchData();
       
    },[]) 

      
    return(
        <>

<HomeProdects/>
{isLoading? (
    <>
    <ul className="prodects lazyProd">
<div className="catName"> 
               
               
                    <h4 className=" lazyH4"> </h4> 
                    <p className="lazyP"></p> 
                </div> 
                <li className="li laziLI">

                </li>
                <li className="li laziLI">

                </li>
                <li className="li laziLI">

                </li>
                <li className="li laziLI">

                </li>

</ul>
    
    <ul className="prodects lazyProd">
<div className="catName"> 
               
               
                    <h4 className=" lazyH4"> </h4> 
                    <p className="lazyP"></p> 
                </div> 
                <li className="li laziLI">

                </li>
                <li className="li laziLI">

                </li>
                <li className="li laziLI">

                </li>
                <li className="li laziLI">

                </li>

</ul>
</>

) :(
    data.map((item,i)=>{
        return(
            <ul className="prodects" key={i}>  
                <div className="catName"> 
              
               
                    <h3 className="ctry">{item[0].catloName}</h3> 
                    <p className="ctryDisc">Inspired by Your Interes</p> 
                </div> 
                { 
                    item.map((prod,ky) => { 
                        return( 
                            <li  className="li  " key={ky}> 
                           
                            <div className="prodect"> 
                                     <img className=" prodImg" src={prod.img} alt=""/> 
                                     <div className="prodect-name">{prod.name}</div> 
                                     <div> <span  className="prodect-price">₹{prod.offPrice}</span> <del>₹{prod.canPrice} </del></div> 
                                     <div className="off">Extra{prod.off}</div> 
                                     <div className="stars"> 
                         <i className="fa fa-star yellow-star" aria-hidden="true"></i> 
                         <i className="fa fa-star yellow-star" aria-hidden="true"></i> 
                         <i className="fa fa-star yellow-star" aria-hidden="true"></i> 
                             <i className="fa fa-star yellow-star" aria-hidden="true"></i> 
                                 <i className="fa fa-star gray-star" aria-hidden="true"></i> 
                         </div> 
                                     <div className=""> 
                                         <button className="addToCart">Add to cart</button> 
                                     </div> 
                                     </div> 
                            </li> 
                        ) 
                    }) 
                } 
                </ul> 
            
        )
    })  

)}


        </>
       


    )
 
 
}; 
         
 
export default Home;