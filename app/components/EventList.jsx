import React from "react";
import Event from "./Event";

function EventList({events}){
    return (
        <div>
            {events.map((event) => {return <Event key={event.id} event={event} />;})}
        </div>
    );
}

export default EventList;