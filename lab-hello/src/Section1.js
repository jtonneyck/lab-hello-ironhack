import React from 'react'
import Nav from './NavSection'

function TopSection(){
    return (
        <div className='darkzone'>
            <Nav/>
            <div className='container'>
                <h1>Say hello to</h1>
                <h1>ReactJS</h1>
                <h3>You will learn a front-end framework from scratch, to become a Ninja Developer.</h3>
                <button>Awesome!</button>
            </div>
        </div>
    )
}

export default TopSection