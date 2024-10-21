import React from "react";

function Event({ event }) {
  
    return (
      <div class="event-page">
        <div class = "event-top">
          <div class="event-image">
            <img src="asdas" />
          </div>
  
          <div class = "event-details">
            <h1 id="event-title">{event.title}</h1>
            <h4 id="event-sched-start">Date: {event.date}</h4>
            <h4 id="event-location">Location: {event.location}</h4>
            <h4 id="event-organizer">Creator: {event.creator}</h4>
          </div>
          <div class="num-of-attendies">
            <h4>Number of Attendies:</h4>
            <h1>{event.attendeesCount}</h1>
          </div>
        </div>
        <div class="event-description">
          <h4>Description:</h4>
          <p>{event.description}</p>
        </div>
  
        <div class="event-join">
          <button>Join</button>
        </div>
  
        <div class="event-attendies">
          <h3>List of Attendies:</h3>
          <div class="event-names">
            {event.attendeesList.map((names) => {return <h5>{names}</h5>;})}
          </div>
        </div>
      </div>
    );
}

// function Event({event}){
//     const [attendeesCount, setAttendeesCount] = useState(event.attendeesCount);
//     const [attendeesList, setAttendeesList] = useState(event.attendeesList);
//     const [username, setUsername] = useState("");
//     const [input, setInput] = useState(false);

//     async function handleClick() {
//         setAttendeesCount(attendeesCount + 1);
//         setAttendeesList([...attendeesList, username]);
        
//         const eventRef = doc(db, "events", event.id);

//         await updateDoc(eventRef, {
//             attendeesCount: attendeesCount,
//             attendeesList: attendeesList,
//         });

//         setUsername("");
//     }

//     function handleUsernameChange(e) {
//         setUsername(e.target.value);
//     }

//     return (
//         <div className="event">
//             <h1>{event.title}</h1>
//             <p>Date: {event.date}</p>
//             <p>Location: {event.location}</p>
//             <p>Creator: {event.creator}</p>
//             <p>Description: {event.description}</p>
//             <p>Number of Attendees: {event.attendeesCount}</p>
//             <p>List of Attendees:</p>
//             {event.attendeesList.map((name) => {return <p>   - {name}</p>;})}
//             <button onClick={() => setInput(!input)}>Join</button>
//                         <div>
//                             <h2>Input username</h2>
//                             <input
//                                 value={username}
//                                 placeholder="Enter username"
//                                 onChange={handleUsernameChange}
//                             />
//                             <button onClick={handleClick}>Submit</button>
//                         </div>
//         </div>
//     );
// }

export default Event;