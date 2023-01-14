import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/PlayerNames.css";
import "../styles/PlayerNames.css";

export default function PlayerNames(props) {
  const [playerCount, setPlayerCount] = useState(1);
  const [playerNames, setPlayerNames] = useState([]);
  const navigate = useNavigate();

  const doThis = () => {
    let playerCount = document.getElementById("playerCount").value;
    setPlayerCount(playerCount);
    console.log(playerCount);
    navigate("/golf-app/home", { state: { playerCount } });
  };



    return (
      <div id="startCard" className="card start-card">
        <h1>Golf Score Card</h1>
        <div id="startCardWrapper">
          <p>Number of players?</p>
          <select id="playerCount">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <p>Please enter player name(s)</p>
          <button className="btn btn-primary" onClick={doThis}>
            Start
          </button>
        </div>
      </div>
    );
  };
