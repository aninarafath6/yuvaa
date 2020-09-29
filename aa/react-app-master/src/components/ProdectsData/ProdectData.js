import React,{useEffect,useState} from 'react'; 
import axios from 'axios';

function ProdectData(props) {

    console.log(props.data)
     
    const  [data, setData] = useState([]); 
    const [isLoading, setIsLoading] = useState(false); 
    useEffect(()=>{ 
       
        axios.get('http://localhost:3001/sPro',{params:{cto:props.data}})
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
    
    
        })
       
    },[props.data]) 

   
    return (
        <>
        
<ul className="prodects" >
{
    
    data.map((prod,ky) => { 
                   return( 
                       <li  className="li   " key={ky}> 
                     
                       <div className="prodect"> 
                                <img className=" prodImg" src={process.env.PUBLIC_URL+"/prodects-images/"+prod._id+"jpg"} alt=""/> 
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
                                    <button className="addToCart">Add To Cart</button> 
                                </div> 
                                </div> 
                       </li> 
                   ) 
               }) 
}

</ul>

        </>
       
    );
}

export default ProdectData;


