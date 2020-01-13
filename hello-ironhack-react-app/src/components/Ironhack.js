import React from 'react';

import './Ironhack.css';

import IronhackHeader from './IronhackHeader.js';
import IronhackInfo from './IronhackInfo.js';
import IronhackButton from './IronhackButton.js';

function Ironhack(props){
    // basically three vertical elements
    return (
        <div className="ironhack">
            <div className='content'>
                <IronhackHeader img_logo={props.logo_image} img_menu={props.menu_image}></IronhackHeader>
                <IronhackInfo title={props.title} text={props.text}></IronhackInfo>
                <IronhackButton text="Awesome!"></IronhackButton>
            </div>
        </div>
    );

}

export default Ironhack;