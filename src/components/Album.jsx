import React from "react";
import { useState } from "react";

export default function Album({ album = [] }) {
  const [active, setActive] = useState(0);
  return (
    <div id="Album">
      <div className="left">
        <img src={album[active].image} alt="" />
      </div>
      <div className="right">
        {album.map(({ title, description }, idx) => (
          <div
            className="item"
            id={active == idx && "active"}
            onClick={() => setActive(idx)}
          >
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
