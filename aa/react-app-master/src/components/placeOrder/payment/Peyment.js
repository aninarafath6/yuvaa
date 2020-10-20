// import React,{useEffect,useState} from 'react';
// import {Link} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './payment.css'

// import axios from 'axios';
// function Peyment(props) {
//     console.log(props.data);
//     const [yrp,setYrp] = useState(0);
// let config ={};

//     useEffect(()=>{
//          let token =localStorage.getItem("token")
//    if (token!==null){
//     config.headers={ authorazation: "Bearer " + token};

//    }
//         axios.get('priceTracker',config).then((res)=>{
//             setYrp(res.data.YRP);
      
//         })    })
//     return (
        
//     );
// }

// export default Peyment;