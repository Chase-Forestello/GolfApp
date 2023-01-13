import React, { useEffect, useState } from "react";
import "../styles/PlayerNames.css";
import {NavLink, Link} from 'react-router-dom';

export default function Header(props) {
    return (
<nav className="navbar navbar-expand-lg bg-light">
<div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/golf-app/home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/golf-app/start">Start</Link>
      </li>
    </ul>
  </div>
</div>
</nav>
    );
}