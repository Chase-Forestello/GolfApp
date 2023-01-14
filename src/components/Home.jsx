import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Home(props) {
  const {state} = useLocation();
  console.log(state);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
