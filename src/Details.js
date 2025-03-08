import React, { useState, useEffect } from "react";
import "./Details.css";
const Details = () => {
  const [event, setEvent] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(
          `https://goldfish-app-fbulw.ondigitalocean.app/=${event}`
        );
        if (!res.ok) throw new Error("not found");
        const data = await res.json();
        setEvent(data);
        return data?.map((artists) => ({
          eventName: artists.eventName,
          eventDate: artists.eventDate,
          eventImage: artists.eventImage,
          ticketPrice: artists.ticketPrice,
        }));
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
        <button>Event Details</button>
      </div>
      <div>
        <image></image>
      </div>
      <div>
        <h3>Event: {event}</h3>
        <p>Date: {event}</p>
        <p>Location: {event}</p>
        <h3>Event Description: {event}</h3>
        <p>Ticket price: {event}</p>
        <p>Available seats: {event}</p>
        <button>Book Ticket</button>
      </div>
    </body>
  );
};

export default Details;
