import React from 'react';

import './Hamburger.css';

function Hamburger(props){
    return(<div className='hamburger'><img src={props.image} alt='options'/></div>);
}

export default Hamburger;