import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/PlayerNames.css";
import "../styles/PlayerNames.css";

export default function PlayerNames(props) {
  const [playerCount, setPlayerCount] = useState(1);
  const navigate = useNavigate();

  const handleNameandCountChange = () => {
    let playerCount = document.getElementById("playerCount").value;
    let playerNameInput = document.getElementsByClassName("player-name-input");
    let players = [];
    console.log(playerCount);
    for (let i = 0; i < playerNameInput.length; i++) {
      if (playerNameInput[i].value.length >= 1) {
        players.push(playerNameInput[i].value);
      } 
    }
    if (players.length === parseInt(playerCount)) {
      navigate("/golf-app/scorecard", {
        state: { playerCount: playerCount, players: players },
      });
    } else {
      alert("Please enter a name for all players!");
    }
  };


  const handleCountChange = () => {
    let playerCount = document.getElementById("playerCount").value;
    setPlayerCount([playerCount]);
    console.log(playerCount);
  };

  const InputField = () => {
    return (
      <div>
        <input
          type="text"
          className="form-control form-control-sm player-name-input"
          placeholder="Player Name"
        />
      </div>
    );
  };

  const handleTest = () => {
    let players = [];
    let playerNameInput = document.getElementsByClassName("player-name-input");
    for (let i = 0; i < playerNameInput.length; i++) {
      console.log("Player " + (i + 1) + ": " + playerNameInput[i].value);
      players.push(playerNameInput[i].value);
    }
    console.log(playerCount);
  };

  return (
    <div id="startCard" className="card start-card">
      <h1>Golf Score Card</h1>
      <div id="startCardWrapper">
        <p>Number of players?</p>
        <select id="playerCount" onChange={handleCountChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <p>Please enter player name(s)</p>
        {playerCount >= 1 ? <InputField /> : null}
        {playerCount >= 2 ? <InputField /> : null}
        {playerCount >= 3 ? <InputField /> : null}
        {playerCount >= 4 ? <InputField /> : null}
        <button className="btn btn-primary" onClick={handleNameandCountChange}>
          Start
        </button>
        {/* <button className="btn btn-primary testing" onClick={handleTest}>
          test
        </button> */}
      </div>
    </div>
  );
}
