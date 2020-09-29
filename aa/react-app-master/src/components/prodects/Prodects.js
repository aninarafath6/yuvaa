import React from 'react';
import ProdectData  from '../ProdectsData/ProdectData'

function Prodects(props) {
    return (
        <div>
           
            
            <ProdectData data={props.data}/>         
        </div>
    );
}

export default Prodects;