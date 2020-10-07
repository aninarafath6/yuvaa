import React,{useState,useEffect } from 'react';
import axios from 'axios';
import './allp.css'
function AllProdects(props) {
    const  [data, setData] = useState([]); 
    const [isLoading, setIsLoading] = useState(false); 
    useEffect(()=>{ 
       
        const fetchData = async ()=>{
            setIsLoading(true) 
            const res = await axios.get("http://localhost:3001/getAllProdects")
            .catch(function (error) {
    // handle error
            console.log(error);
                    })
            setData(res.data) 
            setIsLoading(false) 
        }
        fetchData();
       
    },[]) 
    return (
        <>

{
    data.length===0?(
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
    
    <ul className="prodects lazyProd"></ul>
        </>

    ):(
        <>
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
        
            <ul className="prodects">  
               
                { 
                    data.map((prod,ky) =>(
                        <li  className="li  " key={prod.id}> 
                            {
                                console.log(prod.id)
                            }
                            <div className="prodect"> 
                            <img className=" prodImg" src={"http://localhost:3001/prodects-images/"+prod._id+".jpg"} alt=""/> 
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
                                         <button className="addToCart">Edit Prodect</button> 
                                     </div> 
                                     </div> 
     </li> 
                      

                
                        
)) 
} 
</ul> 
            
)}
        </>
    )
}


        



</>


    );
}

export default AllProdects;