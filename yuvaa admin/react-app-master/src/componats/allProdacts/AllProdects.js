import React,{useState,useEffect } from 'react';
import axios from 'axios';
import './allp.css'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
function AllProdects(props) {
    const  [data, setData] = useState([]); 
    const [isLoading, setIsLoading] = useState(false); 
    const [count, setCount] = useState(1); 
    useEffect(()=>{ 
       
        const fetchData = async ()=>{
            setIsLoading(true) 
            const res = await axios.get("getAllProdects")
            .catch(function (error) {
    // handle error
            console.log(error);
                    })
            setData(res.data) 
            setIsLoading(false) 
        }
        fetchData();
       
    },[count]) 
    const onDealteProdect =(id)=>{
       
        axios.get('delete/'+id).then((res)=>{
            console.log(res);
            console.log(count);
            setCount(count +1)

        }
        )
    }
    return (
        <>

{
    data.length===0?(
        <>
        
        
    <ul className="prodects lazyProd">
<div className="catName"> 
               
               
                    <h4 className=" lazyH4">0 prodects</h4> 
                    <p className="lazyP">pls add prodects</p> 
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
                        <li  className="li  " key={ky}> 
                           
                            <div className="prodect"> 
                            <img className=" prodImg" src={"http://localhost:3001/prodects-images/"+prod._id+"_0.jpg"} alt=""/> 
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
                                         <Link to={'/editProdect/'+prod._id} className="btn btn-info" >Edit Prodect </Link> 
                                         <Button   className="btn btn-danger mt-2" onClick={()=>onDealteProdect(prod._id)}>Delete Prodect</Button> 
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