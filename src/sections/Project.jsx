import React from "react";
import Album from "../components/Album";
import album from "../config/album";

export default function Project() {
  return (
    <section className="Project">
      <div className="top">
        <h2>Our project</h2>
        <h1>Why We Are Best</h1>
      </div>
      <div className="bottom">
        <Album album={album} />
      </div>
    </section>
  );
}
