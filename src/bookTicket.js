import React, { useState, useEffect } from "react";
import "./Details.css";
import EventList from "./EventList";
const bookTicket = () => {
  return (
    <body>
      <div>
        <button onClick={useEffect}>Event Details</button>
      </div>
      <div className="containerDetail">
        <div className="imageDetail">
          <image></image>
        </div>
        <div className="descDetail">
          <h3>Event: </h3>
          <p>Date: </p>
          <p>Location: </p>
          <div className="buyT">
            <button>Book Ticket</button>
          </div>
        </div>
      </div>
    </body>
  );
};

export default bookTicket;
