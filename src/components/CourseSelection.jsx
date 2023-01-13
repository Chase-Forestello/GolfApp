import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/PlayerNames.css";

export default function PlayerNames(props) {
  let navigate = useNavigate();

  const [name, setName] = useState("");

  function handleNameClick() {
    if (name.length > 0) {
      console.log("Name: " + name);
      // navigate("/golf-app/home");
      navigate("/golf-app/course-selection");
    } else {
      alert("Please enter your name");
    }
  }

  return (
    <div className="card start-card">
      <h1>Golf Score Card</h1>
      <p>Select a course</p>
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
