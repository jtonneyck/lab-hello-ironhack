import React from 'react';
import './InfoList.css'; // import the CSS
import Info from './Info.js';

function InfoList(props){
    // assuming props is an array of Info objects
    return(
        <div className="info-list">
            {props.infos.map((info)=>{
                    return <Info image={info.image} title={info.title} text={info.text}/>;
                })
            };
        </div>
    );
}

export default InfoList;