import React from "react";
import { ReactComponent as Quotes } from "../assets/quotes.svg";

export default function Feedback() {
  return (
    <section className="Feedback">
      <h2>client's feedback</h2>
      <h1>people say's about us!</h1>
      <div className="quote">
        <Quotes />
        <p>
          Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is
          reproduced below for those interested. Sections Bonorum et Malorum
          original.
        </p>
      </div>
      <h6>
        <span>JANNAT TUMPA</span> - COO, AMERIMAR ENTERPRISES, INC.
      </h6>
    </section>
  );
}
