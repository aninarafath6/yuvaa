import React,{useEffect,useState,useRef}  from 'react';
import "./Edit.css";
import {useParams} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
function Add(props) {
    const [alradyData,setAlradyData] = useState({});
    let {id} = useParams();
    useEffect(()=>{

        axios.get('ForEditData/'+id).then((res)=>{
            setAlradyData(res.data);
 
        })
    },[])
 const onImageChangeHndiler =event=>{
     console.log(imgRef.current);
     imgRef.current.src=URL.createObjectURL(event.target.files[0])
     imgRef1.current.src=URL.createObjectURL(event.target.files[1])
     imgRef2.current.src=URL.createObjectURL(event.target.files[2])
     imgRef3.current.src=URL.createObjectURL(event.target.files[3])

 }

 const imgRef = useRef();
 const imgRef1 = useRef();
 const imgRef2 = useRef();
 const imgRef3 = useRef();
    return (
        <div>
        <div className="container">
           
            <form className="addForm" action={"http://localhost:3001/editProdect/"+alradyData._id} method="post"  encType="multipart/form-data">
                <label className="hLabel" htmlFor="">EDIT THIS PRODECT</label>
                <label htmlFor="" className="label-for-edit-form">Prodect Name</label>
                <input required name="name"  className="pNameInp addInp" type="text" placeholder="prodect name" defaultValue={alradyData.name}/> <br/>
                <label htmlFor="" className="label-for-edit-form">Prodect MRP Price</label>
                <input name="canPrice"     required     className="mrpPrice addInp" type="number"  placeholder="MRP price" defaultValue={alradyData.canPrice}/>  <br/>
                <label htmlFor="" className="label-for-edit-form">Prodect Offer Price</label>
                <input required name="offPrice"  className="offerPrice addInp" type="number" placeholder="Offer price"  defaultValue={alradyData.offPrice}/> <br/>
                <label htmlFor="" className="label-for-edit-form">Prodect Offer %</label>
                <input required name="off"  className="offerPrice addInp" type="text" placeholder="off%"  defaultValue={alradyData.off}/> <br/>
                <label htmlFor="" className="label-for-edit-form">Catogary</label>
                <input required name="catogary"  autoComplete="on" className="addInp" type="text" placeholder="catogary"  defaultValue={alradyData.catogary}/> <br/>      
                <label htmlFor="" className="label-for-edit-form">Keywords</label>      
               <textarea required name="keywords" id="key" className="addInp"  cols="7" rows="5" placeholder="key words"  defaultValue={alradyData.keywords}></textarea>
               <label htmlFor="" className="label-for-edit-form">Discription</label>
               <textarea required name="disc" className="addInp"  cols="3" rows="5" placeholder="discription"  defaultValue={alradyData.disc}></textarea>
                <div  className="button-wrap">
                <img ref={imgRef} className=" prodImg pimg" src={"http://localhost:3001/prodects-images/"+alradyData._id+"_0.jpg"} alt=""/> 
                <img ref={imgRef1} className=" prodImg pimg" src={"http://localhost:3001/prodects-images/"+alradyData._id+"_1.jpg"} alt=""/> 
                <img ref={imgRef2} className=" prodImg pimg" src={"http://localhost:3001/prodects-images/"+alradyData._id+"_2.jpg"} alt=""/> 
                <img ref={imgRef3} className=" prodImg pimg" src={"http://localhost:3001/prodects-images/"+alradyData._id+"_3.jpg"} alt=""/> 

                    <input multiple="true"  name="img" className="fileBtn" id="upload" type="file" onChange={onImageChangeHndiler}   />
                    <label className="isHome" htmlFor="isHome">Visibile In Home</label><input value="true" name="isHome" type='radio'/> 
                    <label className="isHome" htmlFor="isHome">Hidden In Home</label><input  value="false" name="isHome" type='radio'/>
                    
                </div>
               
                 <input  className=" addInp submit" type="submit" value="Edit This Prodect"/>
                 
                
            </form>
       
        </div>
        
            
        </div>
    );
}

export default Add;