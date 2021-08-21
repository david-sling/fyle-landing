import React from "react";
import growth from "../config/growth";

export default function Growth() {
  return (
    <section className="Growth">
      <h2>Experts growth</h2>
      <h1>Our Company Growth</h1>
      <div className="list">
        {growth.map(({ Icon, number, title }, idx) => (
          <div className="item" key={idx}>
            <Icon />
            <h3>{number}+</h3>
            <p>{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
