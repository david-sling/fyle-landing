import React from "react";
import Choose from "../sections/Choose";
import Growth from "../sections/Growth";
import Hero from "../sections/Hero";
import Project from "../sections/Project";
import Services from "../sections/Services";

export default function Home() {
  return (
    <div className="Home">
      <Hero />
      <Services />
      <Choose />
      <Project />
      <Growth />
    </div>
  );
}
