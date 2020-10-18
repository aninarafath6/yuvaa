import React,{useRef}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Add.css";

function Add(props) {
 
    const imgRef = useRef();
    const imgRef1 = useRef();
    const imgRef2 = useRef();
    const imgRef3 = useRef();


    const onImageChangeHndiler =event=>{
        
        imgRef.current.src=URL.createObjectURL(event.target.files[0])
        imgRef1.current.src=URL.createObjectURL(event.target.files[1])
        imgRef2.current.src=URL.createObjectURL(event.target.files[2])
        imgRef3.current.src=URL.createObjectURL(event.target.files[3])
   
    }
    return (
        <div>
        <div className="container">
           
            <form className="addForm" action="http://localhost:3001/addProdects" method="post"  encType="multipart/form-data">
                <label className="hLabel" htmlFor="">INSERT YOUR PRODECTS</label>
                <input required name="name"  className="pNameInp addInp" type="text" placeholder="prodect name"/> <br/>
                <input name="canPrice"     required     className="mrpPrice addInp" type="number"  placeholder="MRP price"/>  <br/>
                <input required name="offPrice"  className="offerPrice addInp" type="number" placeholder="Offer price"/> <br/>
                <input required name="off"  className="offerPrice addInp" type="text" placeholder="off%"/> <br/>
                <input required name="catogary"  autoComplete="on" className="addInp" type="text" placeholder="catogary"/> <br/>            
               <textarea required name="keywords" id="key" className="addInp"  cols="7" rows="1" placeholder="key words"></textarea>
               <textarea required name="disc" className="addInp"  cols="3" rows="5" placeholder="discription"></textarea>
                <div  className="button-wrap">
                <img ref={imgRef} className=" prodImg pimg" src="" alt=""/> 
                <img ref={imgRef1} className=" prodImg pimg" src="" alt=""/> 
                <img ref={imgRef2} className=" prodImg pimg" src="" alt=""/> 
                <img ref={imgRef3} className=" prodImg pimg" src="" alt=""/> 

                    <input onChange={onImageChangeHndiler}   multiple="true" required name="img" className="fileBtn" id="upload" type="file"   /><br/>
                    <label className="isHome" htmlFor="isHome">Visibile In Home</label><input value="true" name="isHome" type='radio'/> 
                    <label className="isHome" htmlFor="isHome">Hidden In Home</label><input value="false" name="isHome" type='radio'/>
                    
                    
                </div>
               
                 <input  className=" addInp submit" type="submit" value="Add This Prodect"/>
                 
                
            </form>
       
        </div>
        
            
        </div>
    );
}

export default Add;