import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Add.css";

function Add(props) {
 

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
                   
                    <input  required name="img" className="fileBtn" id="upload" type="file"   />
                    
                </div>
               
                 <input  className=" addInp submit" type="submit" value="Add This Prodect"/>
                 
                
            </form>
       
        </div>
        
            
        </div>
    );
}

export default Add;