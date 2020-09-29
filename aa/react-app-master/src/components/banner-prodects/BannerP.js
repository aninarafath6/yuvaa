import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import './bProdects.css';



function BannerP() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item >

        <div className="mainB cli">
            <div className="">
                <ul className="prodectsB">
                    <li className=" liBanner">
                    <div className="img">
                    <img  src="https://rukminim1.flixcart.com/image/150/150/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70" alt=""/>  
                        
                    <div className="tittle">
                            laptops/acssoserys
                        </div>
                        <div className="off">
                            extra / 15% off 
                        </div>
                        <div className="trand">
                            trandy prodects
                        </div>
                        </div>
                       

                    </li>
                    <li className=" liBanner">
                    <div className="img">
                    <img  src="https://rukminim1.flixcart.com/image/150/150/j1nvwcw0/memory-card/microsdxc/d/n/x/samsung-mb-mc64ga-in-original-imaet6zagkfzn2nw.jpeg?q=70" alt=""/>  
                        
                    <div className="tittle">
                            laptops/acssoserys
                        </div>
                        <div className="off">
                            extra / 15% off 
                        </div>
                        <div className="trand">
                            trandy prodects
                        </div>
                        </div>
                       

                    </li>
                    <li className=" liBanner">
                    <div className="imgDiv">
                    <img className="img"  src="https://rukminim1.flixcart.com/image/312/312/k0vbgy80/headphone/6/j/z/dilurban-i11-wireless-5-0-with-case-bluetooth-headset-with-mic-original-imafkgczfbejrwgt.jpeg?q=70" alt=""/>  
                        
                    <div className="tittle">
                            laptops/acssoserys
                        </div>
                        <div className="off">
                            extra / 15% off 
                        </div>
                        <div className="trand">
                            trandy prodects
                        </div>
                        </div>
                       

                    </li>
                    <li className=" liBanner">
                    <div className="img">
                    <img  src="https://rukminim1.flixcart.com/image/150/150/chopper/p/u/k/new-handy-chopper-pigeon-original-imaemn3bdyjfrthy.jpeg?q=70" alt=""/>  
                        
                    <div className="tittle">
                            laptops/acssoserys
                        </div>
                        <div className="off">
                            extra / 15% off 
                        </div>
                        <div className="trand">
                            trandy prodects
                        </div>
                        </div>
                       

                    </li>
                  
                    
                   
                    
                    
                </ul>
            </div>
        </div>
        
        </Carousel.Item>
        <Carousel.Item>
        <div className="mainB cli">
            <div className="">
                <ul className="prodectsB">
                    <li className=" liBanner">
                    <div className="img">
                    <img  src="https://rukminim1.flixcart.com/image/150/150/jhql8cw0/headphone/9/p/e/acer-predator-galea-500-original-imaf5zx5e8ypbjpg.jpeg?q=70" alt=""/>  
                        
                    <div className="tittle">
                            laptops/acssoserys
                        </div>
                        <div className="off">
                            extra / 15% off 
                        </div>
                        <div className="trand">
                            trandy prodects
                        </div>
                        </div>
                       

                    </li>
                    <li className=" liBanner">
                    <div className="img">
                    <img  src="https://rukminim1.flixcart.com/image/150/150/k7f34i80/smart-band-tag/k/h/v/xmsh07hm-mi-original-imafpnxz4vgnzabw.jpeg?q=70" alt=""/>  
                        
                    <div className="tittle">
                            laptops/acssoserys
                        </div>
                        <div className="off">
                            extra / 15% off 
                        </div>
                        <div className="trand">
                            trandy prodects
                        </div>
                        </div>
                       

                    </li>
                    <li className=" liBanner">
                    <div className="imgDiv">
                    <img className="img"  src="https://rukminim1.flixcart.com/image/150/150/jp8ngcw0/computer/m/g/h/microsoft-na-2-in-1-laptop-original-imafbgqzhjhmthh2.jpeg?q=70" alt=""/>  
                        
                    <div className="tittle">
                            laptops/acssoserys
                        </div>
                        <div className="off">
                            extra / 15% off 
                        </div>
                        <div className="trand">
                            trandy prodects
                        </div>
                        </div>
                       

                    </li>
                    <li className=" liBanner">
                    <div className="img">
                    <img  src="https://rukminim1.flixcart.com/image/150/150/jyxaw7k0/dslr-camera/w/a/m/nikon-d3500-d3500-nikon-original-imafhr8tdrzvavse.jpeg?q=70" alt=""/>  
                        
                    <div className="tittle">
                            laptops/acssoserys
                        </div>
                        <div className="off">
                            extra / 15% off 
                        </div>
                        <div className="trand">
                            trandy prodects
                        </div>
                        </div>
                       

                    </li>
                  
                    
                   
                    
                    
                </ul>
            </div>
        </div>
        
        </Carousel.Item>
        <Carousel.Item>
        <div className="mainB cli">
            <div className="">
                <ul className="prodectsB">
                    <li className=" liBanner">
                    <div className="img">
                    <img  src="https://rukminim1.flixcart.com/image/150/150/jhql8cw0/headphone/9/p/e/acer-predator-galea-500-original-imaf5zx5e8ypbjpg.jpeg?q=70" alt=""/>  
                        
                    <div className="tittle">
                            laptops/acssoserys
                        </div>
                        <div className="off">
                            extra / 15% off 
                        </div>
                        <div className="trand">
                            trandy prodects
                        </div>
                        </div>
                       

                    </li>
                    <li className=" liBanner">
                    <div className="img">
                    <img  src="https://rukminim1.flixcart.com/image/150/150/k7f34i80/smart-band-tag/k/h/v/xmsh07hm-mi-original-imafpnxz4vgnzabw.jpeg?q=70" alt=""/>  
                        
                    <div className="tittle">
                            laptops/acssoserys
                        </div>
                        <div className="off">
                            extra / 15% off 
                        </div>
                        <div className="trand">
                            trandy prodects
                        </div>
                        </div>
                       

                    </li>
                    <li className=" liBanner">
                    <div className="imgDiv">
                    <img className="img"  src="https://rukminim1.flixcart.com/image/150/150/jp8ngcw0/computer/m/g/h/microsoft-na-2-in-1-laptop-original-imafbgqzhjhmthh2.jpeg?q=70" alt=""/>  
                        
                    <div className="tittle">
                            laptops/acssoserys
                        </div>
                        <div className="off">
                            extra / 15% off 
                        </div>
                        <div className="trand">
                            trandy prodects
                        </div>
                        </div>
                       

                    </li>
                    <li className=" liBanner">
                    <div className="img">
                    <img  src="https://rukminim1.flixcart.com/image/150/150/jyxaw7k0/dslr-camera/w/a/m/nikon-d3500-d3500-nikon-original-imafhr8tdrzvavse.jpeg?q=70" alt=""/>  
                        
                    <div className="tittle">
                            laptops/acssoserys
                        </div>
                        <div className="off">
                            extra / 15% off 
                        </div>
                        <div className="trand">
                            trandy prodects
                        </div>
                        </div>
                       

                    </li>
                  
                    
                   
                    
                    
                </ul>
            </div>
        </div>
        
        </Carousel.Item>
      </Carousel>
    );
  }

  export default BannerP;