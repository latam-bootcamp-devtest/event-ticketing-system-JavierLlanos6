import React, { useState, useEffect } from "react";
import "./App.css";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import Details from "./Details";
const EventList = () => {
  const [event, setEvent] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(
          "https://goldfish-app-fbulw.ondigitalocean.app/Event?applicationId=0e96f4c5-1b6d-4da4-bef3-3ea0c0965c0e"
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

  function myFunction() {
    <Details />;
  }
  if (load) return <p>Loading...</p>;

  return (
    <div>
      <h1>Upcoming Events</h1>
      <div class="container">
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
                <button onClick={myFunction}>Details</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default EventList;
