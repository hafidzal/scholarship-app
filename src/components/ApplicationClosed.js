import React from 'react'
import backgroundImageApply from '../images/BG-Apply.jpg'

const ApplicationClosed = () =>{
    return(
        <div className="backgroundApply" style={{backgroundImage: `url(${backgroundImageApply})` }}>
            <h1>Applications are now closed</h1>
            <h1>We'll See You Again Next</h1>
        </div>
    );
}

export default ApplicationClosed;