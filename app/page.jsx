"use client";

import React, { useEffect, useState } from "react";
import EventList from "./components/EventList";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebase";

function HomePage() {
    const [events, setEvents] = useState([]);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [creator, setCreator] = useState("");
    const [description, setDescription] = useState("");

    async function getData() {
        const eventsCollectionRef = collection(db, "events");

        const result = await getDocs(eventsCollectionRef);

        const updatedEvents = [];

        result.docs.forEach((doc) => {
          updatedEvents.push(doc.data());
        });

        setEvents(updatedEvents);
    }

    async function eventToDB(event) {
        const docRef = doc(db, "events", event.id);
        await setDoc(docRef, event);
    }

    useEffect(() => {
        getData();
    }, []);

    async function handleClick() {
        const newEvent = {
            id: date,
            title: title,
            date: date,
            location: location,
            creator: creator,
            description: description,
            attendeesCount: 1,
            attendeesList: [creator],
        };

        await eventToDB(newEvent);

        setEvents([...events, newEvent]);

        setTitle("");
        setDate("");
        setLocation("");
        setCreator("");
        setDescription("");
    }

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }
    function handleDateChange(e) {
      setDate(e.target.value);
    }
    function handleLocationChange(e) {
      setLocation(e.target.value);
    }
    function handleCreatorChange(e) {
      setCreator(e.target.value);
    }
    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    return (
        <div>
            <div class="new-event">
                <h1>Create an event</h1>
                <input
                    value={title}
                    placeholder="Enter title"
                    onChange={handleTitleChange}
                />
                <input
                    value={date}
                    placeholder="Enter date"
                    onChange={handleDateChange}
                />
                <input
                    value={location}
                    placeholder="Enter location"
                    onChange={handleLocationChange}
                />
                <input
                    value={creator}
                    placeholder="Enter creator"
                    onChange={handleCreatorChange}
                />
                <textarea
                    value={description}
                    placeholder="Enter description"
                    onChange={handleDescriptionChange}
                />
                <button onClick={handleClick}>Submit</button>
            </div>
            <EventList events={events} />
        </div>
    );
}

export default HomePage;