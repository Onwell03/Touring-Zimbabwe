import React from "react";

const Events = (props) => {
    return (
        <div className="event-card">
            <div className="event-body">
                <img src={props.img} />
                <h2 className="event-title">{props.title}</h2>
                <p className="event-dexcription">{props.description}</p>
                <button className="view-more">View More</button>
            </div>
        </div>
    )
}

export default Events;
