import React, { useEffect, useState } from "react";
import "../styles/StartScreen.css";

export default function StartScreen(props) {
  const [name, setName] = useState("");

  return (
    <div className="card start-card">
      <h1>Start Screen</h1>
      <p>Enter your name to start the game</p>
      <input
        class="start-name-input"
        name="name"
        type="text"
        value={name}
        placeholder="Player name"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        class="btn btn-primary start-button"
        onClick={() => props.onStart(name)}
      >
        Start
      </button>
    </div>
  );
}
