import React from 'react'

const Card = (props) => {
    return(
        <div className="card-wrapper">
            <img src={props.avatar} className="card-avatar" alt="avatar" />
            <h3>{props.title}</h3>
           <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
    );
}

export default Card;