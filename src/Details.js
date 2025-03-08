import React, { useState, useEffect } from "react";
import "./Details.css";
import EventList from "./EventList";
const Details = () => {
  const [event, setEvent] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(
          `https://goldfish-app-fbulw.ondigitalocean.app/Event/6b8263b6-2447-446e-beaf-c0e20593632c/applicationId=0e96f4c5-1b6d-4da4-bef3-3ea0c0965c0e`
        );
        if (!res.ok) throw new Error("not found");
        const data = await res.json();
        setEvent(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    };
    fetchEvent();
  }, []);

  if (load) return <p>Loading...</p>;

  return (
    <body>
      <div>
        <button onClick={useEffect}>Event Details</button>
      </div>
      {/* <div>
        {event.length === 0 ? (
          <p>there aren’t events available.</p>
        ) : (
          <ul className="TarjetList">
            {event.map((event) => (
              <li className="Box" key={event.id}>
                <div className="imageBox">
                  <img src={event.image} alt={event.image} />
                </div>
                <p>
                  Event:
                  {event.name}
                </p>
                <p>
                  Date:
                  {event.date}
                </p>
                <p>
                  Available seats:
                  {event.price}
                </p>
                <button>Details</button>
              </li>
            ))}
          </ul>
        )}
      </div> */}
      <div className="containerDetail">
        <div className="imageDetail">
          <image></image>
        </div>
        <div className="descDetail">
          <h3>Event: {event.id}</h3>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <h3>Event Description: {event.description}</h3>
          <p>Ticket price: {event.price}</p>
          <p>Available seats: {event.price}</p>
          <button>Book Ticket</button>
        </div>
      </div>
    </body>
  );
};

export default Details;
