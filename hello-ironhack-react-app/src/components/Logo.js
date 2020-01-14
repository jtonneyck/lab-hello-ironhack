import React from 'react';

import './Logo.css';

function Logo(props){
    return(<div className='logo'><img className='logo' src={props.image} alt='options'/></div>);
}

export default Logo;