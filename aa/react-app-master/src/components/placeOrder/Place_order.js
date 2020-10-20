import React,{useState,useEffect,useRef} from 'react';
import './place_order.css';
import {Link} from 'react-router-dom'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,NavDropdown,FormControl,Form,Accordion,Card} from 'react-bootstrap';


const Place_order=(props)=>{
  const [fullName,setFullName] = useState();
  const [phoneNumber,setPhoneNumber] = useState();
  const [houseNo,setHouseNo] = useState();
  const [road,setRoad] = useState();
  const [landmark,setLandmark] = useState();
  const [state,setState] = useState();
  const [city,setCity] = useState();
  const [pincode,setPincode] = useState();
const formRef =useRef()
const onOrderFormSubmitHandiler =(e)=>{
e.preventDefault();
let token =localStorage.getItem("token")
const config={};
if (token!==null){
 config.headers={ authorazation: "Bearer " + token};

}
const address ={
  name:fullName,
  mobile:phoneNumber,
  houseNo:houseNo,
  road:road,
  landmark:landmark,
  state:state,
  city:city,
  pincode:pincode

}


}
  
const toAddressHandiler =()=>{
formRef.current.classList.add('b')

}

    return(
        <div className="Place_order container">
  <form   action="" method="post"  onSubmit={onOrderFormSubmitHandiler} className="addressForm">
       <div ref={formRef}  id="addressWrapper" className="addressWrapper">
       <h3 className="deliveryAdress" >DELIVERY ADDRESS</h3>
            <div className="width-full">
                <input onChange={e=>setFullName(e.target.value)} required  type="text" name="fullName" id="fullName"  className="width-full adressInp"/>
                 <label  htmlFor="fullName" className="adressLabel" >Full Name (Required)*</label><br/>
              </div>
            <div className="width-full">
                <input onChange={e=>setPhoneNumber(e.target.value)} required type="number" name="phoneNumber" id="phoneNumber" className="width-full adressInp"/>
                 <label htmlFor="phoneNumber"  className="adressLabel">Phone number (Required)*</label><br/>
              </div>
            <div className="width-full">
                    <input onChange={e=>setHouseNo(e.target.value)} required type="search" name="HouseNo" id="HouseNo" className="width-full adressInp"/>
                 <label htmlFor="HouseNo" className="adressLabel">House No (Required)*</label><br/>
              </div>
            <div className="width-full">
                    <input onChange={e=>setRoad(e.target.value)} required type="search" name="Road" id="Road" className="width-full adressInp"/>
                 <label htmlFor="Road" className="adressLabel">Road name,Area (Required)*</label><br/>
              </div>
            <div className="width-full">
                  <input onChange={e=>setLandmark(e.target.value)} required type="text" name="Landmark" id="Landmark" className="width-full adressInp"/>
                 <label className="adressLabel" htmlFor="Landmark">Landmark (optional)</label><br/>
              </div>
            <div className="width-full state">
                <div className="width-half">
                <input required onChange={e=>setState(e.target.value)} type="text" name="State" id="State" className="width-full adressInp"/>
                  <label className="adressLabel" htmlFor="State">State (Required)*</label><br/>         
                </div>
                  <div className="width-half city">
                  <input onChange={e=>setCity(e.target.value)} required type="text" name="City " id="City" className="adressInp width-full"/>
                  <label className=" cityLabel" htmlFor="city">City (Required)*</label><br/>
             
                  </div>

              </div>
           
            <div className="width-full state">
                <div className="width-half">
                <input onChange={e=>setPincode(e.target.value)} required type="text" name="Pincode " id="Pincode" className="adressInp width-full"/>
                  <label className="adressLabel " htmlFor="Pincode">Pincode (Required)*</label><br/>
                 
             </div>
      
             
              </div>
              <Link  onClick={toAddressHandiler} className="btn btn-success  width-full" >CONTINEU</Link> 
       </div>
               <div className="payment">

               </div>
            </form>

        </div>
    


    )

}
export default Place_order;