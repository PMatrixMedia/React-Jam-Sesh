//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <header className="header">
    <h1>Band Browser!</h1>
    <h2>Click on any Instrument to search for BandMates!</h2>
  </header>
);
export default Jumbotron;