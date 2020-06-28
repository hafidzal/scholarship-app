import React from 'react'
import backgroundImage from '../images/BG-Head.jpg'
import graduateLogo from '../images/icon-graduate.png'

const Welcome = () =>{
    return(
        <div className="welcome" style={{backgroundImage: `url(${backgroundImage})` }}>
            <div className="row-flex">
                <div className="row">
                    <div className="first-column">
                        <h1 id="welcome-title">Congratulations Sea Scholarship 2019 Awardees!</h1>
                        <h4 id="welcome-subtitle">The Sea Scolarship Comittee is proud to announce the 2019 Academic Year Sea Scholarship recipients.
                            Final award email notifications were sent on October 17, 2019. </h4>
                    </div>
                    <div className="second-column">
                        <img src={graduateLogo} className="graduate-logo" alt="graduate logo" />
                    </div>
                </div>
            </div>
        </div>

        //  <div className="welcome">
        //     <h1 className="welcome-title">hadau</h1>
        //     <img src={backgroundImage} className="welcome-img" alt="background" />
        //  </div>
    );
}

export default Welcome;