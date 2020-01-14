import React from 'react';

import './Ironhack.css';

import IronhackHeader from './IronhackHeader.js';
import IronhackInfo from './IronhackInfo.js';
import IronhackButton from './IronhackButton.js';

function Ironhack(props){
    // basically three vertical elements
    return (
        <div className="ironhack">
            <div height='20px'></div>
            <div className='content'>
                <IronhackHeader img_logo={props.logo_image} img_menu={props.menu_image}></IronhackHeader>
                <IronhackInfo title={props.title} text={props.text} button_text="Awesome!"></IronhackInfo>
                {/* <IronhackButton text="Awesome!"></IronhackButton> */}
            </div>
        </div>
    );

}

export default Ironhack;