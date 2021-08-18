import React from "react";
import Carousal from "../components/Carousal";

import carousal from "../config/carousal";

export default function Services() {
  return (
    <section className="Services">
      <div className="top">
        <div className="left">
          <h2>WHAT WE DO</h2>
          <h1>Services provide for you</h1>
        </div>
        <div className="right">
          <p>
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
            lacus nec risus finibus feugiat et fermentum
          </p>
        </div>
      </div>
      <div className="bottom">
        <Carousal carousal={carousal} />
      </div>
    </section>
  );
}
