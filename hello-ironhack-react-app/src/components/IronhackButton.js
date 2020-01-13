import React from 'react';

import './IronhackButton.css';

function IronhackButton(props){
    return (<button className='ironhackbutton'>{props.text}</button>);
}

export default IronhackButton;