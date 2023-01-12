import React, { useEffect, useState } from "react";

export default function StartScreen(props) {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(props.name);
  }, [props.name]);

  return (
    <div>
      <h1>Start Screen</h1>
      <h2>{name}</h2>
    </div>
  );
}
