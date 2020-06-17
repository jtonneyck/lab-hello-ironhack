import React from 'react';
import Heading from './Heading';
import Description from './Description';
import './IntroHeader.css';

function IntroHeader(props) {
    return (
        <div className="introduction">
            <Heading title="Say hello to ReactJS" />
            <Description text="You will learn a Frontend framework from scratch,to become an Ninka Developer"/>
            <button>Awesome!</button>
        </div>
    );
}

export default IntroHeader;