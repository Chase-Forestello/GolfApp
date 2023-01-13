import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/PlayerNames.css";
import players from "../data/players.json";
import { Dropdown } from "bootstrap";

export default function PlayerNames(props) {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  function handleNameClick() {
    if (name.length > 0) {
      console.log("Name: " + name);
      // navigate("/golf-app/home");
      console.log(players);
      players.push({name: {name}});
      // navigate("/golf-app/course-selection");
    } else {
      alert("Please enter your name");
    }
  }

  function handleCountClick() {
    let count = document.getElementById("playerCount").value;
    setCount(count);
    console.log(count);
  }

  function NameInputs() {
    let inputs = [];
    for (let i = 0; i < count; i++) {
      inputs.push(
        <input
          className="start-name-input"
          name="name"
          key={i}
          type="text"
          placeholder="Player name"
          onChange={handleCountClick}
        />
      );
    }
    return inputs;
  }

  return (
    <div className="card start-card">
      <h1>Golf Score Card</h1>
      <p>Number of players?</p>
      <select id="playerCount" onClick={handleCountClick}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p>Please enter player name(s)</p>
      <NameInputs/>
      <button
        className="btn btn-primary start-button"
        onClick={handleNameClick}
      >
        Start
      </button>
    </div>
  );
}
