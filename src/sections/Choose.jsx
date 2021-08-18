import React from "react";
import choose from "../config/choose";

export default function Choose() {
  return (
    <section className="Choose">
      <h2>WHY CHOOSE US</h2>
      <h1>Why We Are Best</h1>
      <div className="list">
        {choose.map(({ Icon, title, description }) => (
          <div className="item">
            <Icon />
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
