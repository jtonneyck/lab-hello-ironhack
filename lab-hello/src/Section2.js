import React from 'react'

function BottomSection(){
    return (
        <div className='lightzone'>
            <div className='feature'>
                <img src='/icon1.png' alt='icon'></img>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className='feature'>
                <img src='/icon2.png' alt='icon'></img>
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className='feature'>
                <img src='/icon3.png' alt='icon'></img>
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the components.</p>
            </div>
            <div className='feature'>
                <img src='/icon4.png' alt='icon'></img>
                <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
    )
}

export default BottomSection