import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/StartScreen.css";

export default function StartScreen(props) {
  let navigate = useNavigate(); 

  const [name, setName] = useState("");

  function handleNameClick() {
    if (name.length > 0) {
      console.log("Name: " + name);
      navigate("/golf-app/home");
    } else {
      alert("Please enter your name");
    }
  }

  return (
    <div className="card start-card">
      <h1>Start Screen</h1>
      <p>Enter your name to start the game</p>
      <input
        className="start-name-input"
        name="name"
        type="text"
        value={name}
        placeholder="Player name"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="btn btn-primary start-button"
        onClick={handleNameClick}
      >
        Start
      </button>
    </div>
  );
}
