import React,{useState,useEffect,useRef} from 'react';
import './place_order.css';
import {Link} from 'react-router-dom'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,NavDropdown,FormControl,Form,Accordion,Card} from 'react-bootstrap';


const Place_order=(props)=>{
  const [total,setTotal] = useState(0);
  const [fullName,setFullName] = useState('');
  const [phoneNumber,setPhoneNumber] = useState(0);
  const [houseNo,setHouseNo] = useState(0);
  const [road,setRoad] = useState('');
  const [landmark,setLandmark] = useState('');
  const [state,setState] = useState('');
  const [city,setCity] = useState('');
  const [pincode,setPincode] = useState(0);
  const [payment,setPayment] = useState('');
const addressRef =useRef()
const paymentRef =useRef()
const formRef =useRef()
let token =localStorage.getItem("token")
const config={};
if (token!==null){
 config.headers={ authorazation: "Bearer " + token};

}
useEffect(()=>{
  axios.get('priceTracker',config).then((res)=>{
    setTotal(res.data.YRP);
   

})
})
const onOrderFormSubmitHandiler =(e)=>{
e.preventDefault();

const address ={
  name:fullName,
  mobile:phoneNumber,
  houseNo:houseNo,
  road:road,
  landmark:landmark,
  state:state,
  city:city,
  pincode:pincode,
  payment:payment

}

axios.post('place-order',address,config).then((res)=>{
  console.log(res);
})

}
  
const toAddressHandiler =()=>{
  addressRef.current.classList.add('hideAdrssForm')
    paymentRef.current.classList.add('vewPaymet')


}




    return(
        <div className="Place_order container">
  <form  ref={formRef} action="" method="post"  onSubmit={onOrderFormSubmitHandiler} className="addressForm ">
       <div ref={addressRef}  id="addressWrapper" className="addressWrapper ">
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
               <div ref={paymentRef} className="payment  d">

               <h4>TOTAL AMOUNT:Rs.₹{total}</h4>
               <hr/>
               <p className="choosePayment">Choose Payment Option</p>
             <div className="pey">
             <div className="flex">
             <input onChange={e=>setPayment(e.target.value)} value="cod" type="radio" name="paymentMd" id="cod"/>
               <label className="pLabel" htmlFor="cod">COD</label>
             </div>
             <div className="flex">
               
             <input onChange={e=>setPayment(e.target.value)} value="pytm" type="radio" name="paymentMd" id="PAYTM"/>
               <label className="pLabel" htmlFor="PAYTM">PAYTM</label>
             </div>
             <div className="flex">
               
             <input onChange={e=>setPayment(e.target.value)} value="ponePay" type="radio" name="paymentMd" id="phonePay"/>
               <label className="pLabel" htmlFor="phonePay">PONE PAY</label>
             </div>
             <div className="flex">
             <input onChange={e=>setPayment(e.target.value)}  value="gPay" type="radio" name="paymentMd" id="gPay"/>
               <label className="pLabel" htmlFor="gPay">G PAY</label>
             </div>
             
             
             </div>
             <div className="width-full">
               <button className="btn btn-success back-btn">
               BACK

               </button>
               <button type="submit" className="btn btn-success checkout-btn">
               CHECKOUT

               </button>
             </div>

               </div>
            </form>

        </div>
    


    )

}
export default Place_order;