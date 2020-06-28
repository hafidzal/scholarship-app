import React, { Component } from 'react'
import seniorIcon from '../images/icon-senior.png'
import freshmanIcon from '../images/icon-freshmen.png'
import timeline1 from '../images/Timeline-1.png'
import timeline2 from '../images/Timeline-2.png'
import timeline3 from '../images/Timeline-3.png'
import timeline4 from '../images/Timeline-4.png'


class Timeline extends  Component  {
    render(){
        return(
            <div className="timeline-wrapper">
                <h2>Timeline</h2>
                <div className="row-timeline">
                    <div className="row">
                        <div className="column-1">
                            <h2>Registration</h2>
                            <img src={timeline1} className="card-avatar" alt="timeline-1" />
                        </div>
                        <div className="column-2" >
                            <h2>Essay and CV Screening</h2>
                            <img src={timeline2} className="card-avatar" alt="timeline-2" />
                        </div>
                        <div className="column-3">
                            <h2>On-Campus Interview</h2>
                            <img src={timeline3} className="card-avatar" alt="timeline-2" />
                        </div>
                        <div className="column-4">
                            <h2>Announcement of Selected Scholars</h2>
                            <img src={timeline4} className="card-avatar" alt="timeline-2" />
                    </div>
                </div>
            </div>
            </div>
        );
    }
    
}

  
export default Timeline