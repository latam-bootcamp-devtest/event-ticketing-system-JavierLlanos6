import React, { useEffect, useState } from "react";
import EvenList from "./EventList";
import "./App.css";
import Details from "./Details";

function App() {
  return (
    <div>
      <head>
        <h1>Upcoming Events</h1>
      </head>
      <title>DevTes</title>
      <body>
        <Details />
      </body>
    </div>
  );
}

export default App;
