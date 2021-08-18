import React from "react";
import Hero from "../sections/Hero";
import Project from "../sections/Project";
import Services from "../sections/Services";

export default function Home() {
  return (
    <div className="Home">
      <Hero />
      <Services />
      <Project />
    </div>
  );
}
